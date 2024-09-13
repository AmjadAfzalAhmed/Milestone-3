"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createResume() {
    const fullName = document.getElementById('fullName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const instituteName = document.getElementById('instituteName').value;
    const degree = document.getElementById('degree').value;
    const passingYear = document.getElementById('passingYear').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const imageInput = document.getElementById('imageUpload');
    let imageSrc = '';
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                imageSrc = e.target.result;
                displayResume(imageSrc, fullName, jobTitle, email, phone, instituteName, degree, passingYear, experience, skills);
            }
        };
        reader.readAsDataURL(imageInput.files[0]);
    }
    else {
        displayResume(imageSrc, fullName, jobTitle, email, phone, instituteName, degree, passingYear, experience, skills);
    }
}
function displayResume(imageSrc, fullName, jobTitle, email, phone, instituteName, degree, passingYear, experience, skills) {
    let resumeContent = '';
    if (imageSrc) {
        resumeContent += `<img src="${imageSrc}" alt="Profile Picture">`;
    }
    resumeContent += `
    <div style="background-color: #e8c918; padding: 10px; margin-bottom: 10px; border-radius:5px;">
        <h3 style="font-size: 24px; color: #555;text-align:center; margin-bottom: 0px;">${fullName}</h3>
        <p style="font-weight: bold; color: #1995ad;text-align:center;"><strong>Job Title:</strong> ${jobTitle}</p>
        <p style="color: #fff;"><strong>Email:</strong> ${email}</p>
        <p style="color: #fff;"><strong>Phone:</strong> ${phone}</p>
    </div>

    <div style="background-color: #e8c918; padding: 10px; margin-bottom: 10px; border-radius:5px;">
        <h4 style="font-size: 20px; color: #555;">Education</h4>
        <p style="color: #fff;"><strong>School Name:</strong> ${instituteName}</p>
        <p style="color: #fff;"><strong>Degree:</strong> ${degree}</p>
        <p style="color: #fff;"><strong>Graduation Year:</strong> ${passingYear}</p>
    </div>

    <div style="background-color: #e8c918; padding: 10px; margin-bottom: 10px; border-radius:5px;">
        <h4 style="font-size: 20px; color: #555;">Experience</h4>
        <p style="color: #fff;">${experience}</p>
    </div>

    <div style="background-color: #e8c918; padding: 10px; margin-bottom: 10px; border-radius:5px;">
        <h4 style="font-size: 20px; color: #555;">Skills</h4>
        <p style="color: #fff;">${skills.split(',').map(skill => skill.trim()).join(', ')}</p>
    </div>
`;
    const resumeSection = document.getElementById('resumeContent');
    if (resumeSection) {
        resumeSection.innerHTML = resumeContent;
    }
}
