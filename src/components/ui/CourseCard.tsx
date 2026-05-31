import Link from 'next/link';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import { Course } from '@/types';
import { getCategoryLabel } from '@/lib/utils';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        {/* Thumbnail */}
        <div className="relative h-44 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-indigo-300" />
          </div>
          {/* Level Badge */}
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-indigo-600 capitalize">
            {course.level}
          </span>
          {/* Category Badge */}
          <span className="absolute top-3 right-3 px-2.5 py-1 bg-indigo-600/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
            {getCategoryLabel(course.category)}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            {course.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              {course.lessons} lessons
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {course.enrolled.toLocaleString()}
            </span>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-50">
            <span className="text-sm text-gray-600 font-medium">
              {course.instructor}
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-amber-500">
              <Star className="w-4 h-4 fill-amber-400" />
              {course.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
