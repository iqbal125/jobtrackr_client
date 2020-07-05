import React, { useEffect, useState, forwardRef } from 'react';
import { navigate, Link } from 'gatsby';
import axios from 'axios';
import styles from './getjobs.module.css';
import MaterialTable from 'material-table';

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />)
};

const user = {
  email: 'mock@email.com',
  username: 'username',
  id: 1
};

//  <Link to={`/app/job/${job.id}`} state={{ job }}>
//    {job.position}
//  </Link>
//</h4>
//<div class={styles.jobButton}>
//  <Link class={styles.jobButton} to={`/app/editjob/${job.id}`} state={{ job }}>
//    Edit
//  </Link>

const GetJobs = () => {
  const [jobs, setJobs] = useState(null);

  const columns = [
    { title: 'Position', field: 'position' },
    { title: 'Company', field: 'company' },
    { title: 'Date Applied', field: 'date_applied', type: 'date' },
    { title: 'Status', field: 'status' },
    { title: 'Location', field: 'location' },
    { title: 'Point of Contact', field: 'point_of_contact' },
    { title: 'POC Email', field: 'poc_email' },
    { title: 'POC Phone', field: 'poc_phone' },
    { title: 'Notes', field: 'notes' }
  ];

  const jobsPlaceHolder = [{ position: '' }];

  const deleteJob = () => {
    let data = {
      user_id: user.id
    };

    //axios
    //  .delete(`${process.env.GATSBY_SERVER_URL}/api/users/deleteJob/${job.id}`, { data })
    //  .then(res => console.log(res))
    //  .catch(err => console.log(err));
  };

  const fetchJobs = async () => {
    let results = await axios.get(`${process.env.GATSBY_SERVER_URL}/api/users/getJob/${user.id}`);
    setJobs(results.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => navigate('/app/addjob')}>Add Job</button>
        <div className={styles.table_container}>
          <MaterialTable
            icons={tableIcons}
            columns={columns}
            data={jobs ? jobs : jobsPlaceHolder}
            title="Jobs"
          />
        </div>
      </div>
    </div>
  );
};

export default GetJobs;
