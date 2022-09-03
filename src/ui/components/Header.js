import { Container, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../auth/Logout'
import SignIn from '../auth/signIn'

const Header = () => {
  return (
    <>


      <section>
        <Container maxWidth="lg">
          <Grid container spacing={2} >
            <Grid item xs={6}>
              <p>Pyrites Logo</p>


              <ul>
                <Link to="/" >Home</Link> &nbsp; &nbsp;
                <Link to="/profile-url" >profile url</Link> &nbsp; &nbsp;
                <Link to="/dashboard" >dashboard</Link> &nbsp; &nbsp;
                <Link to="/add-schedule" >add-schedule</Link> &nbsp; &nbsp;
                <Link to="/profile" >profile</Link> &nbsp; &nbsp;
                <Link to="/calendar-for-public" >CalendarForPublic</Link> &nbsp; &nbsp;
              </ul>
            </Grid>
            <Grid item xs={6}>

              {'Token' === 'Token' ? <SignIn /> : <Logout />}

            </Grid>
          </Grid>
        </Container>
      </section>



    </>
  )
}

export default Header