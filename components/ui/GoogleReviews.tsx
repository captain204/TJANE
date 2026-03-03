"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, User } from 'lucide-react';

interface Review {
    author_name: string;
    author_url: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
}

interface PlaceData {
    name: string;
    rating: number;
    user_ratings_total: number;
    reviews: Review[];
}

export function GoogleReviews() {
    const [data, setData] = useState<PlaceData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const res = await fetch('/api/reviews');
                if (!res.ok) {
                    throw new Error('Failed to fetch reviews');
                }
                const json = await res.json();
                setData(json);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary-600"></div>
            </div>
        );
    }

    if (error || !data || data.reviews.length === 0) {
        return null; // Silently fail or return a fallback if no reviews are available.
    }

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Trusted by Students
                        </h2>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-gray-600 text-lg">
                        <div className="flex items-center gap-2">
                            <span className="text-4xl font-bold text-gray-900">{data.rating.toFixed(1)}</span>
                            <div className="flex flex-col items-start">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(data.rating)
                                                    ? "text-yellow-400 fill-current"
                                                    : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm">Based on {data.user_ratings_total} Google Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.reviews.slice(0, 6).map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {review.profile_photo_url ? (
                                    <img
                                        src={review.profile_photo_url}
                                        alt={review.author_name}
                                        className="w-12 h-12 rounded-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-brand-primary-100 flex items-center justify-center text-brand-primary-600">
                                        <User size={24} />
                                    </div>
                                )}
                                <div>
                                    <h3 className="font-bold text-gray-900">{review.author_name}</h3>
                                    <div className="flex text-sm mt-1">
                                        {[...Array(5)].map((_, idx) => (
                                            <Star
                                                key={idx}
                                                className={`w-4 h-4 ${idx < review.rating
                                                        ? "text-yellow-400 fill-current"
                                                        : "text-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-grow">
                                <p className="text-gray-600 italic line-clamp-4">"{review.text}"</p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-sm text-gray-400">
                                <span>{review.relative_time_description}</span>
                                <MessageCircle size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
