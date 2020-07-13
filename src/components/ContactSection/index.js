import React from 'react';
import ContactForm from '../Form';
import styles from './contactsection.module.css';

const ContactSection = () => {
  return (
    <div className={styles.page_column}>
      <h2 className={styles.cta}>Get in Touch with Any Questions or Concerns</h2>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
