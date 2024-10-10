import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import '@fullcalendar/common/main.css'; // Import FullCalendar base styles
// import '@fullcalendar/daygrid/main.css'; // Import DayGrid styles
// import '@fullcalendar/timegrid/main.css'; // Import TimeGrid styles

function Calendar() {
  return (
    <div className="bg-white bg-opacity-50 rounded-lg overflow-hidden shadow-lg">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{
          start: 'today prev,next', // will normally be on the left
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay', // will normally be on the right
        }}
        height={'90vh'}
        // Custom styles for the calendar
        themeSystem="bootstrap" // You can use a built-in theme
        eventColor="#22c55e" // Use a green color for events
        eventTextColor="#ffffff" // White text color for events
        dayHeaderContent={arg => (
          <span className="text-green-500 font-semibold">{arg.text}</span>
        )}
        dayCellDidMount={(info) => {
          info.el.style.backgroundColor = 'rgba(34, 197, 94, 0.1)'; // Light green background for day cells
        }}
      />
    </div>
  );
}

export default Calendar;
