import React from 'react';
import Modal from '@mui/material/Modal';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextareaAutosize } from '@mui/material';





function MeetingDetailsModal(props) {

   

    return (
        <>
            <Modal className="popup_style1"
                open={props.isMeetingDetailsModalOpen}
                onClose={props.handleCloseIsMeetingDetailsModalOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <div className='popup_style1_body'>

                  {
                    props.selectedEvent && props.selectedEvent.meetings.map((meeting) => {
                        return (
                            <div>
                            <p>{meeting.full_name}</p>
                            <p>{meeting.email}</p>
                            <p>{meeting.notes}</p>
                            </div>
                        )
                    })
                  }


                </div>


            </Modal>
        </>
    );
}






export default MeetingDetailsModal;