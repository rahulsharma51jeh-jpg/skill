import { BookOpen, CheckCircle2, Clock, Trophy, TrendingUp, Target, Flame } from 'lucide-react';
import StatsCard from '@/components/ui/StatsCard';
import CourseCard from '@/components/ui/CourseCard';
import TaskCard from '@/components/ui/TaskCard';
import { courses, tasks } from '@/lib/data';

export const metadata = {
  title: 'Dashboard - Infinity Skills',
  description: 'Track your learning progress, tasks, and achievements.',
};

export default function DashboardPage() {
  const inProgressTasks = tasks.filter(t => t.status === 'in-progress');
  const recentCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, Student! 👋</h1>
              <p className="text-gray-500 mt-1">Here&apos;s your learning progress overview</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-xl border border-orange-100">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-semibold text-orange-700">7 Day Streak!</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Courses Enrolled"
            value={5}
            description="+2 this month"
            icon={<BookOpen className="w-5 h-5 text-indigo-600" />}
            color="bg-indigo-100"
          />
          <StatsCard
            title="Tasks Completed"
            value={12}
            description="3 pending"
            icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
            color="bg-green-100"
          />
          <StatsCard
            title="Hours Learned"
            value="24h"
            description="This month"
            icon={<Clock className="w-5 h-5 text-purple-600" />}
            color="bg-purple-100"
          />
          <StatsCard
            title="Achievements"
            value={8}
            description="2 new badges"
            icon={<Trophy className="w-5 h-5 text-amber-600" />}
            color="bg-amber-100"
          />
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Learning Progress */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Learning Progress</h2>
              <span className="text-sm text-indigo-600 font-medium cursor-pointer hover:text-indigo-700">View All</span>
            </div>
            <div className="space-y-5">
              {[
                { name: 'Python Programming', progress: 75, color: 'from-blue-500 to-indigo-500' },
                { name: 'Public Speaking', progress: 90, color: 'from-emerald-500 to-teal-500' },
                { name: 'Digital Art', progress: 45, color: 'from-pink-500 to-rose-500' },
                { name: 'Financial Literacy', progress: 30, color: 'from-amber-500 to-orange-500' },
                { name: 'Web Development', progress: 15, color: 'from-purple-500 to-violet-500' },
              ].map((course) => (
                <div key={course.name}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="text-gray-700 font-medium">{course.name}</span>
                    <span className="text-gray-500">{course.progress}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all duration-500`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats / Goals */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Goals</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700">Complete 3 lessons</p>
                    <p className="text-xs text-gray-400">2/3 completed</p>
                  </div>
                  <span className="text-sm font-semibold text-indigo-600">67%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700">Finish 2 tasks</p>
                    <p className="text-xs text-gray-400">1/2 completed</p>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600">50%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700">Study 5 hours</p>
                    <p className="text-xs text-gray-400">3.5/5 hours</p>
                  </div>
                  <span className="text-sm font-semibold text-purple-600">70%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-2">Keep it up!</h3>
              <p className="text-sm text-white/80 mb-3">
                You&apos;re in the top 15% of learners this week. Maintain your streak!
              </p>
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-300" />
                <span className="text-sm font-medium">7 day learning streak</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Tasks */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold text-gray-900">Active Tasks</h2>
            <a href="/tasks" className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View All Tasks &rarr;</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {inProgressTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold text-gray-900">Recommended for You</h2>
            <a href="/courses" className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View All &rarr;</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
