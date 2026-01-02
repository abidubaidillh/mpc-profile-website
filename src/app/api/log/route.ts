import { NextRequest, NextResponse } from 'next/server';

interface LogData {
  nama: string;
  whatsapp: string;
  kelas: string;
  program: string;
  email?: string;
  pesan?: string;
  honeypot?: string;
  referer?: string;
}

interface LogEntry {
  timestamp: string;
  data: LogData;
  ip?: string;
  userAgent?: string;
}

// Simple in-memory store for demonstration
// In production, you should use a proper logging service or database
const logs: LogEntry[] = [];

// Rate limiting store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limit: max 10 submissions per IP per minute
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  rateLimitStore.set(ip, record);
  return true;
}

// Clean up old rate limit records periodically
function cleanupRateLimit() {
  const now = Date.now();
  for (const [ip, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}

// Run cleanup every 5 minutes
setInterval(cleanupRateLimit, 5 * 60 * 1000);

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json().catch(() => null);
    
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    // Basic validation
    if (!body.nama || !body.whatsapp || !body.kelas || !body.program) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Sanitize data (prevent log injection)
    const sanitizedData = {
      nama: String(body.nama).substring(0, 100),
      whatsapp: String(body.whatsapp).substring(0, 20),
      kelas: String(body.kelas).substring(0, 50),
      program: String(body.program).substring(0, 100),
      email: body.email ? String(body.email).substring(0, 100) : undefined,
      pesan: body.pesan ? String(body.pesan).substring(0, 500) : undefined,
      honeypot: body.honeypot || undefined,
      referer: request.headers.get('referer')?.substring(0, 200),
    };

    // Create log entry
    const logEntry = {
      timestamp: new Date().toISOString(),
      data: sanitizedData,
      ip,
      userAgent: request.headers.get('user-agent')?.substring(0, 200),
    };

    // Add to logs
    logs.push(logEntry);

    // Keep only last 1000 logs to prevent memory issues
    if (logs.length > 1000) {
      logs.splice(0, logs.length - 1000);
    }

    // Log to console (for server logs)
    console.log('Form submission logged:', {
      id: logs.length - 1,
      ...sanitizedData,
    });

    // In production, you would want to:
    // 1. Send to a logging service (Sentry, LogRocket, etc.)
    // 2. Store in a database (PostgreSQL, MongoDB, etc.)
    // 3. Send notifications (email, Slack, etc.)

    return NextResponse.json({
      success: true,
      message: 'Form submission logged successfully',
      logId: logs.length - 1,
    });

  } catch (error) {
    console.error('Error logging form submission:', error);
    
    // Don't expose internal errors to client
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // For debugging/admin purposes only
  // In production, you should protect this endpoint with authentication
  
  const authHeader = request.headers.get('authorization');
  const expectedToken = process.env.ADMIN_TOKEN;
  
  if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    count: logs.length,
    logs: logs.slice(-50).reverse(), // Return last 50 logs
  });
}
