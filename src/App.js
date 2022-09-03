import './App.css';
import Home from './ui/auth/Home';
import ProfileUrl from './ui/auth/ProfileUrl';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './ui/components/Header';
import Footer from './ui/components/Footer';



function App() {
  return (
    <>


      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile-url" element={<ProfileUrl />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  );
}

export default App;
