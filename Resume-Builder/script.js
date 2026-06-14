const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const titleInput = document.getElementById("titleInput");
const skillsInput = document.getElementById("skillsInput");

nameInput.addEventListener("input", () => {
    document.getElementById("previewName").textContent =
        nameInput.value || "Your Name";
});

emailInput.addEventListener("input", () => {
    document.getElementById("previewEmail").textContent =
        emailInput.value || "yourmail@gmail.com";
});

phoneInput.addEventListener("input", () => {
    document.getElementById("previewPhone").textContent =
        phoneInput.value || "9876543210";
});

titleInput.addEventListener("input", () => {
    document.getElementById("previewTitle").textContent =
        titleInput.value || "Professional Title";
});

skillsInput.addEventListener("input", () => {
    document.getElementById("previewSkills").textContent =
        skillsInput.value || "HTML, CSS, JavaScript";
});
const collegeInput = document.getElementById("collegeInput");
const degreeInput = document.getElementById("degreeInput");
const yearInput = document.getElementById("yearInput");

const projectNameInput =
document.getElementById("projectNameInput");

const projectDescInput =
document.getElementById("projectDescInput");
collegeInput.addEventListener("input", () => {
    document.getElementById("previewCollege").textContent =
    collegeInput.value || "College Name";
});

degreeInput.addEventListener("input", () => {
    document.getElementById("previewDegree").textContent =
    degreeInput.value || "Degree";
});

yearInput.addEventListener("input", () => {
    document.getElementById("previewYear").textContent =
    yearInput.value || "2027";
});

projectNameInput.addEventListener("input", () => {
    document.getElementById("previewProjectName").textContent =
    projectNameInput.value || "Project Name";
});

projectDescInput.addEventListener("input", () => {
    document.getElementById("previewProjectDesc").textContent =
    projectDescInput.value || "Project Description";
});