import React, { Fragment } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';

import styles from './joblist.module.css';

const user = {
  email: 'mock@email.com',
  username: 'username',
  id: 1
};

const JobList = ({ job }) => {
  const editJob = () => {};

  const deleteJob = () => {
    let handleRes = res => {
      console.log(res);
    };

    let handleErr = err => {
      console.log(err);
    };

    let data = {
      user_id: user.id
    };

    axios
      .delete(`${process.env.GATSBY_SERVER_URL}/api/users/deleteJob/${job.id}`, { data })
      .then(res => handleRes(res))
      .catch(err => handleErr(err));
  };

  return (
    <Fragment>
      <div class={job}>
        <div class={styles.jobHeader}>
          <h4>
            <Link to={{ pathname: `/job/${job.id}`, state: { job: job } }}>{job.position}</Link>
          </h4>
          <div class={styles.jobButton}>
            <Link
              class={styles.jobButton}
              to={{ pathname: `/editjob/${job.id}`, state: { job: job } }}
            >
              <i class="fas fa-pen-square"></i>
            </Link>
            <button class={styles.jobButton} onClick={deleteJob}>
              <i class="fas fa-times-circle"></i>
            </button>
          </div>
        </div>
        <div class={styles.info}>
          <p>
            <span>Company:</span> {job.company}
          </p>
          <p>
            <span>Location:</span> {job.location}
          </p>
          <p>
            <span>Status:</span> {job.status}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default JobList;
