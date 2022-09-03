import React from 'react'

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)



const CalendarForPublic = () => {
  return (
    <>
      <div>Dashboard</div>
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  )
}

export default CalendarForPublic