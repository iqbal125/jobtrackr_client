import React from 'react';
import styles from './about.module.css';
import image1 from '../../../static/uploads/coding_.svg';

const AboutSection = () => {
  return (
    <div className={styles.top_row}>
      <img className={styles.hero_illustration} src={image1} alt="" />
      <div className={styles.about_text}>
        <h3>Avoid and Headaches and Choas Usually Associated with Job Hunting</h3>
        <p>JobTrackr makes the entire job hunting process easy and streamlined</p>
      </div>
    </div>
  );
};

export default AboutSection;
