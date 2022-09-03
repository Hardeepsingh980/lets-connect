













import React, { useState, useContext } from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Container, Grid, TextareaAutosize } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import AddSchedulePopup from './AddSchedulePopup';

import { UserContext } from './../../context/User/context';
import { Navigate } from 'react-router-dom';



function AddSchedule() {

  const {userState,  addSchedule} = useContext(UserContext);

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const [isAddSchedulePopup, setAddSchedulePopup] = useState(false);
  const handleOpenAddSchedulePopup = () => setAddSchedulePopup(true);
  const handleCloseAddSchedulePopup = () => setAddSchedulePopup(false);

  const [slots, setSlots] = useState([]);

  const [from_date, setFromDate] = useState();
  const [to_date, setToDate] = useState();


  const handleChange = (newValue) => {
    setAddSchedulePopup(newValue);
  };


  const handleClick = async () => {
    await addSchedule({
      from_date: dayjs(from_date).format('YYYY-MM-DD'),
      to_date: dayjs(to_date).format('YYYY-MM-DD'),
      slots: slots
    });
    return <Navigate to={'/dashboard'} />
  }




  return (
    <>






      <section>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center" alignItems="center">





            <Grid item xs={12}>
              <p>Add Schedule</p>
            </Grid>



            <Grid item xs={12}>



              <DesktopDatePicker
                label="From"
                value={from_date}
                onChange={(newValue) => {
                  setFromDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                label="To"
                value={to_date}
                onChange={(newValue) => {
                  setToDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />



            </Grid>


            <Grid item xs={6}>
              <p>Slot</p>
            </Grid>



            <Grid item xs={6}>
              <button onClick={handleOpenAddSchedulePopup}>Add</button>
            </Grid>



            <Grid item xs={12}>

              <table>
                <thead>
                  <tr>
                    <th>Start time</th>
                    <th>End time</th>
                    <th>Max attendie alloweds</th>
                    <th>Meeting Agenda</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    slots.map((slot, index) => {
                      return (
                        <tr key={index}>
                          <td>{slot.from_time}</td>
                          <td>{slot.to_time}</td>
                          <td>{slot.max_people}</td>
                          <td>{slot.meeting_desctiption}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </Grid>

            <button onClick={handleClick}>Submit</button>

          </Grid>
        </Container>
      </section>

      <AddSchedulePopup isAddSchedulePopup={isAddSchedulePopup} handleCloseAddSchedulePopup={handleCloseAddSchedulePopup} setSlots={setSlots} slots={slots} />



    </>
  );
}






export default AddSchedule;