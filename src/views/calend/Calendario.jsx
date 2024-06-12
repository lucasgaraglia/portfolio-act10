import React, { useState, useEffect } from 'react';
import './css/calendario.css';

const Calendario = () => {
    const holidays = ["01-01", "02-20", "03-24", "04-02", "05-01", "05-25", "06-20", "07-09", "12-08", "12-25"]; // feriados 
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const fullDayNames = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const dayInitials = ["L", "Ma", "Mi", "J", "V", "S", "D"];
    const today = new Date();

    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [calendarDays, setCalendarDays] = useState([]);

    useEffect(() => {
        generateCalendar(currentMonth, currentYear);
    }, [currentMonth, currentYear]);

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const generateCalendar = (month, year) => {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = getDaysInMonth(month, year);
        const startingPoint = firstDay === 0 ? 6 : firstDay - 1;

        const daysArray = [];

        for (let i = 0; i < startingPoint; i++) {
            daysArray.push({ day: null });
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateString = `${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            daysArray.push({
                day,
                isHoliday: holidays.includes(dateString),
                isToday: day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
            });
        }

        setCalendarDays(daysArray);
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
            <div className="calendar">
                <div className="calendar__info">
                    <div className="calendar__prev" id="prev-month" onClick={prevMonth}>◀</div>
                    <div className="calendar__month" id="month">{monthNames[currentMonth]}</div>
                    <div className="calendar__year" id="year">{currentYear}</div>
                    <div className="calendar__next" id="next-month" onClick={nextMonth}>▶</div>
                </div>
                <div className="calendar-week">
                    {fullDayNames.map((dayName, index) => (
                        <div key={index} className="calendar__day calendar__item" data-initial={dayInitials[index]}>
                            <span>{dayName}</span>
                        </div>
                    ))}
                </div>
                <div className="calendar-days">
                    {calendarDays.map((dayObj, index) => (
                        <div
                            key={index}
                            className={`calendar__item ${dayObj.isHoliday ? 'calendar__day--holiday' : ''} ${dayObj.isToday ? 'calendar__day--today' : ''}`}
                        >
                            {dayObj.day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendario;
