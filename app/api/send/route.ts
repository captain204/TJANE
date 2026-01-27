
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { to, subject, html, replyTo } = await request.json();

        const data = await resend.emails.send({
            from: 'Tjane Health <onboarding@resend.dev>',
            to: [to],
            subject: subject,
            html: html,
            replyTo: replyTo
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
