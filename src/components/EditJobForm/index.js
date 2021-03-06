import React, { useContext, useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import AuthContext from '../../utils/auth_context';
import { Formik } from 'formik';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import { formValidationSchema as EditJobSchema, formFields } from '../../utils/job_form_snippets';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './editjobform.module.css';

const EditJobForm = props => {
  const { location } = props;
  const { state } = location;
  const { rowData } = state;
  const job = rowData;
  const { id } = job;
  const [loading, setLoading] = useState(false);
  const { authState } = useContext(AuthContext);
  const { user } = authState;

  const handleSubmit = values => {
    setLoading(true);
    window.scroll(0, 0);

    let data = {
      user_id: user.id.user,
      ...values
    };

    let handleRes = () => {
      setTimeout(() => setLoading(false), 500);
      setTimeout(() => navigate('/app/profile'), 510);
    };

    axios
      .put(`${process.env.GATSBY_SERVER_URL}/api/users/updateJob/${id}`, data)
      .then(handleRes)
      .catch(err => console.log(err));
  };

  const initialValues = {
    ...job,
    date_applied: new Date(Date.parse(job.date_applied)),
    last_followup_response: job.last_followup_response
      ? new Date(Date.parse(job.last_followup_response))
      : null,
    last_followup: job.last_followup ? new Date(Date.parse(job.last_followup)) : null,
    last_status_change: job.last_status_change ? new Date(Date.parse(job.last_status_change)) : null
  };

  return (
    <div>
      {loading && (
        <>
          <div className={styles.loader}></div>
          <div className={styles.loading_background}></div>
        </>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={EditJobSchema}
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
                          name={field.name}
                          className={styles.form_input + ' ' + styles.form_textarea}
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
                  <span className={styles.error_text}>{errors[field.name]}</span>
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

export default EditJobForm;
