import React from 'react';
import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Weather Scraping',
    description: 'Python application for scraping and analyzing weather data from various sources',
    tech: ['Python', 'Web Scraping', 'Data Analysis', 'BeautifulSoup'],
    github: 'https://github.com/Tanatpon-d/weather-scraping',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop'
  },
  {
    id: 2,
    title: 'GetCircle Image',
    description: 'Python tool for image processing and circular image extraction',
    tech: ['Python', 'OpenCV', 'Image Processing', 'Computer Vision'],
    github: 'https://github.com/Tanatpon-d/Getcircle_Img',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop'
  },
  {
    id: 3,
    title: 'Basic Docker for Students',
    description: 'Educational repository teaching Docker fundamentals with Python examples',
    tech: ['Docker', 'Python', 'DevOps', 'Containerization'],
    github: 'https://github.com/Tanatpon-d/basicdockerforstudent',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React and TypeScript',
    tech: ['React', 'TypeScript', 'GitHub Pages', 'CSS Modules'],
    github: 'https://github.com/Tanatpon-d/tanatpon-d.github.io',
    demo: 'https://tanatpon-d.github.io',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop'
  },
  {
    id: 5,
    title: 'GitHub Profile',
    description: 'My GitHub profile repository with README and configurations',
    tech: ['Markdown', 'GitHub Actions', 'Profile Customization'],
    github: 'https://github.com/Tanatpon-d/Tanatpon-d',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop'
  },
  {
    id: 6,
    title: 'AI & Automation Projects',
    description: 'Collection of AI and automation experiments and tools',
    tech: ['Python', 'AI/ML', 'Automation', 'Data Science'],
    github: 'https://github.com/Tanatpon-d',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop'
  }
];

const Projects: React.FC = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>Some of my recent work</p>
        
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
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