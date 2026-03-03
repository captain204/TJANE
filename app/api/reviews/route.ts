import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
        const apiKey = process.env.GOOGLE_PLACES_API_KEY;

        if (!placeId || !apiKey) {
            return NextResponse.json(
                { error: 'Google Places API credentials are not configured.' },
                { status: 500 }
            );
        }

        const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status !== 'OK') {
            return NextResponse.json(
                { error: `Google Places API Error: ${data.status}`, details: data.error_message },
                { status: 400 }
            );
        }

        const { result } = data;

        // Sort reviews by rating (highest first) and then by time (newest first)
        const sortedReviews = result.reviews?.sort((a: any, b: any) => {
            if (b.rating !== a.rating) {
                return b.rating - a.rating;
            }
            return b.time - a.time;
        }) || [];

        return NextResponse.json({
            name: result.name,
            rating: result.rating,
            user_ratings_total: result.user_ratings_total,
            reviews: sortedReviews,
        });
    } catch (error) {
        console.error('Error fetching Google Places reviews:', error);
        return NextResponse.json(
            { error: 'Failed to fetch reviews.' },
            { status: 500 }
        );
    }
}
