import React, { useEffect, useState, forwardRef } from 'react';
import { navigate, Link } from 'gatsby';
import axios from 'axios';
import styles from './getjobs.module.css';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />)
};

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));

const user = {
  email: 'mock@email.com',
  username: 'username',
  id: 1
};

const GetJobs = () => {
  const classes = useStyles();
  const [jobs, setJobs] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const columns = [
    { title: 'Position', field: 'position' },
    { title: 'Company', field: 'company' },
    { title: 'Date Applied', field: 'date_applied', type: 'date' },
    { title: 'Status', field: 'status' }
  ];

  const jobsPlaceHolder = [{ position: '' }];

  const deleteJob = rowData => {
    let data = {
      user_id: user.id
    };

    const newArr = jobs.filter(job => job.id !== rowData.id);
    setJobs(newArr);

    axios
      .delete(`${process.env.GATSBY_SERVER_URL}/api/users/deleteJob/${rowData.id}`, { data })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const fetchJobs = async () => {
    let results = await axios.get(`${process.env.GATSBY_SERVER_URL}/api/users/getJob/${user.id}`);
    setJobs(results.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const DetailPanel = ({ rowData }) => {
    console.log(rowData);
    return (
      <div className={styles.detail_panel}>
        <div>POC Name: {rowData.poc_name}</div>
        <div>POC Email: {rowData.poc_email}</div>
        <div>POC Phone: {rowData.poc_phone}</div>
        <div>Location: {rowData.location}</div>
        <div>Notes: {rowData.notes}</div>
      </div>
    );
  };

  const ModalBody = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  const detailPanelArr = [
    {
      tooltip: 'Show More Info',
      icon: AddBox,
      render: rowData => <DetailPanel rowData={rowData} />
    }
  ];

  const actionsArr = [
    {
      icon: EditIcon,
      tooltip: 'Edit Job',
      onClick: (_, rowData) => {
        navigate(`/app/editjob/${rowData.id}`, { state: { rowData } });
      }
    },
    {
      icon: DeleteIcon,
      tooltip: 'Delete Job',
      onClick: (_, rowData) => deleteJob(rowData)
    }
  ];

  return (
    <div>
      <div>
        <button onClick={() => navigate('/app/addjob')}>Add Job</button>
        <button onClick={() => setOpen(true)}>Add Job</button>
        <div className={styles.table_container}>
          <Modal open={isOpen} onClose={() => setOpen(false)}>
            {ModalBody}
          </Modal>
          <MaterialTable
            icons={tableIcons}
            columns={columns}
            data={jobs ? jobs : jobsPlaceHolder}
            title="Jobs"
            actions={actionsArr}
            detailPanel={detailPanelArr}
          />
        </div>
      </div>
    </div>
  );
};

export default GetJobs;
