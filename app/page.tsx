"use client";

import { Hero } from "@/components/home/Hero";
import { BookingForm } from "@/components/ui/BookingForm";
import { CourseCard } from "@/components/ui/CourseCard";
import { GoogleReviews } from "@/components/ui/GoogleReviews";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Star } from "lucide-react";

import { COURSES } from "@/lib/constants";


const FEATURES = [
  {
    title: "Same Day Certification",
    text: "Walk out with your official eCard immediately after successfully completing the course.",
    icon: <CheckCircle2 size={32} className="text-brand-secondary-500" />
  },
  {
    title: "Expert Instructors",
    text: "Learn from experienced nurses and paramedics who use these skills in real-life scenarios.",
    icon: <Users size={32} className="text-brand-secondary-500" />
  },
  {
    title: "Official Training Site",
    text: "We are an authorized training provider for AHA, Red Cross, and ASHI.",
    icon: <Award size={32} className="text-brand-secondary-500" />
  },
  {
    title: "5-Star Rated",
    text: "Trusted by thousands of students with consistent 5-star reviews on Google.",
    icon: <Star size={32} className="text-brand-secondary-500" />
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Booking Section */}
      <section className="py-20 bg-white relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-brand-secondary-600 font-bold tracking-wider uppercase text-sm">Schedule Now</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Find a Course Near You
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our interactive calendar makes it easy to find a class that fits your schedule.
                  Select a date to view available time slots for CPR, BLS, and First Aid training.
                  <br /><br />
                  <strong>Need a private group class?</strong> <a href="/corporate-training" className="text-brand-primary-600 font-semibold hover:underline">Contact us</a> for corporate rates.
                </p>

                <div className="flex gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 flex flex-col justify-center">
                    <span className="font-bold text-gray-900">500+</span>
                    <span>Classes / Year</span>
                  </div>
                </div>
              </div>

              <div>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Most Popular Certifications
            </h2>
            <p className="text-gray-600 text-lg">
              Whether you are a healthcare professional or a safety-conscious citizen, we have the right course for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                slug={course.slug}
                description={course.description}
                image={course.image}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/services" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-primary-700 bg-brand-primary-100 hover:bg-brand-primary-200 transition-colors">
              View All Courses
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="mb-4 bg-brand-secondary-50 w-14 h-14 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />
    </div>
  );
}
