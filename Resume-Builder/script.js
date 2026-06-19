const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const titleInput = document.getElementById("titleInput");
const skillsInput = document.getElementById("skillsInput");

nameInput.addEventListener("input", () => {
    document.getElementById("previewName").textContent =
        nameInput.value || "Your Name";

        saveData();
});

emailInput.addEventListener("input", () => {
    document.getElementById("previewEmail").textContent =
        emailInput.value || "yourmail@gmail.com";
    saveData();
});

phoneInput.addEventListener("input", () => {
    document.getElementById("previewPhone").textContent =
        phoneInput.value || "9876543210";
    saveData();
});

titleInput.addEventListener("input", () => {
    document.getElementById("previewTitle").textContent =
        titleInput.value || "Professional Title";
    saveData();
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
    saveData();
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
    saveData();
});

degreeInput.addEventListener("input", () => {
    document.getElementById("previewDegree").textContent =
    degreeInput.value || "Degree";
    saveData();
});

yearInput.addEventListener("input", () => {
    document.getElementById("previewYear").textContent =
    yearInput.value || "2027";
    saveData();
});

projectNameInput.addEventListener("input", () => {
    document.getElementById("previewProjectName").textContent =
    projectNameInput.value || "Project Name";
    saveData();
});

projectDescInput.addEventListener("input", () => {
    document.getElementById("previewProjectDesc").textContent =
    projectDescInput.value || "Project Description";
    saveData();
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
    saveData();
});
githubInput.addEventListener("input", () => {

    const github =
    document.getElementById("previewGithub");

    github.textContent =
    githubInput.value || "github.com/username";

    github.href =
    "https://" + githubInput.value;
    saveData();
});

linkedinInput.addEventListener("input", () => {
    const linkedin =
    document.getElementById("previewLinkedin");
    linkedin.textContent =
    linkedinInput.value || "linkedin.com/in/username";
    linkedin.href =
    "https://" + linkedinInput.value;
    saveData();
});
portfolioInput.addEventListener("input", () => {
    const portfolio =
    document.getElementById("previewPortfolio");
    portfolio.textContent =
    portfolioInput.value || "yourportfolio.com";
    portfolio.href =
    "https://" + portfolioInput.value;
    saveData();
});
const downloadBtn =
document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {

    const resume =
    document.getElementById("resume");

    const options = {

        margin: 0.5,

        filename: "Resume.pdf",

        image: {
            type: "jpeg",
            quality: 1
        },

        html2canvas: {
            scale: 2
        },

        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait"
        }
    };

    html2pdf()
        .set(options)
        .from(resume)
        .save();
});
function saveData() {
    console.log("Saving...");
    
     const data = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        title: titleInput.value,
        skills: skillsInput.value,

        college: collegeInput.value,
        degree: degreeInput.value,
        year: yearInput.value,

        projectName: projectNameInput.value,
        projectDesc: projectDescInput.value,

        github: githubInput.value,
        linkedin: linkedinInput.value,
        portfolio: portfolioInput.value
    };

    localStorage.setItem(
        "resumeData",
        JSON.stringify(data)
    );
}
window.onload = () => {

    const savedData = JSON.parse(
        localStorage.getItem("resumeData")
    );

    if(savedData){

        nameInput.value = savedData.name || "";
        emailInput.value = savedData.email || "";
        phoneInput.value = savedData.phone || "";
        titleInput.value = savedData.title || "";
        skillsInput.value = savedData.skills || "";

        collegeInput.value = savedData.college || "";
        degreeInput.value = savedData.degree || "";
        yearInput.value = savedData.year || "";

        projectNameInput.value =
            savedData.projectName || "";

        projectDescInput.value =
            savedData.projectDesc || "";

        githubInput.value =
            savedData.github || "";

        linkedinInput.value =
            savedData.linkedin || "";

        portfolioInput.value =
            savedData.portfolio || "";

        // Refresh preview
        nameInput.dispatchEvent(new Event("input"));
        emailInput.dispatchEvent(new Event("input"));
        phoneInput.dispatchEvent(new Event("input"));
        titleInput.dispatchEvent(new Event("input"));
        skillsInput.dispatchEvent(new Event("input"));
        collegeInput.dispatchEvent(new Event("input"));
        degreeInput.dispatchEvent(new Event("input"));
        yearInput.dispatchEvent(new Event("input"));
        projectNameInput.dispatchEvent(new Event("input"));
        projectDescInput.dispatchEvent(new Event("input"));
        githubInput.dispatchEvent(new Event("input"));
        linkedinInput.dispatchEvent(new Event("input"));
        portfolioInput.dispatchEvent(new Event("input"));
    }
};