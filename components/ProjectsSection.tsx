import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'TileSync - Real-Time Collaborative Grid System',
      description: 'Distributed multi-user digital refrigerator tiles for household notes, todos, and bill management. Architected a real-time multi-client application with WebSockets, event-driven architecture, and CRDTs (Automerge) for conflict-free, offline-first state synchronization. Developed drag-and-drop tile interface with animated snapping, presence indicators, and optimistic UI updates. Built backend APIs and persistence using Node.js + Express and PostgreSQL for durable storage, automated bill splitting, and multi-tier synchronization.',
      tech: ['React', 'TypeScript', 'Redux', 'WebSockets', 'Automerge', 'Service Workers', 'PostgreSQL', 'Node.js']
    },
    {
      title: 'Movie Recommendation System',
      description: 'Machine learning-based recommendation system with content-based filtering across a full stack application.',
      tech: ['Machine Learning', 'Full Stack', 'Content Filtering']
    },
    {
      title: 'Social Media App',
      description: 'Full-featured social media application with CRUD functionalities built on the MERN stack.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js']
    },
    {
      title: 'ATM Database System',
      description: 'Database project simulating ATM operations using SQL with system analysis.',
      tech: ['SQL', 'Database Design', 'System Analysis']
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
    <section id="projects" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="mono text-indigo-400 text-sm mb-12">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-5 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors duration-200 group"
            >
              <h3 className="font-semibold text-zinc-50 mb-2 group-hover:text-indigo-400 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech, i) => (
                  <span key={i} className="mono text-[11px] text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mono text-zinc-600 text-xs uppercase tracking-wider mb-6">Certificates</h3>
          <div className="space-y-3">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-zinc-800/50 rounded-lg hover:border-zinc-700 transition-colors duration-200 group"
              >
                <div className="flex items-baseline gap-3 min-w-0">
                  <span className="text-sm text-zinc-300 group-hover:text-zinc-50 transition-colors duration-200 truncate">
                    {cert.name}
                  </span>
                  <span className="mono text-xs text-zinc-600 shrink-0">{cert.issuer}</span>
                </div>
                <ArrowUpRight size={14} className="text-zinc-700 group-hover:text-indigo-400 transition-colors duration-200 shrink-0 ml-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
