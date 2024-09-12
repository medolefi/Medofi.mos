// Transition from logo screen to time screen after the animation
window.onload = function () {
    setTimeout(() => {
        document.getElementById('logoScreen').style.display = 'none';
        document.getElementById('timeScreen').style.display = 'flex';
    }, 3000);  // Adjust timing as needed (3000ms = 3 seconds)
}

// Get the current time and update it every second
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Initial time update
updateTime();
setInterval(updateTime, 1000);

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
        // Swipe left to right: Redirect to the apps page (index.html)
        window.location.href = 'medofi.html';
    }
});

