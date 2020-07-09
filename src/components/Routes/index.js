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

  const PrivateRoute = ({ component: Component, state, location, ...rest }) => {
    if (!isTokenValid()) {
      navigate('/app/login');
      return null;
    } else {
      console.log(state);
      return <Component {...rest} />;
    }
  };

  return (
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/addjob" component={AddJobForm} />
      <EditJobForm path="/app/editjob/:id" />
      <Auth path="/app/login" />
    </Router>
  );
};

export default Routes;
