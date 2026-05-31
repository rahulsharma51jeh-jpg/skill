import Link from 'next/link';
import { ArrowLeft, Clock, Users, Star, BookOpen, PlayCircle, FileText, HelpCircle, Wrench, CheckCircle2, Circle } from 'lucide-react';
import { courses } from '@/lib/data';
import { getCategoryLabel } from '@/lib/utils';

const lessonTypeIcons: Record<string, React.ElementType> = {
  video: PlayCircle,
  article: FileText,
  quiz: HelpCircle,
  project: Wrench,
};

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Course Not Found</h1>
          <p className="text-gray-500 mb-4">The course you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/courses" className="text-indigo-600 font-medium hover:text-indigo-700">
            &larr; Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = course.modules.reduce((acc, m) => acc + m.lessons.filter(l => l.completed).length, 0);
  const progress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/courses" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium capitalize">
                  {course.level}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                  {getCategoryLabel(course.category)}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold">{course.title}</h1>
              <p className="text-white/80 text-lg max-w-2xl">{course.description}</p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-white/70">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  {course.lessons} lessons
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  {course.enrolled.toLocaleString()} enrolled
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  {course.rating} rating
                </span>
              </div>

              <p className="text-sm text-white/60">Instructor: <span className="text-white/90 font-medium">{course.instructor}</span></p>
            </div>

            {/* Enrollment Card */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-gray-900">
              <div className="text-center mb-4">
                <p className="text-3xl font-bold text-green-600">Free</p>
                <p className="text-sm text-gray-500">No payment required</p>
              </div>

              {progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-600">Your Progress</span>
                    <span className="font-semibold text-indigo-600">{progress}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-200 transition-all mb-3">
                {progress > 0 ? 'Continue Learning' : 'Enroll Now - Free'}
              </button>
              <button className="w-full py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all">
                Add to Wishlist
              </button>

              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-500">
                <p>Target: Class {course.targetClasses.join(', ')}</p>
                <p>Certificate on completion</p>
                <p>Lifetime access</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Content</h2>

          {course.modules.length > 0 ? (
            <div className="space-y-4">
              {course.modules.map((module) => (
                <div key={module.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <div className="p-5 border-b border-gray-50">
                    <h3 className="font-semibold text-gray-900">
                      Module {module.order}: {module.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{module.description}</p>
                    <p className="text-xs text-gray-400 mt-2">{module.lessons.length} lessons</p>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {module.lessons.map((lesson) => {
                      const TypeIcon = lessonTypeIcons[lesson.type] || BookOpen;
                      return (
                        <div
                          key={lesson.id}
                          className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          {lesson.completed ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                          )}
                          <TypeIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className={`flex-1 text-sm ${lesson.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                            {lesson.title}
                          </span>
                          <span className="text-xs text-gray-400">{lesson.duration}</span>
                          <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-500 capitalize">
                            {lesson.type}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
              <BookOpen className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Course modules will be available soon.</p>
            </div>
          )}

          {/* Tags */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
