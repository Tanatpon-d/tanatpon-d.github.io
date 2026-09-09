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
    company: 'Greenline Synergy Co. Ltd',
    position: 'Data Engineer',
    period: 'Mar 2026 – Present',
    location: 'Bangkok, Thailand',
    responsibilities: [
      'Architected and maintained distributed ETL/ELT data pipelines using Apache Airflow and Google Cloud Platform (GCP)',
      'Engineered large-scale data transformation workflows with Apache Spark & PySpark for high-volume healthcare data',
      'Designed and optimized analytical data marts delivering real-time KPI reporting in Power BI',
      'Tuned SQL queries and BigQuery schemas to maximize performance and ensure data reliability'
    ]
  },
  {
    id: 2,
    company: 'Principle Healthcare Co. Ltd',
    position: 'Business Intelligence Developer',
    period: 'Jul 2024 – Sep 2025',
    location: 'Bangkok, Thailand',
    responsibilities: [
      'Developed dynamic reporting systems and executive healthcare KPI dashboards using Tableau',
      'Automated ETL pipelines with Python for accurate and timely hospital data ingestion',
      'Optimized complex SQL queries and database models to improve reporting latency'
    ]
  },
  {
    id: 3,
    company: 'Greenline Synergy Co. Ltd',
    position: 'Fullstack Developer',
    period: 'Oct 2023 – Jul 2024',
    location: 'Bangkok, Thailand',
    responsibilities: [
      'Built high-performance RESTful APIs and modern React front-end features for CRM and insurance platforms',
      'Engineered relational database schemas and data integration points across enterprise healthcare systems',
      'Implemented secure data exchange services and client-server validation protocols'
    ]
  },
  {
    id: 4,
    company: 'Conicle Co. Ltd',
    position: 'Back-End Developer',
    period: 'Jan 2023 – Oct 2023',
    location: 'Bangkok, Thailand',
    responsibilities: [
      'Designed, documented, and maintained scalable RESTful services using Django',
      'Tuned relational database schemas and complex queries to ensure low-latency data access'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Career History</div>
          <h2 className={styles.title}>Professional Journey</h2>
          <p className={styles.subtitle}>
            Demonstrated track record in healthcare data engineering, cloud platforms (GCP), and enterprise business intelligence.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.roleInfo}>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <div className={styles.metadata}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.location}>{exp.location}</span>
                  </div>
                </div>

                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className={styles.responsibility}>
                      <span className={styles.bullet}>›</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
