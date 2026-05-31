'use client';

import { useState } from 'react';
import { ListTodo, Filter, Plus, LayoutGrid, List, CheckCircle2, Clock, AlertCircle, CircleDot } from 'lucide-react';
import TaskCard from '@/components/ui/TaskCard';
import { tasks } from '@/lib/data';
import { getCategoryLabel } from '@/lib/utils';
import { TaskStatus } from '@/types';

const statusFilters: { value: TaskStatus | 'all'; label: string; icon: React.ElementType; count: number }[] = [
  { value: 'all', label: 'All Tasks', icon: LayoutGrid, count: tasks.length },
  { value: 'todo', label: 'To Do', icon: CircleDot, count: tasks.filter(t => t.status === 'todo').length },
  { value: 'in-progress', label: 'In Progress', icon: Clock, count: tasks.filter(t => t.status === 'in-progress').length },
  { value: 'completed', label: 'Completed', icon: CheckCircle2, count: tasks.filter(t => t.status === 'completed').length },
  { value: 'overdue', label: 'Overdue', icon: AlertCircle, count: tasks.filter(t => t.status === 'overdue').length },
];

const categoryFilters = [
  'all',
  'skill-development',
  'course-guidance',
  'career-guidance',
  'entrepreneurship',
  'finance',
  'art-craft',
];

export default function TasksPage() {
  const [statusFilter, setStatusFilter] = useState<TaskStatus | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredTasks = tasks.filter(task => {
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || task.category === categoryFilter;
    return matchesStatus && matchesCategory;
  });

  const totalSubtasks = tasks.reduce((acc, t) => acc + t.subtasks.length, 0);
  const completedSubtasks = tasks.reduce((acc, t) => acc + t.subtasks.filter(s => s.completed).length, 0);
  const overallProgress = totalSubtasks > 0 ? Math.round((completedSubtasks / totalSubtasks) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <ListTodo className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Task Board</h1>
              </div>
              <p className="text-gray-500">Track your learning tasks, assignments, and projects</p>
            </div>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl transition-all">
              <Plus className="w-4 h-4" />
              New Task
            </button>
          </div>

          {/* Progress Overview */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
              <p className="text-sm text-gray-600 font-medium">Total Tasks</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{tasks.length}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
              <p className="text-sm text-gray-600 font-medium">In Progress</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">{tasks.filter(t => t.status === 'in-progress').length}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm text-gray-600 font-medium">Completed</p>
              <p className="text-2xl font-bold text-green-600 mt-1">{tasks.filter(t => t.status === 'completed').length}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
              <p className="text-sm text-gray-600 font-medium">Overall Progress</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-2xl font-bold text-amber-600">{overallProgress}%</p>
                <div className="flex-1 h-2 bg-amber-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          {/* Status Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {statusFilters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.value}
                  onClick={() => setStatusFilter(filter.value)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    statusFilter === filter.value
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                  <span className={`px-1.5 py-0.5 rounded text-xs ${
                    statusFilter === filter.value ? 'bg-indigo-200 text-indigo-800' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                {categoryFilters.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : getCategoryLabel(cat)}
                  </option>
                ))}
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-400'}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-400'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tasks Grid */}
        {filteredTasks.length > 0 ? (
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
              : 'space-y-4'
          }>
            {filteredTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <ListTodo className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Tasks Found</h3>
            <p className="text-gray-500">Try changing your filters or create a new task.</p>
          </div>
        )}
      </div>
    </div>
  );
}
