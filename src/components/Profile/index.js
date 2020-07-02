import React, { useContext } from 'react';
import AuthContext from '../../utils/auth_context';
import GetJobs from '../GetJobs';

const user = {
  email: 'mock@email.com',
  username: 'username',
  id: 1
};

const Profile = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome: {user.username} </h1>
      <GetJobs />
    </div>
  );
};

export default Profile;
