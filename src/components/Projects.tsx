import { Globe, BookOpen, Lock, Calendar, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'College Website Development & Maintenance',
      period: 'Mar 2023 – May 2024',
      description:
        'Developed & maintained the official college website with optimized performance, enhanced security, and continuous updates. Led a team through the entire development lifecycle.',
      icon: <Globe className="w-8 h-8" />,
      skills: ['HTML', 'CSS', 'Cloud Applications', 'Team Leadership'],
      gradient: 'from-cyan-500 to-blue-600',
      link: 'https://gasckk.org.in/', // <-- ADD YOUR LINK HERE
    },
    {
      title: 'Koha Library Management System Implementation',
      period: 'Dec 2023 – May 2024',
      description:
        'Installed & customized Koha LMS for the college. Configured cataloging, circulation, and user management. Improved library workflow with automation.',
      icon: <BookOpen className="w-8 h-8" />,
      skills: ['Linux', 'Koha', 'Ubuntu', 'Open-Source', 'Teamwork'],
      gradient: 'from-blue-500 to-purple-600',
      link: 'https://example.com/koha-lms', // <-- ADD YOUR LINK HERE
    },
    {
      title: 'Secure Note App using AES-256',
      period: 'Recent Project',
      description:
        'Created a secure note-taking app with AES-256 encryption. Implemented PBKDF2 key derivation. Focused on privacy & cryptographic integrity.',
      icon: <Lock className="w-8 h-8" />,
      skills: ['Cryptography', 'Flutter', 'AES-256', 'PBKDF2', 'SQLite'],
      gradient: 'from-purple-500 to-pink-600',
      link: 'https://github.com/surya0713/secure_notes', // <-- ADD YOUR LINK HERE
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {project.icon}
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{project.period}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-900/50 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Redirect Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 font-semibold hover:gap-4 transition-all duration-300"
                >
                  View Details
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
