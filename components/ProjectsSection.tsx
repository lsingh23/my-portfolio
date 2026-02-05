import React from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'TileSync',
      subtitle: 'Real-Time Collaborative Grid System',
      description: 'Distributed multi-user digital refrigerator tiles for household notes, todos, and bill management. Real-time multi-client app with WebSockets, CRDTs (Automerge) for conflict-free, offline-first state synchronization.',
      tech: ['React', 'TypeScript', 'Redux', 'WebSockets', 'Automerge', 'PostgreSQL', 'Node.js'],
      featured: true,
    },
    {
      title: 'Movie Recommendation System',
      subtitle: 'ML-Powered Content Discovery',
      description: 'Machine learning-based recommendation system with content-based filtering across a full stack application.',
      tech: ['Machine Learning', 'Full Stack', 'Content Filtering'],
      featured: false,
    },
    {
      title: 'Social Media App',
      subtitle: 'Full-Featured MERN Application',
      description: 'Full-featured social media application with CRUD functionalities built on the MERN stack.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      featured: false,
    },
    {
      title: 'ATM Database System',
      subtitle: 'Database Operations Simulator',
      description: 'Database project simulating ATM operations using SQL with system analysis.',
      tech: ['SQL', 'Database Design', 'System Analysis'],
      featured: false,
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
    <section id="projects" className="py-[140px] px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto">
        <p className="section-label mb-8">Projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card ${project.featured ? 'card-accent-orange md:col-span-2' : 'card-accent'}`}
            >
              <div className="relative z-10">
                {/* Screenshot area */}
                <div className="screenshot-area h-32 flex items-center justify-center m-4 mb-0">
                  <Code2 size={28} className="text-[var(--text-muted)]" />
                </div>

                <div className="p-8 pt-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="headline text-base">
                        {project.title}
                      </h3>
                      <p className="text-[var(--text-muted)] text-xs mt-1">{project.subtitle}</p>
                    </div>
                    {project.featured && (
                      <span className="text-[10px] font-medium text-[var(--accent-orange)] bg-[rgba(255,107,53,0.08)] border border-[rgba(255,107,53,0.15)] rounded px-2 py-0.5 shrink-0 ml-3" style={{ fontFamily: "'Geist Mono', monospace" }}>
                        FEATURED
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates — text rows, not cards */}
        <div className="mt-20 max-w-[720px]">
          <p className="section-label mb-6">Certificates</p>
          <div>
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-row group"
              >
                <div className="flex items-baseline gap-3 min-w-0">
                  <span className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-mint)] transition-colors truncate">
                    {cert.name}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] shrink-0">{cert.issuer}</span>
                </div>
                <ArrowUpRight size={14} className="row-arrow text-[var(--text-muted)] shrink-0 ml-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
