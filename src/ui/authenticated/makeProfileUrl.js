import { Container, Grid, TextField } from '@mui/material'
import React, {useContext, useState} from 'react'
import { Navigate } from 'react-router-dom';

import { UserContext } from './../../context/User/context';


const MakeProfileUrl = () => {

  const {userState,  updateProfileUrl} = useContext(UserContext);
  
  const [profileUrl, setProfileUrl] = useState('');
  
  const handleContinue = () => {
    updateProfileUrl(profileUrl);
  }

  return (
    <>

     {
        userState.user.profile_url ? <Navigate to={'/dashboard'} /> : null
      } 

      <section>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={6}>


              <TextField id="user_url" label="Custom URL" variant="standard" value={profileUrl} onChange={
                (e) => {
                  setProfileUrl(e.target.value)
                }
              } />
              <button onClick={handleContinue}>Continue</button>


            </Grid>
          </Grid>
        </Container>
      </section>


    </>
  )
}

export default MakeProfileUrl