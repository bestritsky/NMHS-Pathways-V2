import React from 'react';
import { Clock, MapPin, Users, Briefcase, GraduationCap } from 'lucide-react';

const ProgramLevels: React.FC = () => {
  const levels = [
    {
      id: 1,
      title: "The Business Tour",
      duration: "30 mins - 2 hours",
      icon: MapPin,
      description: "The easiest way to start. Host a small group of students at your location. Show them the day-to-day operations, introduce your team, and let them feel the environment. No paperwork, just inspiration.",
      color: "bg-blue-50 border-blue-200 text-blue-700",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Guest Speaker",
      duration: "40 mins (Flex Period)",
      icon: Users,
      description: "Can't host a tour? Come to us. Visit NMHS during a 40-minute Flex period or use our Lecture Hall to speak to interested students about your industry and career path.",
      color: "bg-indigo-50 border-indigo-200 text-indigo-700",
      iconColor: "text-indigo-600"
    },
    {
      id: 3,
      title: "Job Shadowing",
      duration: "2 - 6 hours",
      icon: Clock,
      description: "A student follows a staff member for a few hours or days. They observe real work in action. Great for students who have identified a specific interest in your field.",
      color: "bg-purple-50 border-purple-200 text-purple-700",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      title: "Unpaid Internship",
      duration: "~50 hours",
      icon: Briefcase,
      description: "A deeper commitment. Students earn 0.5 school credits. Occurs over summer, vacations, or after school. A true mentorship opportunity.",
      color: "bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700",
      iconColor: "text-fuchsia-600"
    },
    {
      id: 5,
      title: "Immersion Program",
      duration: "Summer (1 Week)",
      icon: GraduationCap,
      description: "Intensive 20-hour week-long experience. Often grant-funded (students may receive stipends). Focuses on industries like Healthcare, Manufacturing, and Engineering.",
      color: "bg-pink-50 border-pink-200 text-pink-700",
      iconColor: "text-pink-600"
    }
  ];

  return (
    <section id="program" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-nmgreen-600 uppercase tracking-wide">The Ladder of Engagement</h2>
          <p className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Start Small. Scale Up.
          </p>
          <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
            You don't need a massive HR department to help. Choose the level that fits your schedule.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {levels.map((level, index) => (
            <div key={level.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon/Connector */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform">
                <level.icon size={18} className="text-slate-600" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-slate-900">{level.title}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide ${level.color}`}>
                    {level.duration}
                  </span>
                </div>
                <p className="text-slate-600">{level.description}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramLevels;