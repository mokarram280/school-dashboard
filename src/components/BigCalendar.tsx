"use client";

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react';
import { calendarEvents } from '@/lib/data';

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  }
  return (
    <Calendar
    localizer={localizer}
    events={calendarEvents}
    views={['work_week','day']}
    view={view}
    onView={handleOnChangeView}
    startAccessor='start'
    endAccessor='end'
    style={{height: '98%'}}
    min={new Date(26, 1, 0, 8, 0, 0)}
    max={new Date(26, 1, 0, 17, 0, 0)}
     />
  );
};
export default BigCalendar;