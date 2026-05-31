import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { getServiceByCategory, getCoursesByCategory } from '@/lib/data';

export const metadata = {
  title: 'Entrepreneurship - Infinity Skills',
  description: 'Learn business fundamentals, startup basics, marketing, and product development. Start your entrepreneurial journey early.',
};

export default function EntrepreneurshipPage() {
  const service = getServiceByCategory('entrepreneurship')!;
  const courses = getCoursesByCategory('entrepreneurship');

  return <ServicePageTemplate service={service} courses={courses} />;
}
