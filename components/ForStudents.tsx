import React from 'react';

const ForStudents: React.FC = () => {
  return (
    <section id="students" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                For Students & Parents
              </h2>
              <blockquote className="text-xl font-medium text-slate-300 italic mb-8 border-l-4 border-nmgreen-500 pl-4">
                "It's almost as important to know what you want to do as much as you know what you <span className="text-white font-bold">don't</span> want to do."
              </blockquote>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-nmgreen-600 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-white">Save Time & Money</h3>
                    <p className="mt-2 text-base text-slate-400">
                      College courses cost thousands. Don't spend two semesters studying something you hate. Try it out for free in high school first.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-nmgreen-600 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-white">Real Experience</h3>
                    <p className="mt-2 text-base text-slate-400">
                      Get out of the classroom and see how businesses actually work. Build your resume before you even graduate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images2.imgbox.com/e5/84/ZkDF4AUb_o.jpg" 
                alt="Student Experience" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-nmgreen-900 mix-blend-multiply opacity-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForStudents;