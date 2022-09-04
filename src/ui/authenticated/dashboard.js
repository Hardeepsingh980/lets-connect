import React, {useContext, useEffect, useState} from 'react'

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { UserContext } from '../../context/User/context';


import MeetingDetailModal from './MeetingDetailModal';



const localizer = momentLocalizer(moment)




const Dashboard = () => {

  const {userState} = useContext(UserContext);

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
      <div>Dashboard</div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => {
          setSelectedEvent(event);
          console.log(event);
          if (event.title === "Busy" && event.meetings.length > 0) {
            setIsMeetingDetailsModalOpen(true);
          } 
        }}
      />

      <MeetingDetailModal 
        isMeetingDetailsModalOpen={isMeetingDetailsModalOpen}
        handleCloseIsMeetingDetailsModalOpen={handleCloseIsMeetingDetailsModalOpen}
        selectedEvent={selectedEvent}
      />
    </>
  )
}

export default Dashboard