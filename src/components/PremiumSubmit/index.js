import React from 'react';
import { FcApproval } from 'react-icons/fc';
import styles from './premiumsubmit.module.css';
import { navigate } from 'gatsby';

const PremiumSubmit = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.thank_you_message}>
        Thank you for Your Interest In JobTrackr Premium, It is Currently in Beta. Sign Up for Free
        Tier in the Mean Time and We will Notify You When it Is Available
      </h1>
      <div className={styles.icon}>
        <FcApproval />
      </div>
      <button className={styles.signup_button} onClick={() => navigate('/app/login')}>
        Sign Up Now
      </button>
    </div>
  );
};

export default PremiumSubmit;
