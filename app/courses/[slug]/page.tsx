import { PageHeader } from "@/components/ui/PageHeader";
import { COURSES } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Award } from "lucide-react";

// Generate static params for all courses
export async function generateStaticParams() {
    return COURSES.map((course) => ({
        slug: course.slug,
    }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
    const course = COURSES.find((c) => c.slug === params.slug);

    if (!course) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title={course.title}
                subtitle="Professional Verification & Certification"
                breadcrumbs={[
                    { label: "Courses", href: "/services" }, // 'Find courses' link redirects to list of courses
                    { label: course.title, href: `/courses/${course.slug}` },
                ]}
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Image Column */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-auto">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Details Column */}
                        <div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {course.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-brand-secondary-50 text-brand-secondary-700 px-3 py-1 rounded-full text-sm font-semibold"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Description</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {course.description}
                                <br /><br />
                                Our {course.title} course is designed to provide you with the knowledge and skills necessary to respond to breathing and cardiac emergencies.
                                This comprehensive training covers evidence-based life-saving techniques.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="text-brand-primary-500" />
                                    <span className="font-medium">Self-Paced / Flexible</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl">
                                    <Award className="text-brand-primary-500" />
                                    <span className="font-medium">Official Certification</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl">
                                    <MapPin className="text-brand-primary-500" />
                                    <span className="font-medium">Multiple Locations</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/corporate-training"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary-600 text-white font-bold rounded-xl hover:bg-brand-primary-700 transition-colors shadow-lg shadow-brand-primary-200"
                                >
                                    Book Corporate Training
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-primary-100 text-brand-primary-700 font-bold rounded-xl hover:bg-brand-primary-50 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
