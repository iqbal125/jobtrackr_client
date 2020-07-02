import React from "react";

import styles from "./jobdetail.module.css";

const JobDetail = ({ job }) => {
  return (
    <div className="seven columns">
      <div className={styles.detail}>
        <h5>Current Status:</h5>
        <p>{job.status}</p>
      </div>
      <div className={styles.detail}>
        <h5>Position:</h5>
        <p>{job.position}</p>
      </div>
      <div className={styles.detail}>
        <h5>Company:</h5>
        <p>{job.company}</p>
      </div>
      <div className={styles.detail}>
        <h5>Location:</h5>
        <p>{job.location}</p>
      </div>
      <div className={styles.detail}>
        <h5>Date Applied:</h5>
        <p>job.date_applied</p>
      </div>
      <div className={styles.detail}>
        <h5>Point Of Contact:</h5>
        <p>{job.point_of_contact}</p>
      </div>
      <div className={styles.detail}>
        <h5>Point Of Contact's Contact Information:</h5>
        <p>
          {job.poc_email} {` | ${job.poc_phone}`}
        </p>
      </div>
      <div className={styles.detail}>
        <h5>Notes:</h5>
        <p>{job.notes}</p>
      </div>
    </div>
  );
};

export default JobDetail;
