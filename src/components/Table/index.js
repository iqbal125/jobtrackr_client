import React, { useEffect, useContext, useState, forwardRef } from 'react';
import { navigate, Link } from 'gatsby';
import axios from 'axios';
import styles from './table.module.css';

import moment from 'moment';
import AuthContext from '../../utils/auth_context';

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

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />)
};

const columns = [
  { title: 'Position', field: 'position' },
  { title: 'Company', field: 'company' },
  { title: 'Date Applied', field: 'date_applied', type: 'date' },
  { title: 'Status', field: 'status' },
  { title: 'Last Status Update', field: 'last_status_change', type: 'date' }
];

const Table = () => {
  const [jobs, setJobs] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [deleteJob, setDeleteJob] = useState(null);
  const context = useContext(AuthContext);
  const { authState } = context;
  const { user } = authState;

  const handleModal = () => (isOpen ? setOpen(false) : setOpen(true));

  const handleDeleteJob = () => {
    let data = {
      user_id: user.id.user
    };

    const newArr = jobs.filter(job => job.id !== deleteJob.id);
    setJobs(newArr);

    setOpen(false);

    axios
      .delete(`${process.env.GATSBY_SERVER_URL}/api/users/deleteJob/${deleteJob.id}`, { data })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const fetchJobs = async () => {
    if (user) {
      let results = await axios.get(
        `${process.env.GATSBY_SERVER_URL}/api/users/getJob/${user.id.user}`
      );
      setJobs(results.data);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const DetailPanel = ({ rowData }) => {
    return (
      <div className={styles.detail_panel}>
        <div>
          <b>POC Name: </b> {rowData.poc_name}
        </div>
        <div>
          <b>POC Email: </b>
          {rowData.poc_email}
        </div>
        <div>
          <b>POC Phone: </b> {rowData.poc_phone}
        </div>
        <div>
          <b>Location: </b> {rowData.location}
        </div>
        <div>
          <b>Last Follow-Up: </b>
          {moment(rowData.last_followup).format('l')}
        </div>
        <div>
          <b>Last Follow-Up Response: </b>
          {moment(rowData.last_followup_response).format('l')}
        </div>
        <div>
          <b>Notes:</b> {rowData.notes}
        </div>
      </div>
    );
  };

  const ModalBody = (
    <div className={styles.modal}>
      <h2>Confirm Delete Job?</h2>
      <div className={styles.modal_button_row}>
        <button className={styles.delete_button} onClick={handleDeleteJob}>
          Delete
        </button>
        <button className={styles.cancel_button} onClick={handleModal}>
          Cancel
        </button>
      </div>
    </div>
  );

  const jobsPlaceHolder = [{ position: '' }];

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
      onClick: (_, rowData) => {
        setDeleteJob(rowData);
        setOpen(true);
      }
    }
  ];

  return (
    <div className={styles.profile_container}>
      <button className={styles.add_job_button} onClick={() => navigate('/app/addjob')}>
        Add Job
      </button>

      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={jobs ? jobs : jobsPlaceHolder}
        title="My Jobs"
        actions={actionsArr}
        detailPanel={detailPanelArr}
      />

      <Modal open={isOpen} onClose={() => setOpen(false)}>
        {ModalBody}
      </Modal>
    </div>
  );
};

export default Table;
