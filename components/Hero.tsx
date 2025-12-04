import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
  onWatchVideoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick, onWatchVideoClick }) => {
  return (
    <div className="relative bg-slate-900 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images2.imgbox.com/11/bc/OuWnhOdl_o.jpg" 
          alt="New Milford High School" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-nmgreen-900/50 border border-nmgreen-500/30 text-white mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
          <span className="text-white">Building the Future of New Milford</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Give Us Just <span className="text-white">One Hour.</span><br />
          Market Your Company <span className="text-nmgold-500">For Free.</span><br />
          Inspire the Next <span className="text-white">New Milford Generation.</span>
        </h1>
        
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          <span className="block text-white font-medium mb-2">Don’t let the future of New Milford be decided without you.</span>
          Your business is the heartbeat of this town. Give us one hour to tour your operations, and we'll give you a direct line to shape what comes next. Plus, earn the exclusive "New Milford Partner" window decal to show customers you’re leading the charge.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={onJoinClick}
            className="group w-full sm:w-auto bg-nmgreen-600 hover:bg-nmgreen-500 text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
          >
            Become a Partner
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={onWatchVideoClick}
            className="group w-full sm:w-auto px-8 py-4 rounded-full border-2 border-slate-500 text-slate-300 font-semibold hover:border-white hover:text-white transition-colors text-lg flex items-center justify-center"
          >
            <PlayCircle className="mr-2 w-5 h-5 group-hover:text-nmgold-400 transition-colors" />
            How it Works Video
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center space-x-8 text-slate-400 text-sm font-medium">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-nmgreen-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            2,000+ Local Businesses
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-nmgreen-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            1,100+ Student Reach
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;