import { useEffect, useState } from "react";
import "../css/eventCalendar.css";

function EventCalendar() {
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function monthNameToNum(monthname) {
    var month = months.indexOf(monthname);
    return month ? month : 0;
  }

  const monthNumToName = (monthNum) => {
    return months[monthNum];
  }

    const prevMonthButton = document.getElementById("prev-month");
    const nextMonthButton = document.getElementById("next-month");
    const monthYearElement = document.getElementById("month-month");
    const yearElement = document.getElementById("year");
    const calendarDaysElement = document.getElementById("calendar-days");

    const events = {
      "2024-08-15": "MSA Meeting at 5 PM",
      "2024-08-20": "Community Iftar at 7 PM",
      "2024-09-01": "Charity Fundraiser at 10 AM",
    };

    useEffect(() => {
      renderCalendar(currentDate);
    }, [currentDate])

    function renderCalendar(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0)
      const firstDayOfWeek = firstDayOfMonth.getDay();
      const totalDaysInMonth = lastDayOfMonth.getDate();

      const daysArray = []
      for (let noDay = 0; noDay < firstDayOfWeek; noDay++) {
        daysArray.push(" ")
      }

      for (let day = 1; day <= totalDaysInMonth; day++) {
        daysArray.push(day)
      }

      setDays(daysArray); 
    }

    const monthChange = document.querySelectorAll(".month");
    monthChange.forEach(month => {
      month.addEventListener('click', function() {
        setCurrentDate(prevDate => {
          const newMonth = new Date(prevDate);
          console.log(newMonth);
          newMonth.setMonth(monthNameToNum(month.textContent));
          console.log(`Month: ${month.textContent}`);
          console.log(`New Month: ${newMonth}`);
          return newMonth
        })
      })
    })

    const yearChange = document.querySelectorAll('.year');
    yearChange.forEach(year => {
      year.addEventListener('click', function() {
        setCurrentDate(prevDate => {
          const newYear = new Date(prevDate);
          newYear.setFullYear(year.textContent);
          return newYear;
        })
      })
    })

    const prevMonth = () => {
      setCurrentDate(prevDate => {
        const newDate = new Date(prevDate);
        newDate.setMonth(prevDate.getMonth() - 1);
        renderCalendar(newDate)
        return newDate;
      })
    }

    const nextMonth = () => {
      setCurrentDate(nextDate => {
        const newDate = new Date(nextDate);
        newDate.setMonth(nextDate.getMonth() + 1);
        return newDate;
      })
    }

  return (
    <>
      <div class="container">
        <div class="calendar-container">
          <div class="calendar-header">
            <button onClick={prevMonth} id="prev-month">Previous</button>
            <div class="dropdown-container">
              <div class="dropdown-1">
                <button class="dropbtn-1">
                  <h2 id="month-month">{monthNumToName(currentDate.getMonth())}</h2>
                </button>
                <div
                  id="dropdown-content-months"
                  class="dropdown-content-months"
                >
                  <h3 class="month">January</h3>
                  <h3 class="month">February</h3>
                  <h3 class="month">March</h3>
                  <h3 class="month">April</h3>
                  <h3 class="month">May</h3>
                  <h3 class="month">June</h3>
                  <h3 class="month">July</h3>
                  <h3 class="month">August</h3>
                  <h3 class="month">September</h3>
                  <h3 class="month">October</h3>
                  <h3 class="month">November</h3>
                  <h3 class="month">December</h3>
                </div>
              </div>
              <div class="dropdown-2">
                <button class="dropbtn-2">
                  <h2 id="year">{currentDate.getFullYear()}</h2>
                </button>
                <div id="dropdown-content-years" class="dropdown-content-years">
                  <h3 class="year">2020</h3>
                  <h3 class="year">2021</h3>
                  <h3 class="year">2022</h3>
                  <h3 class="year">2023</h3>
                  <h3 class="year">2024</h3>
                  <h3 class="year">2025</h3>
                  <h3 class="year">2026</h3>
                  <h3 class="year">2027</h3>
                  <h3 class="year">2028</h3>
                  <h3 class="year">2029</h3>
                  <h3 class="year">2030</h3>
                </div>
              </div>
            </div>
            <button onClick={nextMonth} id="next-month">Next</button>
          </div>
            <div class="calendar-grid">
              <div class="calendar-day-name">Sun</div>
              <div class="calendar-day-name">Mon</div>
              <div class="calendar-day-name">Tue</div>
              <div class="calendar-day-name">Wed</div>
              <div class="calendar-day-name">Thu</div>
              <div class="calendar-day-name">Fri</div>
              <div class="calendar-day-name">Sat</div>
            </div>
            <div className="calendar-days-div">
              {days.map((day, index) => (
                <div key={index} id="calendar-days" class="calendar-days">{day}</div>
              ))}
            </div>
        </div>
      </div>
    </>
  );
}

export default EventCalendar;
