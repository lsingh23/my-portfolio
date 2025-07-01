import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Let's Build Something Amazing
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Ready to turn your ideas into reality? I'm always excited about new challenges and opportunities. 
          Whether it's a groundbreaking AI project or a sleek web application, let's create something extraordinary together.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-300 hover-scale group">
            <Mail className="text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
            <h3 className="text-xl font-semibold mb-2">Drop me an Email</h3>
            <p className="text-gray-400 mb-4">Let's discuss your next project</p>
            <a href="mailto:lakhveersingh10599@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
              lakhveersingh10599@gmail.com
            </a>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover-scale group">
            <Phone className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
            <h3 className="text-xl font-semibold mb-2">Give me a Call</h3>
            <p className="text-gray-400 mb-4">Available for consultations</p>
            <a href="tel:+1-705-929-4097" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              +1 (705) 929-497
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/lsingh23" 
            className="bg-gray-800/50 hover:bg-gray-700/50 p-4 rounded-xl transition-all duration-300 hover-scale border border-gray-700/50 hover:border-gray-500/50"
          >
            <Github size={24} className="text-gray-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/lakhveer-singh-550669200/" 
            className="bg-gray-800/50 hover:bg-blue-600/20 p-4 rounded-xl transition-all duration-300 hover-scale border border-gray-700/50 hover:border-blue-500/50"
          >
            <Linkedin size={24} className="text-blue-400" />
          </a>
          <a 
            href="mailto:lakhveersingh10599@gmail.com" 
            className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 p-4 rounded-xl transition-all duration-300 hover-scale glow-on-hover"
          >
            <Mail size={24} className="text-white" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;