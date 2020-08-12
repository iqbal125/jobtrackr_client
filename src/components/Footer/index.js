import React from 'react';
import styles from './footer.module.css';
import { Link } from 'gatsby';
import image7 from '../../../static/uploads/wave3.svg';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_wrapper}>
        <img className={styles.footer_wave} src={image7} alt="" />
        <div className={styles.footer_main}>
          <div className={styles.left_footer}>
            <small className={styles.footer_link}>1000 Example Rd, San Francisco, CA 94066 </small>
            <small className={styles.footer_link}>1-111-1111 </small>
            <small className={styles.footer_link}>Example@example.com</small>
            <div className={styles.legal_section}>
              <small className={styles.footer_legal}>Terms of Condition </small>
              <small className={styles.footer_legal}>Privacy Policy</small>
            </div>
          </div>
          <div className={styles.right_footer}>
            <Link to="/contact">
              <div className={styles.footer_link}>Contact</div>
            </Link>
            <Link to="/pricing">
              <div className={styles.footer_link}>Pricing</div>
            </Link>
            <Link to="/about">
              <div className={styles.footer_link}>About</div>
            </Link>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div> Copyright &copy; 2020 Example Inc</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
