// Get the current time and update it
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Swipe functionality to redirect to index.html
let startX = 0;
let endX = 0;
const timeScreen = document.getElementById('timeScreen');

timeScreen.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].screenX;
});

timeScreen.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].screenX;
    if (startX - endX > 50) {
        // Redirect to the apps page (index.html)
        window.location.href = 'medofi.html';
    }
});

// Initial time update
updateTime();
setInterval(updateTime, 1000);

