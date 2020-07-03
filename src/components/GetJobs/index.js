import React, { useEffect, useState, Fragment } from 'react';
import { navigate, Link } from 'gatsby';
import axios from 'axios';
import styles from './getjobs.module.css';
import MaterialTable from 'material-table';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
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

const GetJobs = () => {
  const [jobs, setJobs] = useState(null);

  // change  to await async
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

    //axios
    //  .delete(`${process.env.GATSBY_SERVER_URL}/api/users/deleteJob/${job.id}`, { data })
    //  .then(res => handleRes(res))
    //  .catch(err => handleErr(err));
  };

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
    <div>
      <div>
        <div onClick={() => navigate('/app/addjob')}>Add Job</div>
        <MaterialTable
          icons={tableIcons}
          columns={columns}
          data={jobs ? jobs : jobsPlaceHolder}
          title="Jobs"
        />
      </div>
    </div>
  );
};

export default GetJobs;
