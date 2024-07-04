// Script to update current time in UTC and day of the week
function updateDateTime() {
    const date = new Date();
    
    // Get UTC date and time
    const utcDateString = date.toISOString().slice(0, 19).replace('T', ' ');

    // Get day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getUTCDay()];

    const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    if (currentTimeUTCElement) {
        currentTimeUTCElement.textContent = utcDateString;
    }

    if (currentDayElement) {
        currentDayElement.textContent = dayOfWeek;
    }
}

// Update date-time immediately on page load
updateDateTime();

// Update date-time every minute to keep it current
setInterval(updateDateTime, 60000);
