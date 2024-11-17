function addCourse() {
    const container = document.getElementById("coursesContainer");
    const courseDiv = document.createElement("div");
    courseDiv.className = "courseEntry";

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
    const formData = new FormData(document.getElementById("introForm"));
    const introDiv = document.createElement("div");

    introDiv.innerHTML = `
    <h2>${formData.get("name")}'s Introduction</h2>
    <h3>${formData.get("mascot")} - My Mascot</h3>
    <img src="" alt="Uploaded Image" id="uploadedImage">
    <p><strong>Image Caption:</strong> ${formData.get("imageCaption")}</p>
    <p><strong>Personal Background:</strong> ${formData.get("personalBackground")}</p>
    <p><strong>Professional Background:</strong> ${formData.get("professionalBackground")}</p>
    <p><strong>Academic Background:</strong> ${formData.get("academicBackground")}</p>
    <p><strong>Web Development Background:</strong> ${formData.get("webBackground")}</p>
    <p><strong>Primary Computer Platform:</strong> ${formData.get("platform")}</p>
    <p><strong>Funny Thing:</strong> ${formData.get("funnyThing")}</p>
    <p><strong>Anything Else:</strong> ${formData.get("anythingElse")}</p>
    <p><strong>Courses:</strong></p>
    <ul>${courses}</ul>
    <button onclick="location.reload()">Reset</button>
    `;

    document.querySelector("main").innerHTML = "";
    document.querySelector("main").appendChild(introDiv);
}
function addCourseButtonListener() {
    const addCourseButton = document.getElementById("addCourseButton");
    addCourseButton.addEventListener("click", addCourse);
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const coursesContainer = document.getElementById("coursesContainer");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!form.checkValidity()) {
            alert("Please fill out all required fields.");
            return;
        }
        generateIntroPage();
    });

    form.addEventListener("reset", () => {
        coursesContainer.innerHTML = '<button type="button" id="addCourseButton">Add Course</button>';
        addCourseButtonListener();
    });

    
    addCourseButtonListener();
});

