import { Container, Grid } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>


      <section>
        <Container maxWidth="lg">
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <p>Copyright by Pyrites</p>
            </Grid>
          </Grid>
        </Container>
      </section>


    </>
  )
}

export default Footer