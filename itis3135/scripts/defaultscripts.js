document.addEventListener("DOMContentLoaded", function() {
    // Display Date and Time
    const dateDisplay = document.getElementById("dateDisplay");
    const today = new Date();
    dateDisplay.textContent = `Today is ${today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} on ${today.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}.`;

    // Function Definitions
    function displayGreeting() {
        const userName = document.getElementById("userName").value;
        const userMood = document.getElementById("userMood").value;
        const greetingMessage = document.getElementById("greetingMessage");
        const companyName = "Iguana Escapes";
        
        greetingMessage.textContent = `The ${companyName} welcomes you, ${userName}! We're glad you are doing ${userMood}.`;
    }

    function showPolygon() {
        const favoriteNumber = Math.round(Math.abs(Number(document.getElementById("favoriteNumber").value)));
        const polygons = ["monogon", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon", "hendecagon"];
        const polygonName = favoriteNumber >= 0 && favoriteNumber <= 10 ? polygons[favoriteNumber] : "unknown polygon";
        alert(`The polygon with ${favoriteNumber} sides is called a ${polygonName}.`);
    }

    function showAnimalFact() {
        alert("Did you know? Iguanas can hold their breath for up to 30 minutes!");
    }

    function calculateRandom() {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        alert(`Random fact: The iguana population has grown by ${randomValue}% in some regions!`);
    }

    function generateCompanyMotto() {
        alert("Iguana Escapes: Where every journey is a green getaway!");
    }

    function displayInspiration() {
        alert("Fun fact: Iguanas are symbols of patience and resilience. Be like an iguana today!");
    }

    function showFavoriteSpot() {
        alert("One of our favorite spots is the Iguana Rock in Ecuador - a true escape into nature!");
    }

    // Event Listeners
    document.getElementById("submitGreeting").addEventListener("click", displayGreeting);
    document.getElementById("checkPolygon").addEventListener("click", showPolygon);
    document.getElementById("showAnimalFact").addEventListener("click", showAnimalFact);
    document.getElementById("calculateRandom").addEventListener("click", calculateRandom);
    document.getElementById("generateMotto").addEventListener("click", generateCompanyMotto);
    document.getElementById("displayInspiration").addEventListener("click", displayInspiration);
    document.getElementById("showFavoriteSpot").addEventListener("click", showFavoriteSpot);
});
