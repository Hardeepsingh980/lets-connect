import React from 'react';
import Modal from '@mui/material/Modal';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextareaAutosize } from '@mui/material';







function AddSchedulePopup(props) {

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));


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
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />

          <TimePicker
            label="To"
            value={value}
            onChange={handleChange}
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
          />

          <TextareaAutosize
            placeholder="Meeting Agenda"
            minRows={10}
          />


          <button>Add Schedule</button>

        </div>


      </Modal>
    </>
  );
}






export default AddSchedulePopup;