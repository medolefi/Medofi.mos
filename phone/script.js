// Update time and date every second
function updateTimeAndDate() {
    const timeElem = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    timeElem.textContent = `${formattedHours}:${formattedMinutes} ${ampm}`;
}

setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();

// Function to open apps or navigate within the phone interface
function openApp(url) {
    if (url.endsWith('.html')) {
        // For internal apps, navigate within the phone UI
        window.location.href = url;
    } else {
        // For external apps/websites, open in a new tab
        window.open(url, '_blank');
    }
}

// Navigation function (placeholder for additional functionality)
function navigate(section) {
    alert(`Navigating to ${section}...`);
    // Implement navigation logic here
}
// Get the current time and update it
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}

// Swipe functionality to go to the app screen
let startX = 0;
let endX = 0;
const timeScreen = document.getElementById('timeScreen');
const appScreen = document.getElementById('index.html');

timeScreen.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].screenX;
});

timeScreen.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].screenX;
    if (startX - endX > 50) {
        timeScreen.style.transform = 'translateX(-100%)';
        appScreen.style.transform = 'translateX(0)';
    }
});

// Initial time update
updateTime();
setInterval(updateTime, 1000);

