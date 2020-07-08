import React, { useContext } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import Profile from '../Profile';
import Auth from '../Authentication/auth';

import AddJobForm from '../AddJobForm';
import EditJobForm from '../EditJobForm';

const Routes = () => {
  //check token expires time on private routes
  const isTokenValid = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresIn'));
    return new Date().getTime() < expiresAt;
  };

  const PrivateRoute = ({ component: Component, location, ...rest }) => {
    if (!isTokenValid()) {
      navigate('/app/login');
      return null;
    } else {
      return <Component {...rest} />;
    }
  };

  return (
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      {/*<Profile path="app/profile" />*/}
      <AddJobForm path="/app/addjob" />
      <EditJobForm path="/app/editjob/:id" />
      <Auth path="/app/login" />
    </Router>
  );
};

export default Routes;
