import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { getServiceByCategory, getCoursesByCategory } from '@/lib/data';

export const metadata = {
  title: 'Skill Development Courses - Infinity Skills',
  description: 'Master in-demand skills with structured learning paths. Programming, communication, critical thinking, and more for Class 6-12 students.',
};

export default function SkillDevelopmentPage() {
  const service = getServiceByCategory('skill-development')!;
  const courses = getCoursesByCategory('skill-development');

  return <ServicePageTemplate service={service} courses={courses} />;
}
