import React, { useEffect, useState } from 'react'

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useParams } from "react-router-dom";

import axios from 'axios';

import BookSlotModal from './BookSlotModal';
import NotifyMeModal from './NotifyMeModal';




const localizer = momentLocalizer(moment)



const IFrameCalendarForPublic = ({ match, props }) => {


  const [events, setEvents] = useState([]);

  const [notFound, setNotFound] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const [isBookSlotModalOpen, setIsBookSlotModalOpen] = useState(false);

  const [isNotifyMeModalOpen, setIsNotifyMeModalOpen] = useState(false);



  let { profileUrl } = useParams();


  const handleCloseBookSlotModal = () => {
    setIsBookSlotModalOpen(false);
  }

  const handleCloseNotifyMeModal = () => {
    setIsNotifyMeModalOpen(false);
  }


  const url = `http://192.168.197.18:8088/api/public/schedules/${profileUrl}/`;

  const getEvents = async () => {

    try {
      const response = await axios.get(url);
      response.data.map((event) => {
        event.slots.map((slot) => {
          if (!slot.is_available) {
            setEvents((events) => [...events, {
              title: "Busy",
              start: new Date(event.date + " " + slot.from_time),
              end: new Date(event.date + " " + slot.to_time),
            }])
          }
          else {
            setEvents((events) => [...events, {
              title: "Available",
              start: new Date(event.date + " " + slot.from_time),
              end: new Date(event.date + " " + slot.to_time),
            }])
          }
        });
      })

    } catch (error) {
      setNotFound(true);
    }
  }

  useEffect(() => {
    getEvents();
  }, [])

  return (
     notFound ? <>User not Found</> : <>
      <div>Dashboard</div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => {
          setSelectedEvent(event);
          // setIsBookSlotModalOpen(true);
          setIsNotifyMeModalOpen(true);
        }}
      />


      <BookSlotModal
        isBookSlotModalOpen={isBookSlotModalOpen}
        handleCloseBookSlotModal={handleCloseBookSlotModal}
        selectedEvent={selectedEvent}

      />

      <NotifyMeModal
        isNotifyMeModalOpen={isNotifyMeModalOpen}
        handleCloseNotifyMeModal={handleCloseNotifyMeModal}
        selectedEvent={selectedEvent}
      />

    </>
    

  )
}

export default IFrameCalendarForPublic;