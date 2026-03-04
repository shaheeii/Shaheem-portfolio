import { NextResponse } from 'next/server';

/**
 * Generic Webhook Receiver
 * This endpoint can receive POST requests from external services.
 * You can extend this to handle specific events (e.g., Stripe, GitHub, etc.)
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const headers = Object.fromEntries(req.headers.entries());

    console.log('--- Webhook Received ---');
    console.log('Headers:', JSON.stringify(headers, null, 2));
    console.log('Payload:', JSON.stringify(body, null, 2));
    console.log('------------------------');

    // Here you would typically process the webhook data
    // e.g., update a database, trigger a notification, etc.

    return NextResponse.json({ 
      message: 'Webhook received successfully',
      receivedAt: new Error().stack, // Just a placeholder for timestamp logic if needed
      status: 'success' 
    });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json(
      { error: 'Invalid webhook payload' },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Webhook endpoint is active. Send a POST request to this URL to trigger it.',
    endpoint: '/api/webhook'
  });
}
