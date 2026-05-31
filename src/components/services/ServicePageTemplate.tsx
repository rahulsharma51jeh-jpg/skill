import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Users, BookOpen, Clock, ArrowRight } from 'lucide-react';
import CourseCard from '@/components/ui/CourseCard';
import { Service, Course } from '@/types';

interface ServicePageTemplateProps {
  service: Service;
  courses: Course[];
}

export default function ServicePageTemplate({ service, courses }: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${service.color} pt-12 pb-20 overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <BookOpen className="w-4 h-4 text-white" />
                  <span className="text-sm text-white font-medium">{service.coursesCount} Courses</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Users className="w-4 h-4 text-white" />
                  <span className="text-sm text-white font-medium">Class {service.targetClasses[0]}-{service.targetClasses[service.targetClasses.length - 1]}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="text-sm text-white font-medium">Self-Paced</span>
                </div>
              </div>

              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg"
              >
                Start Learning <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Features Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-5">What You&apos;ll Learn</h3>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white/90 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Available Courses</h2>
              <p className="text-gray-500 mt-1">Explore courses in {service.title.toLowerCase()}</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
                <option>All Classes</option>
                {service.targetClasses.map(c => (
                  <option key={c}>Class {c}</option>
                ))}
              </select>
            </div>
          </div>

          {courses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We&apos;re preparing amazing courses for this category. Stay tuned for updates!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Why Choose Our {service.title}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-sm text-gray-500">Learn from industry professionals and experienced educators who understand student needs.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Practical Projects</h3>
              <p className="text-sm text-gray-500">Build real-world projects that you can showcase in your portfolio and college applications.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certificates</h3>
              <p className="text-sm text-gray-500">Earn verified certificates upon completion to boost your academic and career profile.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
