













import React, { useState } from 'react';
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


function AddSchedule() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const [isAddSchedulePopup, setAddSchedulePopup] = useState(false);
  const handleOpenAddSchedulePopup = () => setAddSchedulePopup(true);
  const handleCloseAddSchedulePopup = () => setAddSchedulePopup(false);




  const handleChange = (newValue) => {
    setAddSchedulePopup(newValue);
  };







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
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                label="To"
                value={value}
                onChange={handleChange}
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
                  <tr>
                    <td>01:00 AM</td>
                    <td>01:30 AM</td>
                    <td>2</td>
                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus odit recusandae ut non totam eius eos distinctio architecto, est voluptatum iste esse corrupti veniam expedita atque omnis odio quibusdam at illum facere eligendi perferendis. Aperiam, similique officiis nihil ea id accusamus ducimus totam maxime error maiores dolorem illo magni deleniti.</td>
                  </tr>
                  <tr>
                    <td>01:00 AM</td>
                    <td>01:30 AM</td>
                    <td>2</td>
                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus odit recusandae ut non totam eius eos distinctio architecto, est voluptatum iste esse corrupti veniam expedita atque omnis odio quibusdam at illum facere eligendi perferendis. Aperiam, similique officiis nihil ea id accusamus ducimus totam maxime error maiores dolorem illo magni deleniti.</td>
                  </tr>
                </tbody>
              </table>


            </Grid>



            <Grid item xs={12}>
              <p>Pick Sgedule Validty</p>
            </Grid>


          </Grid>
        </Container>
      </section>


























      <AddSchedulePopup isAddSchedulePopup={isAddSchedulePopup} handleCloseAddSchedulePopup={handleCloseAddSchedulePopup} />



    </>
  );
}






export default AddSchedule;