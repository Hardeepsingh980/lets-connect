import { Container, Grid, TextField } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <>


      <section>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center" alignItems="center">




            <Grid item xs={6}>
              <TextField id="name" label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="email" label="Email Address" variant="outlined" disabled />
            </Grid>
            <Grid item xs={6}>
              <TextField id="profile_url" label="Profile URL" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <img src="https://www.disabled-world.com/pics/1/dw-qr-code.png" alt="QR Code" style={{width: '100px'}} />
            </Grid>
            <Grid item xs={6}>
              <button>Share option of QR</button>
            </Grid>
            <Grid item xs={6}>
              <button>Submit</button>
            </Grid>
            


          </Grid>
        </Container>
      </section>


    </>
  )
}

export default Profile