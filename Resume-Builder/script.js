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

    const skills = skillsInput.value.split(",");

    let output = "";

    skills.forEach(skill => {

        if(skill.trim() !== ""){

            output += `
                <span class="skill-tag">
                    ${skill.trim()}
                </span>
            `;
        }
    });

    document.getElementById("previewSkills").innerHTML = output;
});
const githubInput =
document.getElementById("githubInput");

const linkedinInput =
document.getElementById("linkedinInput");

const portfolioInput =
document.getElementById("portfolioInput");
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
const photoInput = document.getElementById("photoInput");

photoInput.addEventListener("change", () => {

    const file = photoInput.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){
            document.getElementById("previewPhoto").src =
            e.target.result;
        }

        reader.readAsDataURL(file);
    }
});
githubInput.addEventListener("input", () => {

    const github =
    document.getElementById("previewGithub");

    github.textContent =
    githubInput.value || "github.com/username";

    github.href =
    "https://" + githubInput.value;
});

linkedinInput.addEventListener("input", () => {
    const linkedin =
    document.getElementById("previewLinkedin");
    linkedin.textContent =
    linkedinInput.value || "linkedin.com/in/username";
    linkedin.href =
    "https://" + linkedinInput.value;
});
portfolioInput.addEventListener("input", () => {
    const portfolio =
    document.getElementById("previewPortfolio");
    portfolio.textContent =
    portfolioInput.value || "yourportfolio.com";
    portfolio.href =
    "https://" + portfolioInput.value;
});