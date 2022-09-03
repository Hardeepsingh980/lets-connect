import React from 'react';
import Modal from '@mui/material/Modal';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextareaAutosize } from '@mui/material';







function AddSchedulePopup(props) {

  const [from_time, setFromTime] = React.useState();
  const [to_time, setToTime] = React.useState();
  const [max_attendie_allowed, setMaxAttendieAllowed] = React.useState();
  const [meeting_agenda, setMeetingAgenda] = React.useState();

  const handleChange = (newValue) => {
    props.setAddSchedulePopup(newValue);
  };





  return (
    <>
      <Modal className="popup_style1"
        open={props.isAddSchedulePopup}
        onClose={props.handleCloseAddSchedulePopup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <div className='popup_style1_body'>


          <TimePicker
            label="From"
            value={from_time}
            onChange={(newValue) => {
              setFromTime(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />

          <TimePicker
            label="To"
            value={to_time}
            onChange={(newValue) => {
              setToTime(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />

          <TextField
            id="filled-number"
            label="Max attendie alloweds"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={max_attendie_allowed}
            onChange={(e) => {
              setMaxAttendieAllowed(e.target.value);
            }}
          />

          <TextareaAutosize
            placeholder="Meeting Agenda"
            minRows={10}
            value={meeting_agenda}
            onChange={(e) => {
              setMeetingAgenda(e.target.value);
            }}

          />


          <button onClick={() => {
            props.setSlots([...props.slots, {
              from_time: dayjs(from_time).format('HH:mm'),
              to_time: dayjs(to_time).format('HH:mm'),
              max_people: max_attendie_allowed,
              meeting_desctiption: meeting_agenda
            }]);
            
            setFromTime('');
            setToTime('');
            setMaxAttendieAllowed('');
            setMeetingAgenda('');

            props.handleCloseAddSchedulePopup();
          }}>Add Schedule</button>

        </div>


      </Modal>
    </>
  );
}






export default AddSchedulePopup;