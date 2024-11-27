// Get DOM elements
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const timeDisplay = document.getElementById('time-display');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

let countdownInterval; // To store the interval ID
let remainingTime; // To store the remaining time in seconds

// Function to start the countdown
function startCountdown() {
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

    // Convert the time to total seconds
    remainingTime = minutes * 60 + seconds;

    // Ensure we don't start a new countdown if it's already running
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(updateTime, 1000); // Update every second
}

// Function to update the time display
function updateTime() {
    if (remainingTime <= 0) {
        clearInterval(countdownInterval); // Stop the countdown when it reaches 00:00
        timeDisplay.textContent = '00:00';
    } else {
        remainingTime--;
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timeDisplay.textContent = formatTime(minutes, seconds);
    }
}

// Function to format time as MM:SS
function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to pause the countdown
function pauseCountdown() {
    clearInterval(countdownInterval);
}

// Function to reset the countdown
function resetCountdown() {
    clearInterval(countdownInterval);
    remainingTime = 0;
    timeDisplay.textContent = '00:00';
    minutesInput.value = '';
    secondsInput.value = '';
}

// Event Listeners
startButton.addEventListener('click', startCountdown);
pauseButton.addEventListener('click', pauseCountdown);
resetButton.addEventListener('click', resetCountdown);
