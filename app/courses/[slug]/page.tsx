import { PageHeader } from "@/components/ui/PageHeader";
import { COURSES } from "@/lib/constants";
import { notFound } from "next/navigation";
import { CourseDetail } from "@/components/courses/CourseDetail";

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
                    { label: "Courses", href: "/services" },
                    { label: course.title, href: `/courses/${course.slug}` },
                ]}
            />

            <CourseDetail course={course} />
        </div>
    );
}
