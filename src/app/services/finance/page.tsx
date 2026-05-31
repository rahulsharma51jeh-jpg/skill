import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { getServiceByCategory, getCoursesByCategory } from '@/lib/data';

export const metadata = {
  title: 'Finance & Money Skills - Infinity Skills',
  description: 'Build financial literacy from an early age. Learn saving, investing, budgeting, and understanding the economy.',
};

export default function FinancePage() {
  const service = getServiceByCategory('finance')!;
  const courses = getCoursesByCategory('finance');

  return <ServicePageTemplate service={service} courses={courses} />;
}
