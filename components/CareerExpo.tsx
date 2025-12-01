import React from 'react';
import { Calendar, Users, Briefcase, Layout } from 'lucide-react';

interface CareerExpoProps {
  onJoinClick: () => void;
}

const CareerExpo: React.FC<CareerExpoProps> = ({ onJoinClick }) => {
  return (
    <section className="py-20 bg-nmgold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-nmgold-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 text-nmgold-600 font-bold tracking-wider uppercase text-sm mb-4">
                <Calendar size={18} />
                <span>Save the Date - April 9th, 2026 (10:00 AM - 1:00 PM)</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Annual Career EXPO
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A massive opportunity to connect with <span className="font-bold text-slate-900">1,100 students</span> in a single day.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-nmgold-100 flex items-center justify-center text-nmgold-600">
                      <Layout size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">The Arena Experience</h3>
                    <p className="text-slate-500">
                      We provide the table and chairs in our school arena. You bring your brand, signage, and energy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-nmgold-100 flex items-center justify-center text-nmgold-600">
                      <Briefcase size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Recruit & Inspire</h3>
                    <p className="text-slate-500">
                      Get students excited about summer work or future careers. Help them understand the diversity of businesses in our own community.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                 <button 
                  onClick={onJoinClick}
                  className="bg-nmgold-500 hover:bg-nmgold-400 text-slate-900 font-bold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
                >
                  Reserve Your Table
                </button>
              </div>
            </div>

            <div className="relative bg-slate-900 min-h-[300px] lg:min-h-full flex flex-col items-center justify-center p-10 text-center order-1 lg:order-2 overflow-hidden">
               {/* Background Image */}
               <img 
                  src="https://images2.imgbox.com/00/f9/uZmUuEEG_o.jpeg" 
                  alt="Career Expo Arena" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/90"></div>
               
               <div className="relative z-10">
                 <div className="text-nmgold-400 font-black text-8xl md:text-9xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
                   2026
                 </div>
                 <div className="text-white font-bold text-2xl mb-2 drop-shadow-md">APRIL</div>
                 <div className="text-7xl md:text-8xl font-black text-white mb-2 leading-none drop-shadow-md">09</div>
                 <div className="text-nmgold-400 text-xl font-medium tracking-widest uppercase mb-6 drop-shadow-md">Thursday</div>
                 
                 <div className="inline-block px-6 py-2 rounded-full border border-slate-500 bg-slate-800/80 backdrop-blur-md text-white font-semibold shadow-lg">
                    10:00 AM - 1:00 PM
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerExpo;