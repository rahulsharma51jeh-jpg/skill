import Link from 'next/link';
import { ArrowRight, Users, BookOpen, Trophy, Sparkles, GraduationCap, Star } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import CourseCard from '@/components/ui/CourseCard';
import { services, courses } from '@/lib/data';

export default function HomePage() {
  const featuredCourses = courses.slice(0, 6);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-100/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">For Students of Class 6-12</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Unlock Your
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Infinite Potential
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Build skills that matter. From coding to creativity, career guidance to entrepreneurship 
                &mdash; develop yourself for the future with India&apos;s most comprehensive skill platform for students.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transition-all hover:-translate-y-0.5"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/skill-development"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50 transition-all"
                >
                  View Services
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">15K+</p>
                  <p className="text-xs text-gray-500">Active Students</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">168+</p>
                  <p className="text-xs text-gray-500">Courses</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">4.8</p>
                  <p className="text-xs text-gray-500">Avg Rating</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px]">
                {/* Main card */}
                <div className="absolute top-8 right-0 w-80 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Learning Progress</p>
                      <p className="text-xs text-gray-500">This Week</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Python Course</span>
                        <span className="text-indigo-600 font-medium">75%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full">
                        <div className="w-3/4 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Public Speaking</span>
                        <span className="text-emerald-600 font-medium">90%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full">
                        <div className="w-[90%] h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Digital Art</span>
                        <span className="text-pink-600 font-medium">45%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full">
                        <div className="w-[45%] h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute top-0 left-0 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold text-gray-900">5 Skills Mastered!</span>
                  </div>
                </div>

                <div className="absolute bottom-12 left-8 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-medium text-gray-700">Top 10% in Class</span>
                  </div>
                </div>

                <div className="absolute bottom-32 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-4 text-white">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-medium">432 peers learning together</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 rounded-full text-sm font-medium text-indigo-600 mb-4">
              <BookOpen className="w-4 h-4" />
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to
              <span className="text-indigo-600"> Grow</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From skill development to career planning, we provide comprehensive services designed 
              specifically for students of Class 6 to 12.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 rounded-full text-sm font-medium text-purple-600 mb-4">
                <Star className="w-4 h-4" />
                Featured Courses
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                Popular Courses
              </h2>
              <p className="text-gray-500 mt-2">Start learning with our most popular courses</p>
            </div>
            <Link
              href="/courses"
              className="hidden sm:flex items-center gap-1 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="sm:hidden text-center mt-8">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1 text-indigo-600 font-medium"
            >
              View All Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Class Levels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Designed for Every Student
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Age-appropriate content and activities for students from Class 6 to 12
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {[6, 7, 8, 9, 10, 11, 12].map((classNum) => (
              <div
                key={classNum}
                className="group bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 text-center border border-indigo-100 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100 transition-all cursor-pointer hover:-translate-y-1"
              >
                <p className="text-3xl font-bold text-indigo-600 group-hover:text-indigo-700">
                  {classNum}
                </p>
                <p className="text-xs text-gray-500 mt-1 font-medium">Class {classNum}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-indigo-100 text-lg mb-8">
                Join thousands of students who are building skills for the future. 
                Start with any course &mdash; it&apos;s completely free!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-all"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/tasks"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  View Tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
