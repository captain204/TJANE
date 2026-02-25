import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2023-10-16' as any,
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { course, date, time, name, email, phone, notes, paymentOption } = body;

        let unit_amount = 2500; // $25.00 in cents
        let description = `Date: ${date}, Time: ${time}`;
        let productName = `Booking for ${course}`;

        if (course === "Anger Management" && paymentOption === "full") {
            unit_amount = 30000; // $300.00
            description = `Full course (12 sessions). Starts on: ${date}, Time: ${time}`;
            productName = `Booking for ${course} (Full Course)`;
        } else if (course === "Anger Management" && paymentOption === "single") {
            description = `Single session. Date: ${date}, Time: ${time}`;
            productName = `Booking for ${course} (Per Session)`;
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: productName,
                            description: description,
                        },
                        unit_amount: unit_amount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/courses`,
            metadata: {
                course,
                date,
                time,
                name,
                email,
                phone,
                notes: notes || 'N/A',
                email_sent: 'false',
            },
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error('Error creating checkout session:', error.message || error);
        return NextResponse.json({ error: "Payment system unavailable. Please contact support or try again later." }, { status: 500 });
    }
}
