import { Code2, Database, Cloud, Shield, Users, Lightbulb } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Technical Skills',
      icon: <Code2 className="w-8 h-8" />,
      skills: [
        { name: 'Web Development', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'Cloud Computing (AWS)', level: 75 },
        { name: 'DevOps Basics', level: 70 },
        { name: 'Cryptography (AES-256)', level: 85 },
        { name: 'Flutter & SQLite', level: 75 },
        { name: 'Ubuntu / Linux', level: 80 },
      ],
    },
    {
      category: 'Soft Skills',
      icon: <Users className="w-8 h-8" />,
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Leadership', level: 90 },
        { name: 'Communication', level: 88 },
        { name: 'Innovation', level: 92 },
        { name: 'Time Management', level: 85 },
      ],
    },
  ];

  const techStack = [
    { name: 'HTML/CSS', color: 'from-orange-500 to-red-500' },
    { name: 'Python', color: 'from-blue-500 to-yellow-500' },
    { name: 'SQL', color: 'from-cyan-500 to-blue-600' },
    { name: 'AWS', color: 'from-yellow-500 to-orange-600' },
    { name: 'Flutter', color: 'from-blue-400 to-cyan-500' },
    { name: 'Linux', color: 'from-gray-400 to-gray-600' },
    { name: 'Cryptography', color: 'from-purple-500 to-pink-500' },
    { name: 'Cloud Security', color: 'from-green-500 to-emerald-600' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-cyan-400">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animation: 'slideIn 1s ease-out',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-full bg-gradient-to-r ${tech.color} bg-opacity-10 border border-cyan-500/30 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-110 cursor-pointer`}
              >
                <span className="text-white font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
