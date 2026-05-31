import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { getServiceByCategory, getCoursesByCategory } from '@/lib/data';

export const metadata = {
  title: 'Art & Craft - Infinity Skills',
  description: 'Express your creativity through digital art, painting, DIY crafts, photography, and creative writing.',
};

export default function ArtCraftPage() {
  const service = getServiceByCategory('art-craft')!;
  const courses = getCoursesByCategory('art-craft');

  return <ServicePageTemplate service={service} courses={courses} />;
}
