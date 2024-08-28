import React, { useState, useEffect } from 'react';
import './css/calendario.css';

const holidays = ["01-01", "02-20", "03-24", "04-02", "05-01", "05-25", "06-20", "07-09", "12-08", "12-25"]; // feriados 
const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const today = new Date();

const Calendario = () => {
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [days, setDays] = useState([]);

  useEffect(() => {
    generateCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(month, year);

    // Adjust for starting on Monday
    const startingPoint = firstDay === 0 ? 6 : firstDay - 1;

    const newDays = [];

    for (let i = 0; i < startingPoint; i++) {
      newDays.push({ day: null });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      newDays.push({
        day,
        isHoliday: holidays.includes(dateString),
        isToday: day === today.getDate() && month === today.getMonth() && year === today.getFullYear(),
      });
    }

    setDays(newDays);
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className='calendar_container'>
      <h1 className="title">Calendario - Lucas Garaglia</h1>
      <div className="calendar">
        <div className="calendar__info">
          <div className="calendar__prev" id="prev-month" onClick={prevMonth}>◀</div>
          <div className="calendar__month" id="month">{monthNames[currentMonth]}</div>
          <div className="calendar__year" id="year">{currentYear}</div>
          <div className="calendar__next" id="next-month" onClick={nextMonth}>▶</div>
        </div>
        <div className="calendar-week">
          <div className="calendar__day calendar__item">Lunes</div>
          <div className="calendar__day calendar__item">Martes</div>
          <div className="calendar__day calendar__item">Miércoles</div>
          <div className="calendar__day calendar__item">Jueves</div>
          <div className="calendar__day calendar__item">Viernes</div>
          <div className="calendar__day calendar__item">Sábado</div>
          <div className="calendar__day calendar__item">Domingo</div>
        </div>
        <div className="calendar-days">
          {days.map((day, index) => (
            <div
              key={index}
              className={`calendar__item ${day.isToday ? 'calendar__day--today' : ''} ${day.isHoliday ? 'calendar__day--holiday' : ''}`}
            >
              {day.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendario;