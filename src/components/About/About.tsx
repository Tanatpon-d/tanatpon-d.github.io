import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.subtitle}>AI Automation Engineer</p>

        <div className={styles.content}>
          <div className={styles.introCard}>
            <p className={styles.intro}>
              I am an <strong>AI Automation Engineer</strong> with a passion for building intelligent systems
              that transform how businesses operate. My expertise lies in creating automated solutions
              that leverage artificial intelligence and machine learning to drive efficiency and innovation.
            </p>
          </div>

          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className={styles.expertiseTitle}>Intelligent Automation</h3>
              <p className={styles.expertiseDescription}>
                Designing and implementing automated workflows that combine AI/ML capabilities
                with business processes to optimize operations and reduce manual effort.
              </p>
            </div>

            <div className={styles.expertiseCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className={styles.expertiseTitle}>System Optimization</h3>
              <p className={styles.expertiseDescription}>
                Analyzing and optimizing complex systems through data engineering,
                SQL optimization, and ETL pipeline design to ensure peak performance.
              </p>
            </div>

            <div className={styles.expertiseCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className={styles.expertiseTitle}>Data Engineering</h3>
              <p className={styles.expertiseDescription}>
                Building robust data pipelines and analytics solutions for healthcare and
                education sectors, turning raw data into actionable business insights.
              </p>
            </div>

            <div className={styles.expertiseCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
                </svg>
              </div>
              <h3 className={styles.expertiseTitle}>AI/ML Solutions</h3>
              <p className={styles.expertiseDescription}>
                Developing machine learning models for predictive analytics, natural language
                processing, and computer vision applications using modern frameworks.
              </p>
            </div>
          </div>

          <div className={styles.specialtiesCard}>
            <h3 className={styles.specialtiesTitle}>Core Specialties</h3>
            <div className={styles.specialtiesList}>
              <div className={styles.specialtyItem}>
                <span className={styles.specialtyIcon}>⚡</span>
                <span>AI/ML Model Development & Deployment</span>
              </div>
              <div className={styles.specialtyItem}>
                <span className={styles.specialtyIcon}>⚡</span>
                <span>ETL Pipeline Design & Automation</span>
              </div>
              <div className={styles.specialtyItem}>
                <span className={styles.specialtyIcon}>⚡</span>
                <span>RESTful API Development</span>
              </div>
              <div className={styles.specialtyItem}>
                <span className={styles.specialtyIcon}>⚡</span>
                <span>Business Intelligence & Dashboard Design</span>
              </div>
              <div className={styles.specialtyItem}>
                <span className={styles.specialtyIcon}>⚡</span>
                <span>Robotic Process Automation (RPA)</span>
              </div>
              <div className={styles.specialtyItem}>
                <span className={styles.specialtyIcon}>⚡</span>
                <span>Data Analytics & Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
