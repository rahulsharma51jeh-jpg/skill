import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { getServiceByCategory, getCoursesByCategory } from '@/lib/data';

export const metadata = {
  title: 'Career Guidance - Infinity Skills',
  description: 'Explore diverse career options, get mentorship, and plan your professional journey from school onwards.',
};

export default function CareerGuidancePage() {
  const service = getServiceByCategory('career-guidance')!;
  const courses = getCoursesByCategory('career-guidance');

  return <ServicePageTemplate service={service} courses={courses} />;
}
