import React from 'react';
import Loadable from '@loadable/component';

//material-table is a client side only package and
//will cause the build to fail, using loadable solves this.
const LoadableTable = Loadable(() => import('../Table'));

const Profile = () => {
  return <LoadableTable />;
};

export default Profile;
