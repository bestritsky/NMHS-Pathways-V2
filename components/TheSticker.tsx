import React from 'react';

const TheSticker: React.FC = () => {
  return (
    <section className="py-16 bg-nmgreen-900 text-white overflow-hidden relative">
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-nmgreen-800 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-nmgreen-700 opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-12">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Put It On Your Door: <br />
              <span className="text-nmgold-400">The 2026 Partner Badge</span>
            </h2>
            <p className="text-nmgreen-100 text-lg mb-8">
              Become a recognized pillar of the New Milford community. Every partner receives an official window cling for their office or storefront. It's a signal to customers that you invest in our town's future.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmgold-500 flex items-center justify-center mt-1">
                  <svg className="h-4 w-4 text-nmgreen-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <span className="ml-3 text-white font-medium">Instantly recognizable community status</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmgold-500 flex items-center justify-center mt-1">
                  <svg className="h-4 w-4 text-nmgreen-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <span className="ml-3 text-white font-medium">New design every year (collectible!)</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images2.imgbox.com/ba/ab/gz8NlHib_o.jpeg" 
              alt="The 2026 Partner Badge"
              className="w-full h-full object-cover rounded-xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSticker;