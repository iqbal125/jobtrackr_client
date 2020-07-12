import React from 'react';
import { navigate } from 'gatsby';
import SocialBar from '../SocialBar';

//illustrations
import image1 from '../../../static/uploads/coding_.svg';
import image3 from '../../../static/uploads/undraw_design_notes_8dmv.svg';
import image5 from '../../../static/uploads/code_development_.svg';

import { FcLock } from 'react-icons/fc';
import { FcMultipleDevices } from 'react-icons/fc';
import { FcFlashAuto } from 'react-icons/fc';

import styles from './home.module.css';

const Home = () => {
  const toLoginPage = () => {
    navigate('/app/login');
  };

  const toAboutPage = () => {
    navigate('/about');
  };

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.landing_hero}>
          <div className={styles.value_prop_col}>
            <h1 className={styles.value_prop}>
              Organize and Keep track of all your Job Applications in One Place
            </h1>
            <button className={styles.value_prop_button} onClick={toLoginPage}>
              Try For Free Now &#8594;
            </button>
          </div>
          <img className={styles.hero_illustration} src={image3} alt="" />
        </div>
        <div className={styles.feature1}>
          <div className={styles.feature1_text}>
            <h2>All Your Job Information Organized All in One Place</h2>
            <p>
              Keep Track of Last Follow Up Date, Status of Job and Many other Metrics with an Easy
              to Use Interface.
            </p>
            <button className={styles.find_out_more_button} onClick={toAboutPage}>
              Find Out More
            </button>
          </div>
          <img className={styles.feature1_img} src={image1} alt="" />
        </div>
        <hr className={styles.bar_card_row1} />
        <div className={styles.card_row}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FcMultipleDevices />
            </div>
            <p>Easy To Use on Mobile and Desktop</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FcFlashAuto />
            </div>
            <p> Built with Cutting Edge Technologies</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FcLock />
            </div>
            <p>100% Safe and Secure</p>
          </div>
        </div>
        <hr className={styles.bar_card_row2} />
        <div className={styles.feature2}>
          <img className={styles.feature2_img} src={image5} alt="" />
          <div className={styles.feature2_text}>
            <h2>Powerful Search and Filter Features</h2>
            <p>
              Filter and Search Jobs by any Metric Available, Dont Waste Your Time and Remove Job
              Applications When They Become Stale.
            </p>
          </div>
        </div>
        <hr className={styles.bar1} />
        <div className={styles.testimonial_bar}>
          <h3>Join 15,000+ Other Job Seekers</h3>
          <p>15,000+ Job seekers trust JobTrackr to handle and organize their job search process</p>
        </div>
        <hr className={styles.bar2} />
        <div className={styles.bottom_cta_section}>
          <div className={styles.bottom_cta_text}>
            <h3>Free to Use, No Credit Card Required</h3>
            <button className={styles.get_started_button} onClick={toLoginPage}>
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
