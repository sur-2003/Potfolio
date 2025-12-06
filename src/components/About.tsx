import { Code, Shield, Cloud, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Web Development',
      description: 'Building modern, responsive web applications',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Cybersecurity',
      description: 'Securing systems with encryption & best practices',
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Technologies',
      description: 'AWS, DevOps, and cloud-native solutions',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Real-world problem solving with emerging tech',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm an <span className="text-cyan-400 font-semibold">MCA student</span> with strong
              expertise in web development, cybersecurity fundamentals, cloud technologies, and
              backend programming. I've contributed significantly to my college's digital systems,
              leading multiple technical projects including the official college website and Koha
              Library Management System.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy solving real-world technical problems, learning emerging technologies, and
              collaborating in both leadership and team environments. I'm actively building projects
              in secure app development, cryptography, cloud computing, and automation.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
              <span className="text-cyan-400 font-mono text-sm">Tirunelveli, Tamil Nadu, India</span>
              <div className="flex-1 h-px bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
              >
                <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
