import React, { useContext } from 'react';
import AuthContext from '../../utils/auth_context';

const Profile = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome: {context.authState.user.username} </h1>
    </div>
  );
};

export default Profile;
