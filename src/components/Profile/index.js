import React from 'react';
import Loadable from '@loadable/component';
const LoadableTable = Loadable(() => import('../Table'));

const Profile = () => {
  return <LoadableTable />;
};

export default Profile;
