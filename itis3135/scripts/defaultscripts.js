alert("Hey, the script is running!");
function displayDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById("dateDisplay").textContent = `Today is ${timeString} on ${dateString}`;
}
window.onload = displayDateTime; 

function displayGreeting() {
    const userName = document.getElementById("userName").value;
    const userMood = document.getElementById("userMood").value;
    const companyName = "Iguana Escapes";
    document.getElementById("greetingMessage").textContent = 
        `The ${companyName} welcomes you, ${userName}! We're glad you are doing ${userMood}!`;
}

function showPolygon() {
    let number = Math.abs(parseFloat(document.getElementById("favoriteNumber").value));
    number = Math.round(number);

    const polygons = {
        2: "Digon",
        3: "Trigon (Triangle)",
        4: "Tetragon (Quadrilateral)",
        5: "Pentagon",
        6: "Hexagon",
        7: "Heptagon",
        8: "Octagon",
        9: "Nonagon",
        10: "Decagon"
    };

    if (polygons[number]) {
        alert(polygons[number]);
    } else {
        alert("Polygon with that number of sides does not exist in our list.");
    }
}

function showAnimalFact() {
    alert("Did you know? Iguanas can hold their breath for up to 30 minutes!");
}

function calculateRandom() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    alert(`Random calculation: ${num1} + ${num2} = ${num1 + num2}`);
}

function generateCompanyMotto() {
    alert("Iguana Escapes: Adventure at every turn!");
}

function displayInspiration() {
    alert("Believe in yourself as fiercely as an iguana basking in the sun.");
}

function showFavoriteSpot() {
    alert("Favorite spot: The tranquil beaches of North Carolina.");
}
