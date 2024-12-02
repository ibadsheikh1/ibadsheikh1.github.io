document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded: DOMContentLoaded triggered");

    const greetingElement = document.getElementById("greeting");
    console.log("Greeting Element: ", greetingElement);

    if (!greetingElement) {
        console.log("Element with ID 'greeting' not found.");
        return;
    }

    const currentHour = new Date().getHours(); // Get current hour
    let greetingMessage = "";

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good morning, welcome to Merchant Men's Wear!";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good afternoon, welcome to Merchant Men's Wear!";
    } else {
        greetingMessage = "Good evening, welcome to Merchant Men's Wear!";
    }

    console.log("Greeting Message: ", greetingMessage);

    greetingElement.textContent = greetingMessage;
});
