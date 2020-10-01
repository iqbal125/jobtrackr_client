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
          <div className={styles.right_footer}></div>
        </div>
        <div className={styles.footer_bottom}>
          <div> Copyright &copy; 2020 Example Inc</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
