import { Container, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../auth/Logout'
import SignIn from '../auth/signIn'

const Header = () => {
  return (
    <>





      <header className="site-header site-header--menu-left dynamic-sticky-bg px-3 site-header--absolute site-header--sticky">
        <div className="container-fluid">
          <nav className="navbar site-navbar">
            <div className="brand-logo">
              <a href="/">
                <img src="/image/logo-dark.png" alt="" className="light-version-logo" />
                <img src="/image/logo-white.png" alt="" className="dark-version-logo" />
              </a>
            </div>
            <div className="menu-block-wrapper  ms-lg-7">
              <div className="menu-overlay"></div>
              <nav className="menu-block" id="append-menu-header">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">&times;</div>
                </div>
              </nav>
            </div>

            
            {'Token' === 'Token' ? <SignIn /> : <Logout />}



            
            
          </nav>
        </div>
      </header>





     
     



    </>
  )
}

export default Header