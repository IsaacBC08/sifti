const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const daysInWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let currentDate = new Date();

function loadCalendar() {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const calendarBody = document.getElementById("calendar-body");

    document.getElementById("month-year").innerText = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    calendarBody.innerHTML = "";

    let date = firstDay;
    date.setDate(date.getDate() - ((date.getDay() + 6) % 7)); // Adjust start date to Monday

    while (date <= lastDay || date.getDay() !== 1) {
        const row = document.createElement("tr");
        for (let i = 0; i < 7; i++) {
            const cell = document.createElement("td");
            if (date.getMonth() === currentDate.getMonth()) {
                cell.innerText = date.getDate();
            }
            row.appendChild(cell);
            date.setDate(date.getDate() + 1);
        }
        calendarBody.appendChild(row);
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    loadCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    loadCalendar();
}

document.addEventListener("DOMContentLoaded", loadCalendar);
