import React from 'react';
import Modal from '@mui/material/Modal';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextareaAutosize } from '@mui/material';

import { useAlert } from 'react-alert'

import axios from 'axios';






function BookSlotModal(props) {

    const alert = useAlert()

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [notes, setNotes] = React.useState();

    const url = 'http://192.168.197.18:8088/public/schedule/';

    const handleClick = () => {

        const data = {
            full_name: name,
            email: email,
            notes: notes,
            slot: props.selectedEvent.id
        };

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.post(url, data, config).then((response) => {
            props.handleCloseBookSlotModal();
            alert.success('Your slot has been booked successfully, You will receive an meeting link on your email shortly');
        }).catch((error) => {
            console.log(error);
        });  
    };



    return (
        <>
            <Modal className="popup_style1"
                open={props.isBookSlotModalOpen}
                onClose={props.handleCloseBookSlotModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <div className='popup_style1_body'>

                    <TextField
                        id="filled-number"
                        label="Name"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />

                    <TextField
                        id="filled-number"
                        label="Email"
                        type="email"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />

                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Notes"
                        value={notes}
                        onChange={(e) => {
                            setNotes(e.target.value)
                        }}
                    />

                    <button onClick={
                        handleClick
                    } >Book Slot</button>

                </div>


            </Modal>
        </>
    );
}






export default BookSlotModal;