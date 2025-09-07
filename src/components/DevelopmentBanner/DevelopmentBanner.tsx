import React from 'react';
import styles from './DevelopmentBanner.module.css';

const DevelopmentBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <span className={styles.icon}>🚧</span>
        <span className={styles.text}>อยู่ในระหว่างการพัฒนา | Under Development</span>
        <span className={styles.icon}>🚧</span>
      </div>
    </div>
  );
};

export default DevelopmentBanner;