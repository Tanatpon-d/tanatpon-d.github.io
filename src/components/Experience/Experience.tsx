import React from 'react';
import styles from './Experience.module.css';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Principle Healthcare Co. Ltd',
    position: 'Business Intelligence Developer',
    period: 'Jul 2024 – Present',
    location: 'Bangkok, Thailand',
    responsibilities: [
      'Developed dynamic reporting systems using Tableau',
      'Automated ETL pipelines with Python for accurate and timely data reporting',
      'Optimized SQL queries to improve system performance'
    ]
  },
  {
    id: 2,
    company: 'Greenline Synergy Co. Ltd',
    position: 'Fullstack Developer',
    period: 'Oct 2023 – Jul 2024',
    location: 'Bangkok, Thailand',
    responsibilities: [
      'Built RESTful APIs and developed React-based front-end features',
      'Developed CRM and insurance management systems'
    ]
  },
  {
    id: 3,
    company: 'Conicle Co. Ltd',
    position: 'Back-End Developer',
    period: 'Jan 2023 – Oct 2023',
    location: 'Bangkok, Thailand',
    responsibilities: [
      'Designed and maintained RESTful APIs using Django',
      'Optimized SQL queries for data operations'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>Work Experience</h2>
        <p className={styles.subtitle}>Professional journey and achievements</p>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.companyInfo}>
                  <h3 className={styles.position}>{exp.position}</h3>
                  <h4 className={styles.company}>{exp.company}</h4>
                </div>
                <div className={styles.metadata}>
                  <span className={styles.period}>{exp.period}</span>
                  <span className={styles.location}>{exp.location}</span>
                </div>
              </div>
              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className={styles.responsibility}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
