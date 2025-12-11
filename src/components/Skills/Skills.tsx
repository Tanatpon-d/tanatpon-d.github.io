import React from 'react';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      skills: ['Machine Learning', 'Predictive Analytics', 'NLP', 'Computer Vision', 'TensorFlow', 'Scikit-learn']
    },
    {
      category: 'Programming Languages',
      skills: ['Python (Django, Flask)', 'JavaScript (ReactJS, NodeJS)', 'C#', 'C++', 'SQL']
    },
    {
      category: 'Data & ETL',
      skills: ['ETL Pipeline Design', 'Python automation', 'Apache Airflow', 'Data Processing', 'SQL Optimization']
    },
    {
      category: 'Backend & APIs',
      skills: ['RESTful API Development', 'Django', 'Flask', 'Node.js', 'Database Design']
    },
    {
      category: 'Business Intelligence',
      skills: ['Tableau', 'Metabase', 'Data Visualization', 'Dashboard Design', 'SQL Analytics']
    },
    {
      category: 'Tools & Infrastructure',
      skills: ['Docker', 'Git', 'Postman', 'Linux/Ubuntu', 'Windows', 'macOS']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite']
    }
  ];

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Technologies</h2>
        <p className={styles.subtitle}>Technical expertise across various domains</p>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>
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
