import '../css/eventCalendar.css';

function EventCalendar() {
  return (
    <>
      <div class="container">
        <div class="calendar-container">
          <div class="calendar-header">
            <button id="prev-month">Previous</button>
            <div class="dropdown-container">
              <div class="dropdown-1">
                <button class="dropbtn-1">
                  <h2 id="month-month"></h2>
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
                  <h2 id="year"></h2>
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
            <button id="next-month">Next</button>
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
          <div id="calendar-days" class="calendar-days"></div>
        </div>
      </div>
    </>
  );
}

export default EventCalendar;