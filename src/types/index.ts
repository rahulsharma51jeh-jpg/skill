// ============================================================
// INFINITY SKILLS - Type Definitions
// Production-ready type system for scalable skill development platform
// ============================================================

// User & Auth Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'student' | 'teacher' | 'admin';
  classLevel: number; // 6-12
  createdAt: string;
  updatedAt: string;
}

// Service Categories
export type ServiceCategory =
  | 'skill-development'
  | 'course-guidance'
  | 'career-guidance'
  | 'entrepreneurship'
  | 'finance'
  | 'art-craft';

export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  icon: string;
  color: string;
  features: string[];
  targetClasses: number[];
  coursesCount: number;
}

// Course Types
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type CourseStatus = 'draft' | 'published' | 'archived';

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: ServiceCategory;
  level: CourseLevel;
  duration: string;
  lessons: number;
  enrolled: number;
  rating: number;
  instructor: string;
  targetClasses: number[];
  tags: string[];
  status: CourseStatus;
  modules: CourseModule[];
  createdAt: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  order: number;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'article' | 'quiz' | 'project';
  duration: string;
  completed: boolean;
}

// Task Types
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TaskStatus = 'todo' | 'in-progress' | 'completed' | 'overdue';

export interface Task {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
  assignedTo?: string;
  tags: string[];
  subtasks: SubTask[];
  createdAt: string;
}

export interface SubTask {
  id: string;
  title: string;
  completed: boolean;
}

// Progress Tracking
export interface UserProgress {
  userId: string;
  courseId: string;
  completedLessons: string[];
  totalLessons: number;
  percentage: number;
  lastAccessed: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
