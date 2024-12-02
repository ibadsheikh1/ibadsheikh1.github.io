document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown-timer");
    const endDate = new Date("December 31, 2024 23:59:59").getTime();
    let timerInterval; // Declare the variable at the top to ensure it's defined

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = endDate - now;

        if (timeRemaining <= 0) {
            countdownElement.innerHTML = "Sale has ended! Stay tuned for upcoming events.";
            clearInterval(timerInterval); // Use it safely here
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000)) / 1000);

        countdownElement.innerHTML = `
            <strong>${days}</strong> days 
            <strong>${hours}</strong> hours 
            <strong>${minutes}</strong> minutes 
            <strong>${seconds}</strong> seconds
        `;
    }

    updateCountdown(); // Call it once to initialize the countdown
    timerInterval = setInterval(updateCountdown, 1000); // Assign the interval after function definition
});
