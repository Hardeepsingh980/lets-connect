import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom';
import HomeSections from '../components/HomeSections'
import { UserContext } from './../../context/User/context';


const Home = () => {

  const {userState} = useContext(UserContext);

  return (
    <>

      {
        userState.user ? userState.user.profile_url ? <Navigate to={'/dashboard'} /> : <Navigate to={'/profile-url'} /> : null
      }

      <HomeSections />



    </>
  )
}

export default Home