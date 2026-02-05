import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'TileSync',
      subtitle: 'Real-Time Collaborative Grid System',
      description: 'Distributed multi-user digital refrigerator tiles for household notes, todos, and bill management. Real-time multi-client app with WebSockets, CRDTs (Automerge) for conflict-free, offline-first state synchronization.',
      tech: ['React', 'TypeScript', 'Redux', 'WebSockets', 'Automerge', 'PostgreSQL', 'Node.js'],
      featured: true
    },
    {
      title: 'Movie Recommendation System',
      subtitle: 'ML-Powered Content Discovery',
      description: 'Machine learning-based recommendation system with content-based filtering across a full stack application.',
      tech: ['Machine Learning', 'Full Stack', 'Content Filtering'],
      featured: false
    },
    {
      title: 'Social Media App',
      subtitle: 'Full-Featured MERN Application',
      description: 'Full-featured social media application with CRUD functionalities built on the MERN stack.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      featured: false
    },
    {
      title: 'ATM Database System',
      subtitle: 'Database Operations Simulator',
      description: 'Database project simulating ATM operations using SQL with system analysis.',
      tech: ['SQL', 'Database Design', 'System Analysis'],
      featured: false
    }
  ];

  const certificates = [
    {
      name: 'Building Modern Projects with React',
      issuer: 'LinkedIn Learning',
      url: 'https://www.linkedin.com/learning/certificates/b64cfd0b296f50adfcb39752924c47ac6fb7631cf3aced575479fd99eda4d6c8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B9K2H9wZ%2FR1aSrUhPjvoHvQ%3D%3D'
    },
    {
      name: 'React.js Essential Training',
      issuer: 'LinkedIn Learning',
      url: 'https://www.linkedin.com/learning/certificates/1b03fd00c554bb1f5b4300f333f475fe3601115a4fa909816c865f067dc5feca?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B9K2H9wZ%2FR1aSrUhPjvoHvQ%3D%3D'
    },
    {
      name: 'The Complete 2023 Web Development Bootcamp',
      issuer: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-386b446b-c8ac-4b79-8d1a-7a835dc060fd/'
    }
  ];

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-10">Projects</p>

        {/* Bento Grid — Featured project spans 2 cols */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card-glow p-7 group ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/30 text-xs mono mt-1">{project.subtitle}</p>
              </div>
              <p className="text-sm text-white/35 mb-5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="mono text-[11px] text-white/35 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="mt-14">
          <p className="section-label mb-6">Certificates</p>
          <div className="space-y-3">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center justify-between p-5 group !rounded-2xl"
              >
                <div className="flex items-baseline gap-3 min-w-0">
                  <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors duration-300 truncate">
                    {cert.name}
                  </span>
                  <span className="mono text-xs text-white/20 shrink-0">{cert.issuer}</span>
                </div>
                <ArrowUpRight size={14} className="text-white/20 group-hover:text-violet-400 transition-colors duration-300 shrink-0 ml-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
