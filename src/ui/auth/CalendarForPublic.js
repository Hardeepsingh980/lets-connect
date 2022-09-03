import React, {useEffect, useState} from 'react'

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)



const CalendarForPublic = ({match}) => {

  console.log('AAAAAS');

  const [events, setEvents] = useState([]);

  const {profileUrl} = match.params;

  const url = `http://192.168.197.18:8088/api/public/schedules/${profileUrl}/`;

  const getEvents = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.map((event) => {
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
  }

  useEffect(() => {
    getEvents();
  }, [])

  return (
    <>
      <div>Dashboard</div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  )
}

export default CalendarForPublic