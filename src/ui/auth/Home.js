import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from './../../context/User/context';


const Home = () => {

  const {userState} = useContext(UserContext);

  return (
    <>

      {
        userState.user ? userState.user.profile_url ? <Navigate to={'/dashboard'} /> : <Navigate to={'/profile-url'} /> : null
      }
      {/* <div id="loading">
        <img src="image/favicon.png" alt="">
      </div> */}



      <div className="welcome-area welcome-area--l1 position-relative bg-default">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-8 col-xs-11 order-2 order-lg-1" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
              <div className="welcome-content welcome-content--l1">
                <h1 className="welcome-content__title">
                  Stop waiting. Grow your<br />
                  <span className="text-highlight highlight-text d-inline-block"></span>
                </h1>
                <p className="welcome-content__descriptions">Create custom landing pages
                  with Fastland<br className="d-none d-xs-block" /> that converts more visitors than any website.</p>
                {/* <div className="newsletter-form">
                  <form action="https://finestdevs.com/.">
                    <div className="d-flex align-items-center justify-content-center flex-column flex-xs-row">
                      <input className="form-control " type="email" placeholder="Enter your email" required />
                      <button className=" btn-purple-heart btn btn--lg" type="submit">Start For Free</button>
                    </div>
                  </form>
                </div> */}
                {/* <p className="welcome-content__terms-text">By clicking the button, you are agreeing with our <a className="btn btn-link" href="https://finestdevs.com/terms-page.html">Terms & Conditions.</a> </p> */}
              </div>
            </div>




            <div className="col-xl-6 col-lg-5 col-md-10 order-1 order-lg-2 position-static">
              <div className="welcome-image-group-wrapper">
                <div className="welcome-image welcome-image--group-01">
                  <img src="image/l1-hero-img-ipad.png" alt="" className="welcome-image__single welcome-image--group-01__main" />
                  <div className="welcome-image__single welcome-image--group-01__img-1">
                    <img className="w-100" src="image/l1-hero-img-1.png" alt="" />
                  </div>
                  <div className="welcome-image__single welcome-image--group-01__img-2">
                    <img className="w-100" src="image/l1-hero-img-2.png" alt="" />
                  </div>
                  <div className="welcome-image__single welcome-image--group-01__img-3">
                    <img className="w-100" src="image/l1-hero-img-3.png" alt="" />
                  </div>
                  <div className="welcome-image__single welcome-image--group-01__img-4">
                    <img className="w-100" src="image/hero-dots.png" alt="" />
                  </div>
                  <div className="welcome-image__single welcome-image--group-01__img-5">
                    <img className="w-100" src="image/l1-hero-shape-1.png" alt="" />
                  </div>
                  <div className="welcome-image__single welcome-image--group-01__img-6">
                    <img className="w-100" src="image/l1-hero-shape-2.png" alt="" />
                  </div>
                  <div className="welcome-image__single welcome-image--group-01__img-7">
                    <img className="w-100" src="image/l1-hero-shape-3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="service-area service-area--l1 border-top border-default-color-2 bg-default">
        <div className="service-shape service-shape--l1">
          <img className="w-100" src="image/services-shape-l1.png" alt="" />
        </div>
        <div className="container">
          <div className="row align-items-end justify-content-center">
            <div className="col-lg-7 col-md-12 col-xs-10">
              <div className="section-title text-center text-md-start" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
                <h2 className="section-title__heading">Your business needs a<br className="d-none d-xs-block d-lg-none d-xl-block" /> better shape today.</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xs-10">
              <div className="section-title  text-center text-md-start" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                <p className="section-title__description">Create custom landing pages with <br className="d-none d-xs-block" /> Fastland that converts more
                  visitors<br className="d-none d-sm-block" /> than any website. Easy & Fast.</p>
              </div>
            </div>
          </div>
          <div className="service-items">
            <div className="row justify-content-center justify-content-md-start">
              <div className="col-lg-4 col-xs-6 col-10">
                <div className="widget widget--service text-center text-md-start" data-aos="zoom-in" data-aos-duration="300" data-aos-once="true">
                  <div className="widget__icon widget__icon--golden-tainoi mx-auto mx-md-0">
                    <img src="image/athletics.svg" alt="" />
                  </div>
                  <div className="widget__body">
                    <h5 className="widget__heading">Manage Smartly</h5>
                    <p className="widget__description">Stay on top of your task lists and stay<br className="d-none d-md-block" /> in touch
                      with what's happening</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xs-6 col-10">
                <div className="widget widget--service text-center text-md-start" data-aos="zoom-in" data-aos-duration="300" data-aos-once="true">
                  <div className="widget__icon widget__icon--ice-cold mx-auto mx-md-0">
                    <img src="image/archery-target.svg" alt="" />
                  </div>
                  <div className="widget__body">
                    <h5 className="widget__heading">Communicate Fast</h5>
                    <p className="widget__description">Stay on top of your task lists and stay<br className="d-none d-md-block" /> in touch
                      with what's happening</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xs-6 col-10">
                <div className="widget widget--service text-center text-md-start" data-aos="zoom-in" data-aos-duration="300" data-aos-once="true">
                  <div className="widget__icon widget__icon--anakiwaap mx-auto mx-md-0">
                    <img src="image/money-coins.svg" alt="" />
                  </div>
                  <div className="widget__body">
                    <h5 className="widget__heading">Influence Easily</h5>
                    <p className="widget__description">Stay on top of your task lists and stay<br className="d-none d-md-block" /> in touch
                      with what's happening</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="service-area service-area--l1 border-top border-default-color-2 bg-default">
        <div className="service-shape service-shape--l1">
          <img className="w-100" src="image/services-shape-l1.png" alt="" />
        </div>
        <div className="container">
          <div className="row align-items-end justify-content-center">
            <div className="col-lg-7 col-md-12 col-xs-10">
              <div className="section-title text-center text-md-start" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
                <h2 className="section-title__heading">Your business needs a<br className="d-none d-xs-block d-lg-none d-xl-block" /> better shape today.</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xs-10">
              <div className="section-title  text-center text-md-start" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                <p className="section-title__description">Create custom landing pages with <br className="d-none d-xs-block" /> Fastland that converts more
                  visitors<br className="d-none d-sm-block" /> than any website. Easy & Fast.</p>
              </div>
            </div>
          </div>
          <div className="service-items">
            <div className="row justify-content-center justify-content-md-start">
              <div className="col-lg-4 col-xs-6 col-10">
                <div className="widget widget--service text-center text-md-start" data-aos="zoom-in" data-aos-duration="300" data-aos-once="true">
                  <div className="widget__icon widget__icon--golden-tainoi mx-auto mx-md-0">
                    <img src="image/athletics.svg" alt="" />
                  </div>
                  <div className="widget__body">
                    <h5 className="widget__heading">Manage Smartly</h5>
                    <p className="widget__description">Stay on top of your task lists and stay<br className="d-none d-md-block" /> in touch
                      with what's happening</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xs-6 col-10">
                <div className="widget widget--service text-center text-md-start" data-aos="zoom-in" data-aos-duration="300" data-aos-once="true">
                  <div className="widget__icon widget__icon--ice-cold mx-auto mx-md-0">
                    <img src="image/archery-target.svg" alt="" />
                  </div>
                  <div className="widget__body">
                    <h5 className="widget__heading">Communicate Fast</h5>
                    <p className="widget__description">Stay on top of your task lists and stay<br className="d-none d-md-block" /> in touch
                      with what's happening</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xs-6 col-10">
                <div className="widget widget--service text-center text-md-start" data-aos="zoom-in" data-aos-duration="300" data-aos-once="true">
                  <div className="widget__icon widget__icon--anakiwaap mx-auto mx-md-0">
                    <img src="image/money-coins.svg" alt="" />
                  </div>
                  <div className="widget__body">
                    <h5 className="widget__heading">Influence Easily</h5>
                    <p className="widget__description">Stay on top of your task lists and stay<br className="d-none d-md-block" /> in touch
                      with what's happening</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home