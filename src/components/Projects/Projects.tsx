import React from 'react';
import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Distributed Data Pipeline with PySpark & GCP',
    category: 'Big Data & Cloud Pipelines',
    description: 'Architected distributed data transformation workflows using PySpark to process large-scale datasets efficiently. Orchestrated with Apache Airflow and optimized for Google Cloud BigQuery analytics.',
    tech: ['PySpark', 'Apache Spark', 'GCP', 'BigQuery', 'Apache Airflow', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop'
  },
  {
    id: 2,
    title: 'Automated Document Ingestion & ETL Pipeline',
    category: 'Automated Ingestion & ETL',
    description: 'End-to-end automated data ingestion pipeline converting unstructured invoice files into structured, validated database records using Python and OCR. Saves 20+ hours of manual data entry monthly.',
    tech: ['Python', 'OCR Engine', 'ETL Automation', 'SQL Optimization', 'Airflow'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&q=80&fit=crop'
  },
  {
    id: 3,
    title: 'Enterprise KPI & Power BI Analytics Platform',
    category: 'Data Modeling & Business Intelligence',
    description: 'Constructed dimensional data marts and automated data transformation feeds delivering real-time executive KPI metrics through interactive Power BI and Tableau dashboards.',
    tech: ['Power BI', 'Tableau', 'SQL Data Marts', 'Python ETL', 'GCP BigQuery'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Featured Solutions</div>
          <h2 className={styles.title}>Data Engineering & Analytics Projects</h2>
          <p className={styles.subtitle}>
            Highlighted engineering solutions demonstrating distributed processing, automated data pipelines, and enterprise visualization.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className={styles.projectBadge}>{project.category}</span>
              </div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>

                <div className={styles.footerActions}>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionLink}
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View Repository</span>
                    </a>
                  ) : (
                    <div className={styles.enterpriseBadge}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span>Enterprise Production Architecture</span>
                    </div>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionLink} ${styles.demoLink}`}
                    >
                      <span>Live Preview</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
