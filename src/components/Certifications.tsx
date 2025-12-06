import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    'AWS CLI Basics',
    'AWS DevOps Testing Practices',
    'Cloud Security Essentials',
    'DevOps (Professional Certificate)',
    'SQL using AI Workshop',
    'Introduction to Networking – NVIDIA',
    'AI for Beginners – HP Life',
    'PwC Power BI Job Simulation',
    'Accenture Data Analytics & Visualization Simulation',
    'Cognizant AI Job Simulation',
    'Python – GUVI',
    'Google Digital Marketing Basics',
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="text-cyan-400" size={32} />
            <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-cyan-500 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <CheckCircle
                  className="text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                  size={20}
                />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {cert}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-full">
              <span className="text-cyan-400 font-semibold">{certifications.length}+</span>
              <span className="text-gray-300">Professional Certifications Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
