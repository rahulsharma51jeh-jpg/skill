import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { getServiceByCategory, getCoursesByCategory } from '@/lib/data';

export const metadata = {
  title: 'Course Guidance - Infinity Skills',
  description: 'Get personalized course recommendations and learning path guidance. Stream selection, exam prep, and study planning for Class 6-12.',
};

export default function CourseGuidancePage() {
  const service = getServiceByCategory('course-guidance')!;
  const courses = getCoursesByCategory('course-guidance');

  return <ServicePageTemplate service={service} courses={courses} />;
}
