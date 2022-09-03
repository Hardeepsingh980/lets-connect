import React, {useContext} from 'react'

import { UserContext } from './../../context/User/context';


const Logout = () => {

  const {signOut} = useContext(UserContext);




  return (
    <>
          

      <div className="header-btns  ms-auto ms-lg-0  d-sm-flex align-items-center" >
        <button className="header_btn" onClick={() => {
        signOut();
      }}>Logout</button>
      </div>

      
    </>
  )
}

export default Logout