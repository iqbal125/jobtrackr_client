import React from 'react';
import styles from './about.module.css';
import image1 from '../../../static/uploads/coding_.svg';
import { navigate } from 'gatsby';

const AboutSection = () => {
  return (
    <div>
      <div className={styles.feature1}>
        <div className={styles.feature1_text}>
          <h3>Avoid the Headaches and Choas Usually Associated with Job Hunting</h3>
          <p>JobTrackr makes the entire job hunting process easy and streamlined</p>
          <button className={styles.signup_button} onClick={() => navigate('/app/login')}>
            Sign Up Now
          </button>
        </div>
        <img className={styles.feature1_img} src={image1} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
