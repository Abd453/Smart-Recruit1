import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Header from '../components/common/Header';

const MOCK_EVENTS = [
  { title: 'Interview: Frontend Dev', start: '2026-03-10T10:00:00', end: '2026-03-10T11:00:00', color: '#22c55e' },
  { title: 'Interview: PM Role', start: '2026-03-11T14:00:00', end: '2026-03-11T15:00:00', color: '#3b82f6' },
  { title: 'Team Meeting', start: '2026-03-12T09:00:00', end: '2026-03-12T10:00:00', color: '#8b5cf6' },
  { title: 'Onboarding: Data Analyst', start: '2026-03-13T09:00:00', end: '2026-03-13T12:00:00', color: '#f59e0b' },
  { title: 'Interview: UX Designer', start: '2026-03-14T13:00:00', end: '2026-03-14T14:00:00', color: '#22c55e' },
  { title: 'Weekly Standup', start: '2026-03-10T09:00:00', end: '2026-03-10T09:30:00', color: '#6366f1' },
  { title: 'Offer Review Meeting', start: '2026-03-15T11:00:00', end: '2026-03-15T12:00:00', color: '#ec4899' },
];

function CalendarPage() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50/50">
      <Header title="Calendar" subtitle="Interview schedules and events" />

      <main className="max-w-7xl mx-auto py-8 px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-hidden">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              start: 'today prev,next',
              center: 'title',
              end: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            height="75vh"
            events={MOCK_EVENTS}
            eventColor="#22c55e"
            eventTextColor="#ffffff"
            dayHeaderContent={(arg) => (
              <span className="text-green-600 font-semibold text-xs uppercase tracking-wider">{arg.text}</span>
            )}
            eventDisplay="block"
            eventBorderColor="transparent"
            dayMaxEvents={3}
          />
        </div>
      </main>
    </div>
  );
}

export default CalendarPage;
