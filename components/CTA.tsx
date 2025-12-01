import React from 'react';

interface CTAProps {
  onJoinClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onJoinClick }) => {
  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-nmgreen-900 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-96 h-96 bg-nmgold-900 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1 max-w-sm mx-auto">
            <div className="absolute inset-0 bg-nmgold-500 transform translate-x-3 translate-y-3 rounded-2xl"></div>
            <img 
              src="https://images2.imgbox.com/20/79/Xz4zVVxt_o.jpeg" 
              alt="Students in a classroom" 
              className="relative w-full rounded-2xl shadow-2xl border border-slate-700 object-cover transform hover:-translate-y-1 transition-transform duration-300"
            />
          </div>

          {/* Text Side */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6 leading-tight">
              Ready to make a difference?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              It starts with a single hour. Host a tour, get your sticker, and help shape the future of New Milford.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onJoinClick}
                className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-xl font-bold rounded-full text-slate-900 bg-nmgold-400 hover:bg-nmgold-500 transition-all transform hover:-translate-y-1 shadow-2xl"
              >
                Become a Partner Today
              </button>
            </div>
            <p className="mt-6 text-slate-400 text-sm">
              No heavy paperwork. No long-term contracts. Just community.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;