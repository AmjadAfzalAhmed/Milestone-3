function createResume(): void {

    const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const instituteName = (document.getElementById('instituteName') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const passingYear = (document.getElementById('passingYear') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

   
    const imageInput = document.getElementById('imageUpload') as HTMLInputElement;
    let imageSrc = '';

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e: ProgressEvent<FileReader>) {
            if (e.target) {
                imageSrc = e.target.result as string;
                displayResume(imageSrc, fullName, jobTitle, email, phone, instituteName, degree, passingYear, experience, skills);
            }
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
   
        displayResume(imageSrc, fullName, jobTitle, email, phone, instituteName, degree, passingYear, experience, skills);
    }
}

function displayResume(
    imageSrc: string,
    fullName: string,
    jobTitle: string,
    email: string,
    phone: string,
    instituteName: string,
    degree: string,
    passingYear: string,
    experience: string,
    skills: string
): void {
    
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
