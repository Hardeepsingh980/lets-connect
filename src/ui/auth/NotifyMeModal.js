import React from 'react';
import Modal from '@mui/material/Modal';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextareaAutosize } from '@mui/material';







function NotifyMeModal(props) {

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();

    const handleClick = () => {
        
    };



    return (
        <>
            <Modal className="popup_style1"
                open={props.isNotifyMeModalOpen}
                onClose={props.handleCloseNotifyMeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <div className='popup_style1_body'>

                    Notify Me if meeting gets cancelled

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


                    <button onClick={
                        handleClick
                    } >Notify Me</button>

                </div>


            </Modal>
        </>
    );
}






export default NotifyMeModal;