import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Engineering Focus</div>
          <h2 className={styles.title}>About & Data Architecture</h2>
          <p className={styles.subtitle}>
            Architecting reliable cloud pipelines, distributed data processing, and analytical warehouses that transform raw data into decisions.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* Main Intro Card */}
          <div className={`${styles.card} ${styles.introCard}`}>
            <h3 className={styles.introTitle}>Data Engineering Philosophy</h3>
            <p className={styles.introText}>
              I am a <strong>Data Engineer</strong> with strong roots in Fullstack Engineering and Business Intelligence.
              I specialize in building fault-tolerant, scalable data pipelines using <strong>Apache Airflow</strong>, distributed processing with <strong>Apache Spark & PySpark</strong>,
              and cloud-native architectures on <strong>Google Cloud Platform (GCP)</strong>.
              I emphasize data reliability, schema integrity, and high-performance SQL query optimization to ensure business stakeholders can depend on seamless <strong>Power BI</strong> and <strong>Tableau</strong> analytics.
            </p>
          </div>

          {/* 4 Pillars */}
          <div className={`${styles.card} ${styles.pillarCard}`}>
            <div className={styles.iconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h4 className={styles.pillarTitle}>Distributed Processing (Spark & PySpark)</h4>
            <p className={styles.pillarDesc}>
              Designing distributed transformation workflows, partitioned transformations, and efficient in-memory data processing for high-volume enterprise datasets.
            </p>
          </div>

          <div className={`${styles.card} ${styles.pillarCard}`}>
            <div className={styles.iconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h4 className={styles.pillarTitle}>Orchestration & ETL (Apache Airflow)</h4>
            <p className={styles.pillarDesc}>
              Building scheduled, idempotent DAGs with automated error alerts, retry mechanisms, and data quality validations for dependable batch workloads.
            </p>
          </div>

          <div className={`${styles.card} ${styles.pillarCard}`}>
            <div className={styles.iconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
            </div>
            <h4 className={styles.pillarTitle}>Cloud Ecosystem (Google Cloud Platform)</h4>
            <p className={styles.pillarDesc}>
              Leveraging GCP services (BigQuery, Cloud Storage, Cloud Functions) to create cost-effective, scalable data lakes and analytical warehouses.
            </p>
          </div>

          <div className={`${styles.card} ${styles.pillarCard}`}>
            <div className={styles.iconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <h4 className={styles.pillarTitle}>Data Modeling & BI (Power BI & Tableau)</h4>
            <p className={styles.pillarDesc}>
              Designing star/snowflake schemas, tuning SQL query execution plans, and structuring optimized data marts ready for executive Power BI & Tableau dashboards.
            </p>
          </div>

          {/* 3 Stat / Impact Cards */}
          <div className={`${styles.card} ${styles.statCard}`}>
            <div className={styles.statValue}>GCP & Spark</div>
            <div className={styles.statLabel}>Modern Data Stack</div>
            <div className={styles.statDesc}>Distributed processing with PySpark, scheduled with Airflow, and hosted on Google Cloud</div>
          </div>

          <div className={`${styles.card} ${styles.statCard}`}>
            <div className={styles.statValue}>Power BI</div>
            <div className={styles.statLabel}>Enterprise Visualization</div>
            <div className={styles.statDesc}>Seamless data mart modeling and interactive KPI reporting for organizational decision makers</div>
          </div>

          <div className={`${styles.card} ${styles.statCard}`}>
            <div className={styles.statValue}>Healthcare</div>
            <div className={styles.statLabel}>Domain Expertise</div>
            <div className={styles.statDesc}>Handling mission-critical clinical datasets, hospital KPIs, and high-security data pipelines</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
