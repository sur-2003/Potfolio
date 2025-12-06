import { Mail, Linkedin, Github, MapPin, Send, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities in web development,
            cybersecurity, or cloud computing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* CONTACT INFORMATION */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="mailto:suryass1320@gmail.com"
                  className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                      suryass1320@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/surya-s-19b366275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                      www.linkedin.com/in/surya-s-19b366275
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/surya0713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gray-500/50 transition-all">
                    <Github size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                      github.com/surya0713
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">Tirunelveli, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              {/* UPDATED DOWNLOAD RESUME BUTTON */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <a
                  href="https://raw.githubusercontent.com/surya0713/Surya_Resume/main/SuryaS_Resume.pdf"
                  download="SuryaS_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            Built with passion by{' '}
            <span className="text-cyan-400 font-semibold">Surya S</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">2025 - All rights reserved</p>
        </footer>
      </div>
    </section>
  );
}
