import Link from 'next/link';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Infinity Skills</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering students from Class 6-12 with essential skills for the future. 
              Learn, grow, and achieve your dreams with our comprehensive skill development platform.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services/skill-development" className="hover:text-indigo-400 transition-colors">Skill Development</Link></li>
              <li><Link href="/services/course-guidance" className="hover:text-indigo-400 transition-colors">Course Guidance</Link></li>
              <li><Link href="/services/career-guidance" className="hover:text-indigo-400 transition-colors">Career Guidance</Link></li>
              <li><Link href="/services/entrepreneurship" className="hover:text-indigo-400 transition-colors">Entrepreneurship</Link></li>
              <li><Link href="/services/finance" className="hover:text-indigo-400 transition-colors">Finance & Money</Link></li>
              <li><Link href="/services/art-craft" className="hover:text-indigo-400 transition-colors">Art & Craft</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/courses" className="hover:text-indigo-400 transition-colors">All Courses</Link></li>
              <li><Link href="/tasks" className="hover:text-indigo-400 transition-colors">Task Board</Link></li>
              <li><Link href="/dashboard" className="hover:text-indigo-400 transition-colors">Dashboard</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>hello@infinityskills.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2024 Infinity Skills. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
