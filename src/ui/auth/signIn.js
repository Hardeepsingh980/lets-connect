import React, { useEffect, useContext } from 'react'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

import { UserContext } from './../../context/User/context';
import { Navigate } from 'react-router-dom';

const SignIn = () => {

  const {userState,  signInWithGoogle} = useContext(UserContext);

  const clientId = '235004129459-nc0clnor0f9v0tqaq4gmua24d8uk6eit.apps.googleusercontent.com';

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events'
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = async (res) => {
    console.log('success:', res);
    var res = await signInWithGoogle(res.accessToken);

  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };



  return (
    <>

      {
        userState.user ? <Navigate to="/profile-url" /> : null
      }

      <div className="header-btns  ms-auto ms-lg-0  d-sm-flex align-items-center">
        <GoogleLogin
          className="header_btn"
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>

    </>
  )
}

export default SignIn