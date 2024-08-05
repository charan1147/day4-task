let resume = {
    personalinfo: [{
      name: `charan chandu`,
      address: `room no- 134, 13th avenue`,
      phone: `+91 7779995551`,
      email: `charanc1147@gmail.com`,
      linkedin: `https://www.linkedin.com/in/charanchandu`,
    }],
    education: [
      {
        degree: `B.tech in Mechanical engineering`,
        institution: `anurag group of institutions`,
        graduationYear: 2020,
        gpa: 6.78
      },
    ],
    experience: [
      {
        jobTitle: `Intern`,
        company: `Ordinace Factory`,
        location: `Hyderbad`,
        startDate: `3-2020`,
        endDate: `7-2020`,
        responsibilities: [
          `Design engineers research and develop designs for projects in a range of sectors, from construction to software, medical equipment and manufacturing`
        ]
      }
    ],
    skills: [
      `JavaScript`,
      `html`,
      `css`,
      `Node.js`,
      `SQL`,
      `sap mm`
    ],
    }
    for(let i=0;i<resume.education.length;i++){
        console.log(resume.education[i]);
      }
     
      for(let skills in resume.skills){
        console.log(resume.skills[skills]);
        
      }
    
    for(let personalinfo of resume.personalinfo){
      console.log(personalinfo);
    }
    
    resume.experience.forEach(element => {console.log(element);
     
    });