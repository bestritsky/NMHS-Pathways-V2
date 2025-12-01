import React from 'react';
import { Megaphone, Users, Award, TrendingUp } from 'lucide-react';
import { BenefitItem } from '../types';

const BusinessBenefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      title: "Free Local Marketing",
      description: "Get featured on our Instagram (1,100+ local followers) and listed on the official Pathways website. Increase your visibility with parents and families.",
      icon: Megaphone
    },
    {
      title: "Future Workforce",
      description: "Identify talent early. Whether it's summer help or future full-time employees, meet the next generation before they enter the job market.",
      icon: Users
    },
    {
      title: "Official Partner Status",
      description: "Receive the exclusive 'NMHS Pathways Partner' window cling. Display your commitment to the community with pride at your place of business.",
      icon: Award
    },
    {
      title: "Community Legacy",
      description: "Ensure your industry thrives in New Milford. Pass on your knowledge and potentially find the successor for your business's future.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="business" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-nmgreen-600 uppercase tracking-wide">Why Partner With Us?</h2>
          <p className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Grow Your Business while Growing Minds
          </p>
          <p className="mt-4 text-xl text-slate-500">
            It's not charity; it's a strategic move for your local presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nmgreen-400 to-nmgreen-600 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-nmgreen-600 group-hover:bg-nmgreen-600 group-hover:text-white transition-colors duration-300">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;