import React, { useState, useContext } from 'react';
import { navigate } from 'gatsby';
import { Formik } from 'formik';
import styles from './contactform.module.css';
import * as Yup from 'yup';

const ValidSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  subject: Yup.string()
    .min(3, 'Subject must be at least 3 Characters')
    .max(50, 'Subject Too Long')
    .required('Subject Required')
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    console.log('ffff');
    setLoading(true);
    setTimeout(() => navigate('/formsubmit'), 800);
  };

  return (
    <div>
      {loading && (
        <>
          <div className={styles.loader}></div>
          <div className={styles.loading_background}></div>
        </>
      )}
      <div className={styles.form_wrap}>
        <Formik
          validationSchema={ValidSchema}
          initialValues={{ email: '', subject: '', description: '' }}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form name="form1" className={styles.form} onSubmit={handleSubmit} data-netlify="true">
              <input type="hidden" name="form1" value="form1" />
              <label className={styles.input_label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.form_input}
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <span className={styles.error_text}>{errors.email}</span>
              )}
              <label className={styles.input_label} htmlFor="subject">
                Subject
              </label>
              <input
                className={styles.form_input}
                name="subject"
                id="subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
              />
              {errors.subject && touched.subject && (
                <span className={styles.error_text}>{errors.subject}</span>
              )}
              <label className={styles.input_label} htmlFor="description">
                Description
              </label>
              <textarea
                className={styles.form_textarea}
                name="description"
                id="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <button type="submit" className={styles.form_button}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
