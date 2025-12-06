import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const roles = ['MCA Student'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let currentText = '';
    let charIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(() => {
      if (!isDeleting && charIndex <= currentRole.length) {
        currentText = currentRole.substring(0, charIndex);
        setText(currentText);
        charIndex++;

        if (charIndex > currentRole.length) {
          isDeleting = true;
          setTimeout(() => {}, 2000);
        }
      } else if (isDeleting && charIndex >= 0) {
        currentText = currentRole.substring(0, charIndex);
        setText(currentText);
        charIndex--;

        if (charIndex === 0) {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          isDeleting = false;
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, [roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">

          {/* PROFILE IMAGE — CLEAN VERSION */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-900">
              <img
                src="https://raw.githubusercontent.com/surya0713/Surya_Resume/main/1000318824.webp"
                alt="Surya S"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* NAME */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Surya S
            </span>
          </h1>

          {/* ROLE TYPING EFFECT */}
          <div className="h-16 mb-6">
            <p className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 font-mono">
              {text}
              <span className="animate-blink">|</span>
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Quick learner passionate about innovation, real-world problem solving, and building
            impactful digital solutions. Skilled in leadership, team management, and developing
            secure, user-focused applications.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition-all"
            >
              Hire Me
            </a>

            <a
              href="https://raw.githubusercontent.com/surya0713/Surya_Resume/main/SuryaS_Resume.pdf"
              download="SuryaS_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-gray-800 border-2 border-cyan-500 rounded-full text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-white hover:scale-105 transition-all flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>

            <a
              href="#projects"
              className="group px-8 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-full text-gray-300 font-semibold hover:text-cyan-400 hover:border-cyan-500 hover:scale-105 transition-all"
            >
              View Projects
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-6">
            <a
              href="mailto:suryass1320@gmail.com"
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
            >
              <Mail size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/surya-s-19b366275/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com/surya0713"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </div>
    </section>
  );
}
