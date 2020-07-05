import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { Formik } from 'formik';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import styles from './addjobform.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { formValidationSchema as AddJobSchema, formFields } from '../../utils/job_form_snippets';

const user = {
  email: 'mock@email.com',
  username: 'username',
  id: 1
};

const AddJobForm = () => {
  const [loading, setLoading] = useState(false);
  const [resMessage, setresMessage] = useState(null);

  const handleSubmit = values => {
    setLoading(true);

    let data = {
      user_id: user.id,
      ...values
    };

    console.log(data);

    let handleRes = res => {
      setLoading(false);
      console.log(res);
      setresMessage('Successfully Submitted Job');
    };

    let handleErr = err => {
      console.log(err);
      setLoading(false);
      setresMessage('Request Failed Please Try Again');
    };

    axios
      .post(`${process.env.GATSBY_SERVER_URL}/api/users/addJob`, data)
      .then(res => handleRes(res))
      .catch(err => handleErr(err));
  };

  // generate default values for Formik
  let formikInitialValues = {};

  formFields.forEach(field => (formikInitialValues[field.name] = field.initialValue));

  return (
    <div>
      {loading && (
        <>
          <div className={styles.loader}></div>
          <div className={styles.loading_background}></div>
        </>
      )}
      <h3>{resMessage}</h3>
      <Formik
        initialValues={formikInitialValues}
        validationSchema={AddJobSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            {formFields.map((field, index) => (
              <React.Fragment key={index}>
                <label className={styles.input_label} htmlFor={field.name}>
                  {field.labelInnerText}
                </label>
                {/* Syntax below means that the switch function is defined, then immediately executed. */}
                {(() => {
                  switch (field.type) {
                    case 'input':
                      return (
                        <input
                          className={styles.form_input}
                          name={field.name}
                          id={field.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values[field.name]}
                        />
                      );

                    case 'date':
                      return (
                        <DatePicker
                          className={styles.form_input + ' ' + styles.form_date_picker}
                          selected={values[field.name]}
                          name={field.name}
                          id={field.name}
                          onChange={date => setFieldValue(field.name, date)}
                        />
                      );

                    case 'select':
                      const options = field.options.map((option, index) => (
                        <option value={option} key={index}>
                          {option}
                        </option>
                      ));

                      return (
                        <select
                          id={field.name}
                          className={styles.form_input}
                          name={field.name}
                          value={values[field.name]}
                          onChange={handleChange}
                        >
                          {options}
                        </select>
                      );

                    case 'textarea':
                      return (
                        <textarea
                          id={field.name}
                          className={styles.form_input + ' ' + styles.form_textarea}
                          name={field.name}
                          value={values[field.name]}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      );

                    default:
                      return <>Error rendering form input.</>;
                  }
                })()}
                {errors[field.name] && touched[field.name] && (
                  <p className={styles.error_text}>{errors[field.name]}</p>
                )}
              </React.Fragment>
            ))}
            <div className={styles.form_buttons}>
              <button type="submit" className={styles.form_button} disabled={isSubmitting}>
                Submit
              </button>
              <div onClick={() => navigate('/app/profile')} className={styles.cancel_button}>
                Cancel
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddJobForm;
