import React from 'react';
import styles from './about.module.css';
import image1 from '../../../static/uploads/undraw_survey_05s5.svg';
import image2 from '../../../static/uploads/undraw_stepping_up_g6oo.svg';
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
      <div className={styles.feature2}>
        <img className={styles.feature2_img} src={image2} alt="" />
        <div className={styles.feature2_text}>
          <h2>Get Additional Features with Jobtrackr Premium</h2>
          <p>
            Save Unlimited Jobs, upload and manage different Resumes and have a Resume download link
            you can send to recruiters.
          </p>
          <button className={styles.signup_button} onClick={() => navigate('/premiumsubmit')}>
            Get Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
