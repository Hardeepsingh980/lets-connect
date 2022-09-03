import { Container, Grid } from '@mui/material'
import React from 'react'
import SignIn from '../auth/SignIn'

const Header = () => {
  return (
    <>


      <section>
        <Container maxWidth="lg">
          <Grid container spacing={2} >
            <Grid item xs={6}>
              <p>Pyrites Logo</p>
            </Grid>
            <Grid item xs={6}>
              <SignIn />
            </Grid>
          </Grid>
        </Container>
      </section>



    </>
  )
}

export default Header