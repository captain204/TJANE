
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { to, subject, html, replyTo } = await request.json();

        const data = await resend.emails.send({
            from: 'Tjane Health <onboarding@resend.dev>', // Using the Testing domain for now as likely no domain verified
            to: [to], // During testing with resend.dev, it only sends to the account owner. 
            // Ideally, in production, this 'to' should be the admin email receiving the inquiries.
            // But the user said "all form queries and data should be sent to resend.com and the account with the above api key".
            // This implies we send TO the admin (the account holder).
            // Since I don't have the user's specific email, I will default to sending to the configured RESEND email (which automatically traps emails sent to it in test mode)
            // OR I should accept a 'to' field. 
            // Let's assume the 'to' is the admin email. In Resend test mode, 'onboarding@resend.dev' can only send to the email address associated with the API key.
            subject: subject,
            html: html,
            replyTo: replyTo
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
