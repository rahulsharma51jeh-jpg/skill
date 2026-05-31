'use client';

import { CheckCircle2, Circle, Clock, Tag } from 'lucide-react';
import { Task } from '@/types';
import { getPriorityColor, getStatusColor, getCategoryLabel } from '@/lib/utils';

export default function TaskCard({ task }: { task: Task }) {
  const completedSubtasks = task.subtasks.filter(s => s.completed).length;
  const totalSubtasks = task.subtasks.length;
  const progress = totalSubtasks > 0 ? (completedSubtasks / totalSubtasks) * 100 : 0;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 p-5">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{task.title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">{task.description}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
          {task.status.replace('-', ' ')}
        </span>
        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
          {getCategoryLabel(task.category)}
        </span>
      </div>

      {/* Subtasks */}
      {task.subtasks.length > 0 && (
        <div className="space-y-2 mb-4">
          {task.subtasks.map((subtask) => (
            <div key={subtask.id} className="flex items-center gap-2 text-sm">
              {subtask.completed ? (
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
              )}
              <span className={subtask.completed ? 'text-gray-400 line-through' : 'text-gray-600'}>
                {subtask.title}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
          <span>{completedSubtasks}/{totalSubtasks} completed</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <Clock className="w-3.5 h-3.5" />
          <span>Due: {task.dueDate}</span>
        </div>
        <div className="flex items-center gap-1">
          {task.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="flex items-center gap-0.5 px-2 py-0.5 bg-gray-50 rounded text-xs text-gray-500">
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
