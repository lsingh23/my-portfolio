import React from 'react';
import { Code, ExternalLink, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Project } from './types';

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Full Stack Movie Recommendation System',
      description: 'Machine learning-based recommendation system with content-based filtering',
      tech: ['Machine Learning', 'Full Stack Development', 'Content Filtering']
    },
    {
      title: 'Social Media App (MERN Stack)',
      description: 'Full-featured social media application with CRUD functionalities',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js']
    },
    {
      title: 'ATM Database System',
      description: 'Database project simulating ATM operations using SQL',
      tech: ['SQL', 'Database Design', 'System Analysis']
    }
  ];

  const certificates = [
    {
      name: 'Building Modern Projects with React',
      url: 'https://www.linkedin.com/learning/certificates/b64cfd0b296f50adfcb39752924c47ac6fb7631cf3aced575479fd99eda4d6c8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B9K2H9wZ%2FR1aSrUhPjvoHvQ%3D%3D'
    },
    {
      name: 'React.js Essential Training',
      url: 'https://www.linkedin.com/learning/certificates/1b03fd00c554bb1f5b4300f333f475fe3601115a4fa909816c865f067dc5feca?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B9K2H9wZ%2FR1aSrUhPjvoHvQ%3D%3D'
    },
    {
      name: 'The Complete 2023 Web Development Bootcamp',
      url: 'https://www.udemy.com/certificate/UC-386b446b-c8ac-4b79-8d1a-7a835dc060fd/'
    }
  ];

  return (
    <AnimatedSection id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-300 hover-scale group"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="flex items-center mb-4">
                <Code className="text-emerald-400 mr-3 group-hover:scale-110 transition-transform duration-300" size={28} />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 max-w-3xl mx-auto hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Certificates & Additional Training</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certificates.map((certificate, index) => (
                <a 
                  key={index} 
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-700/30 rounded-xl hover:bg-gray-600/30 transition-all duration-300 hover-scale group"
                >
                  <Award className="text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <span className="text-gray-300 text-center group-hover:text-white transition-colors">{certificate.name}</span>
                  <ExternalLink className="text-yellow-400/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;