function addCourse() {
    const container = document.getElementById("courses-container");
    const courseDiv = document.createElement("div");
    courseDiv.className = "course-entry";

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "course";
    newInput.placeholder = "Enter a course";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.onclick = () => container.removeChild(courseDiv);

    courseDiv.appendChild(newInput);
    courseDiv.appendChild(deleteButton);
    container.appendChild(courseDiv);
}

function generateIntroPage() {
    const formData = new FormData(document.getElementById("intro-form"));
    const introDiv = document.createElement("div");

    // Retrieve dynamically added courses
    const courses = Array.from(
        document.querySelectorAll('input[name="course"]')
    ).map((input) => `<li>${input.value}</li>`).join("");

    // Handle uploaded image (basic example)
    const fileInput = document.querySelector('input[type="file"]');
    let imageSrc = "";
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        imageSrc = URL.createObjectURL(file); // Generate a URL for the image file
    }

    introDiv.innerHTML = `
    <h2>${formData.get("name")}'s Introduction</h2>
    <h3>${formData.get("mascot")} - My Mascot</h3>
    <img src="${imageSrc}" alt="Uploaded Image" id="uploaded-image" style="max-width: 300px;">
    <p><strong>Image Caption:</strong> ${formData.get("image-caption")}</p>
    <p><strong>Personal Background:</strong> ${formData.get("personal-background")}</p>
    <p><strong>Professional Background:</strong> ${formData.get("professional-background")}</p>
    <p><strong>Academic Background:</strong> ${formData.get("academic-background")}</p>
    <p><strong>Web Development Background:</strong> ${formData.get("web-background")}</p>
    <p><strong>Primary Computer Platform:</strong> ${formData.get("platform")}</p>
    <p><strong>Funny Thing:</strong> ${formData.get("funny-thing")}</p>
    <p><strong>Anything Else:</strong> ${formData.get("anything-else")}</p>
    <p><strong>Courses:</strong></p>
    <ul>${courses}</ul>
    <button onclick="location.reload()">Reset</button>
    `;

    document.querySelector("main").innerHTML = "";
    document.querySelector("main").appendChild(introDiv);
}

function addCourseButtonListener() {
    const addCourseButton = document.getElementById("add-course-button");
    addCourseButton.addEventListener("click", addCourse);
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("intro-form");
    const coursesContainer = document.getElementById("courses-container");

    // Submit event listener
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!form.checkValidity()) {
            alert("Please fill out all required fields.");
            return;
        }
        generateIntroPage();
    });

    // Reset event listener
    form.addEventListener("reset", () => {
        coursesContainer.innerHTML = '<button type="button" id="add-course-button">Add Course</button>';
        addCourseButtonListener();
    });

    // Initialize "Add Course" button listener
    addCourseButtonListener();
});
