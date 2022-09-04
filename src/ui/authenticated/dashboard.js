import React, { useContext, useEffect, useState } from 'react'

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { UserContext } from '../../context/User/context';
import { Link } from 'react-router-dom';


import MeetingDetailModal from './MeetingDetailModal';



const localizer = momentLocalizer(moment)




const Dashboard = () => {

  const { userState } = useContext(UserContext);

  const [events, setEvents] = useState([]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const [isMeetingDetailsModalOpen, setIsMeetingDetailsModalOpen] = useState(false);

  const handleCloseIsMeetingDetailsModalOpen = () => {
    setIsMeetingDetailsModalOpen(false);
  }



  useEffect(() => {

      userState.schedules.map((event) => {
        event.slots.map((slot) => {
            if (!slot.is_available) {
              setEvents((events) => [...events, {
                title: "Busy",
                start: new Date(event.date + " " + slot.from_time),
                end: new Date(event.date + " " + slot.to_time),
                meetings: slot.meetings
              }])
  
            } else {
              setEvents((events) => [...events, {
                title: "Available",
                start: new Date(event.date + " " + slot.from_time),
                end: new Date(event.date + " " + slot.to_time),
                meetings: slot.meetings
              }])
            }
        });
      })

  }, [userState.schedules])

  return (
    <>
      <section className="service-area service-area--l1 border-top border-default-color-2 bg-default-3">
        <div className="container">
          <div className="row align-items-center justify-content-center">



            <div className="col-md-6 col-sm-6 col-xs-12 headingdv1">
              <h3 className='title1'>Hello {userState.user.social.name}, Here is your schedule.</h3>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 text-end headingdv1">
              <Link className='btn btn--lg btn-primary text-white h-70 mb-2' to="/add-schedule">Add Schedule</Link>
            </div>

      <div className='col-12'>
      <Calendar
      className='big_calendar_dv'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => {
          setSelectedEvent(event);
          console.log(event);
          if (event.meetings.length > 0) {
            setIsMeetingDetailsModalOpen(true);
          } 
        }}
      />
      </div>
      
      </div>
      </div>
      </section>

      <MeetingDetailModal 
        isMeetingDetailsModalOpen={isMeetingDetailsModalOpen}
        handleCloseIsMeetingDetailsModalOpen={handleCloseIsMeetingDetailsModalOpen}
        selectedEvent={selectedEvent}
      />
    </>
  )
}

export default Dashboard