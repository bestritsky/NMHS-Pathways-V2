import React from 'react';
import { GraduationCap, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 text-white mb-4">
              <GraduationCap size={24} />
              <span className="font-bold text-lg">NMHS Pathways</span>
            </div>
            <p className="text-sm leading-relaxed">
              Connecting New Milford High School students with local businesses to foster career exploration and community growth.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-nmgreen-500" />
                <a href="mailto:pathways@newmilford.k12.ct.us" className="hover:text-white transition-colors">pathways@newmilford.k12.ct.us</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-nmgreen-500" />
                <span>(860) 355-8406</span>
              </li>
              <li className="text-sm mt-2">
                388 Danbury Rd, New Milford, CT 06776
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#business" className="hover:text-white transition-colors">For Business</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Program Details</a></li>
              <li><a href="#students" className="hover:text-white transition-colors">For Students</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs">
          &copy; {new Date().getFullYear()} New Milford High School Pathways. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;