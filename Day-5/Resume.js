var resume = {
    my_Name: "Madan Raj P",
    Email: "madanraj0519@gmail.com",
    Date_of_birth: "019.05.2001",
    Gender: "Male",
    Nationality: "Indian",
    Marital_Status: "Single",
    Languages_known: ["English", "Tamil"],
    Age: 22,
    Marks: { "B.E": "CGPA 7.55", "Higher secondary": "70%", SSLC: "91%" },
    Qualification: "B.E ComputerScience",
    Years_of_Experience: 0,
    Software_proficiency: [
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "HTML",
      "css",
      "Git, GitHub",
    ],
    Key_strength: ["short leaning curve", "creative", "apdaptive"],
    Personal_hobbies: ["Gaming", "Binge watching"],
  };
  
  var resume_JSON_Format = JSON.stringify(resume);
  console.log(resume_JSON_Format);