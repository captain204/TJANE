import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { format } from 'date-fns';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2023-10-16' as any,
});

export async function POST(req: Request) {
    try {
        const { session_id } = await req.json();

        if (!session_id) {
            return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.retrieve(session_id);

        if (session.payment_status === 'paid' && session.metadata?.email_sent === 'false') {
            const { course, date, time, name, email, phone, notes } = session.metadata;

            const htmlContent = `
        <h3>New Course Booking Confirmed</h3>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Notes:</strong> ${notes}</p>
        <p><strong>Amount Paid:</strong> $25.00 USD</p>
      `;

            // Call the existing /api/send logic or send directly via Resend
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: email, // Optionally replace with admin email, CC user
                    replyTo: email,
                    subject: `Booking Confirmed: ${course} - ${name}`,
                    html: htmlContent,
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to send confirmation email');
            }

            await stripe.checkout.sessions.update(session_id, {
                metadata: {
                    ...session.metadata,
                    email_sent: 'true',
                },
            });

            return NextResponse.json({ success: true, message: 'Payment confirmed and email sent.' });
        } else if (session.payment_status !== 'paid') {
            return NextResponse.json({ error: 'Payment not successful' }, { status: 400 });
        } else {
            return NextResponse.json({ success: true, message: 'Email already sent.' });
        }
    } catch (error: any) {
        console.error('Error confirming booking:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
