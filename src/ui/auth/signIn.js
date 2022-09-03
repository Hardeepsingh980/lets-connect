import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';




const SignIn = () => {

  const clientId = '235004129459-nc0clnor0f9v0tqaq4gmua24d8uk6eit.apps.googleusercontent.com';


  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    console.log('success:', res);
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };



  return (
    <>

      <div className="header-btns  ms-auto ms-lg-0  d-sm-flex align-items-center">
        <GoogleLogin
          className="header_btn"
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>

    </>
  )
}

export default SignIn