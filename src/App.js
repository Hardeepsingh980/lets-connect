import './App.css';
import Home from './ui/auth/Home';
import ProfileUrl from './ui/auth/ProfileUrl';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Header from './ui/components/Header';
import Footer from './ui/components/Footer';

import { UserProvider, UserContext } from './context/User/context';

import {useContext} from 'react';


import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


function App() {
  return (
    <>
      <AlertProvider template={AlertTemplate} {...options}>
      <UserProvider>
        <BrowserRouter>
        <Header />
            <MyRoutes />
          <Footer />
          
        </BrowserRouter>
      </UserProvider>
      </AlertProvider>
    </>
  );
}


function MyRoutes() {



  

  return (
    <>  

      <Routes>
        <Route exact path="/" element={<Home />} />
         <Route path="/profile" element={<RequireAuth ><ProfileUrl /></RequireAuth>} />
      </Routes>
    
    </>
    
  );
}


function RequireAuth({ children }) {
  const {userState} = useContext(UserContext);

  if (userState.isLoading) {
    return <div>Loading...</div>;
  }
    if (userState.user) {
      return children;
    } else {
      return <Navigate to="/" />;
    }    
  
}


export default App;
