import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hook/useAuth';

const Login = () => {
  const { handleGoogleSignIn } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirect_url = location.state?.from || '/home';
  const logIn = () => {
    handleGoogleSignIn().then((result) => {
      history.push(redirect_url);
    });
  };
  return (
    //   login page
    <div>
      <h1 className='all-header'>Please Log In</h1>
      <button onClick={logIn} className='package-btn'>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
