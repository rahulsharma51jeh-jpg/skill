import Link from 'next/link';
import { Rocket, Compass, Target, Lightbulb, TrendingUp, Palette, ArrowRight } from 'lucide-react';
import { Service } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Compass,
  Target,
  Lightbulb,
  TrendingUp,
  Palette,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Rocket;

  return (
    <Link href={`/services/${service.category}`}>
      <div className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />
        
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {service.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-400">
            {service.coursesCount} courses
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
            Explore <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
