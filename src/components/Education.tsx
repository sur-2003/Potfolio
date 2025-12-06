import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Manonmaniam Sundaranar University (MSU)',
      period: '2024 – 2026',
      status: 'In Progress',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Government Arts & Science College, Kanyakumari',
      period: '2021 – 2024',
      status: 'Completed',
      color: 'from-blue-500 to-purple-600',
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 hidden lg:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 lg:text-right lg:pr-12">
                  {index % 2 === 0 && (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                      <div className="flex items-center gap-3 mb-4 justify-end">
                        <span
                          className={`px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${edu.color} text-white`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-cyan-400 font-semibold mb-3">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-gray-400 justify-end">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative flex-shrink-0 hidden lg:block">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 z-10 relative">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <GraduationCap className="text-cyan-400" size={28} />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-lg animate-pulse"></div>
                </div>

                <div className="flex-1 lg:pl-12">
                  {index % 2 !== 0 && (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${edu.color} text-white`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-cyan-400 font-semibold mb-3">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:hidden w-full">
                  {index % 2 === 0 && (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 hover:border-cyan-500 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <GraduationCap className="text-cyan-400" size={24} />
                        <span
                          className={`px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${edu.color} text-white`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-cyan-400 font-semibold mb-3">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
