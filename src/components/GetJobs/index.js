import React, { useEffect, useState, Fragment } from 'react';
import { navigate, Link } from 'gatsby';
import axios from 'axios';
import JobList from '../JobList';
import styles from './getjobs.module.css';

const user = {
  email: 'mock@email.com',
  username: 'username',
  id: 1
};

const GetJobs = () => {
  const [jobs, setJobs] = useState(null);

  const fetchJobs = () => {
    let handleRes = res => {
      console.log(res);
      setJobs(res.data);
    };

    let handleErr = err => {
      console.log(err);
    };

    axios
      .get(`${process.env.GATSBY_SERVER_URL}/api/users/getJob/${user.id}`)
      .then(res => handleRes(res))
      .catch(err => handleErr(err));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Fragment>
      <div class="container">
        <div class="row">
          <div class={`twelve columns ${styles.jobContainer}`}>
            <div class={`nine columns ${styles.jobList}`}>
              <div>
                <h5>{`${jobs ? jobs.length : 0} Total Jobs`}</h5>
              </div>
              {jobs
                ? jobs.map(job => {
                    return <JobList job={job} key={jobs.id} />;
                  })
                : null}
              <div class={styles.addJob}>
                <div onClick={() => navigate('/app/addjob')} class={styles.addJobsButton}>
                  Add Job
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GetJobs;
