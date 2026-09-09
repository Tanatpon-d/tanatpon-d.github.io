import React from 'react';
import styles from './Skills.module.css';

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillGroup[] = [
    {
      category: 'Data Engineering & Distributed Systems',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      skills: ['Apache Spark', 'PySpark', 'Apache Airflow', 'ETL/ELT Pipelines', 'Batch Processing', 'Data Lake Architecture', 'Data Quality Testing']
    },
    {
      category: 'Cloud Ecosystem (Google Cloud)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
      skills: ['Google Cloud Platform (GCP)', 'BigQuery', 'Google Cloud Storage (GCS)', 'Cloud Functions', 'Cloud Run', 'IAM & Security']
    },
    {
      category: 'Business Intelligence & Visualization',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      skills: ['Power BI', 'Tableau', 'Metabase', 'Interactive KPI Dashboards', 'Data Mart Modeling', 'DAX & Data Modeling']
    },
    {
      category: 'Databases & Query Optimization',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      skills: ['PostgreSQL', 'MySQL', 'SQL Optimization', 'Star / Snowflake Schema', 'Indexing & Partitioning', 'MongoDB']
    },
    {
      category: 'Languages & Scripting',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      skills: ['Python', 'SQL (Advanced Analytical)', 'TypeScript', 'JavaScript', 'Bash / Shell Scripting', 'C# / C++']
    },
    {
      category: 'Data Science & Feature Preparation',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
        </svg>
      ),
      skills: ['Pandas', 'NumPy', 'Feature Engineering', 'Scikit-learn', 'Data Wrangling', 'Data Ingestion APIs']
    },
    {
      category: 'DevOps & Tooling',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      skills: ['Docker', 'Git & GitHub Actions', 'Postman', 'Linux / Ubuntu', 'CI/CD Pipelines', 'RESTful API Services']
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Technical Stack</div>
          <h2 className={styles.title}>Data Engineering Stack & Tools</h2>
          <p className={styles.subtitle}>
            Specialized toolkit spanning distributed computing, cloud data warehouses, pipeline orchestration, and business intelligence.
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((group, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{group.icon}</span>
                <h3 className={styles.categoryTitle}>{group.category}</h3>
              </div>
              <div className={styles.skillsList}>
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
