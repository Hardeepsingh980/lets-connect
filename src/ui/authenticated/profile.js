import { Container, Grid, TextField } from '@mui/material'
import React, {useContext, useState} from 'react'

import { UserContext } from './../../context/User/context';

import QRCode from "react-qr-code";




const Profile = () => {

  const {userState, updateProfileUrl} = useContext(UserContext);

  const [name, setName] = useState(userState.user.social.name)
  const [profileUrl, setProfileUrl] = useState(userState.user.profile_url)
  const [email, setEmail] = useState(userState.user.social.email)
  const [profile_pic, setProfilePic] = useState(userState.user.social.picture)

  


  
  return (
    <>


      <section>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center" alignItems="center">




            <Grid item xs={6}>
              <TextField id="name" label="Name" variant="outlined" disabled value={name} onChange={(e) => {
                setName(e.target.value)
              }} />
            </Grid>
            <Grid item xs={6}>
              <TextField id="email" label="Email Address" variant="outlined" disabled value={email} onChange={(e) => {
                setEmail(e.target.value)
              }} />
            </Grid>
            <Grid item xs={6}>
              <TextField id="profile_url" label="Profile URL" variant="outlined" value={profileUrl} onChange={(e) => {
                setProfileUrl(e.target.value)
              }} />
            </Grid>
            <Grid item xs={6}>
              <img src={profile_pic} alt="QR Code" style={{width: '100px'}} />
            </Grid>
          
            <Grid item xs={6}>
              <button onClick={() => {
                updateProfileUrl(profileUrl);
              }} >Submit</button>
            </Grid>

            <QRCode value={`localhost:8000/${profileUrl}`} />


            


          </Grid>
        </Container>
      </section>


    </>
  )
}

export default Profile