import React from 'react';
import styles from './pricing_section.module.css';
import { navigate } from 'gatsby';

const PricingSection = () => {
  return (
    <div>
      <h2 className={styles.price_title}>Choose the Plan thats Best For You</h2>
      <div className={styles.card_row}>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <h2>Free Tier</h2>
            <p>$0/month</p>
          </div>
          <p>Add, Edit, Delete and Update Jobs</p>
          <hr className={styles.bar} />
          <p>Search Functionality</p>
          <hr className={styles.bar} />
          <p>Filtering and Sorting</p>
          <hr className={styles.bar} />
          <p>Up To 40 Jobs</p>
          <button className={styles.cta_button} onClick={() => navigate('/app/login')}>
            Start Now
          </button>
        </div>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <h2>Premium</h2>
            <p>$19/month</p>
          </div>
          <p>Add, Edit, Delete and Update Jobs</p>
          <hr className={styles.bar} />
          <p>Search Functionality</p>
          <hr className={styles.bar} />
          <p>Filtering and Sorting</p>
          <hr className={styles.bar} />
          <p>Unlimited Jobs</p>
          <hr className={styles.bar} />
          <p>Resume Upload</p>
          <hr className={styles.bar} />
          <p>Shareable Resume Download Link</p>
          <button className={styles.cta_button} onClick={() => navigate('/app/login')}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
