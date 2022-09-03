import './App.css';
import Home from './ui/auth/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './ui/components/Header';
import Footer from './ui/components/Footer';
import Dashboard from './ui/authenticated/Dashboard';
import MakeProfileUrl from './ui/authenticated/MakeProfileUrl';
import AddSchedule from './ui/authenticated/AddSchedule';


import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Profile from './ui/authenticated/Profile';
import CalendarForPublic from './ui/auth/CalendarForPublic';



function App() {
  return (
    <>


      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile-url" element={<MakeProfileUrl />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-schedule" element={<AddSchedule />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/calendar-for-public" element={<CalendarForPublic />} />



            
          </Routes>
          <Footer />
        </BrowserRouter>
      </LocalizationProvider>



    </>
  );
}

export default App;
