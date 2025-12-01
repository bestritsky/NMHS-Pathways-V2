import React from 'react';

const partners = [
  "Nuance",
  "Ability Beyond",
  "Active Health",
  "Danbury Hospital",
  "Danbury Radiology",
  "Northwest Regional Workforce Investment Board"
];

const PartnerScroller: React.FC = () => {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-8 overflow-hidden">
       <div className="text-center mb-6">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted by Community Leaders</p>
      </div>
      <div className="flex relative max-w-[100vw]">
        <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center">
          {partners.map((partner, index) => (
            <span key={index} className="mx-8 text-xl md:text-2xl font-bold text-slate-400/60 hover:text-nmgreen-600 transition-colors duration-300 cursor-default">
              {partner}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center">
          {partners.map((partner, index) => (
            <span key={`dup-${index}`} className="mx-8 text-xl md:text-2xl font-bold text-slate-400/60 hover:text-nmgreen-600 transition-colors duration-300 cursor-default">
              {partner}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center">
          {partners.map((partner, index) => (
            <span key={`dup2-${index}`} className="mx-8 text-xl md:text-2xl font-bold text-slate-400/60 hover:text-nmgreen-600 transition-colors duration-300 cursor-default">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerScroller;