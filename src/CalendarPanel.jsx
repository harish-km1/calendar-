import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);

const eventStyleGetter = (event, start, end, isSelected) => {
  let backgroundColor = '#888';
  if (event.method === 'Email') {
    backgroundColor = '#3174ad';
  } else if (event.method === 'Phone') {
    backgroundColor = '#a31f34';
  }

  const style = {
    backgroundColor: backgroundColor,
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white',
    border: '0px',
    display: 'block',
  };
  return {
    style: style,
  };
};

function CalendarPanel({ communications }) {
  const calendarEvents = communications.flatMap(comm => {
    return comm.lastCommunications.map(lastComm => {
      const [month, day, year] = lastComm.date.split('/').map(Number);
      return {
        title: `${comm.company} - ${lastComm.type}`,
        start: new Date(year, month - 1, day),
        end: new Date(year, month - 1, day),
      };
    });
  });

  return (
    <div className="calendar-panel">
      <h2>Calendar</h2>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '20px' }}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
}

export default CalendarPanel;
