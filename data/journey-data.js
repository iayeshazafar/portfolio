/* ==========================================================
   JOURNEY DATA — Academic Journey Timeline
   ==========================================================
   Edit this file to update your journey.

   Top-level:
   - cgpa : your overall CGPA so far (string, e.g. "3.62")

   Each semester needs:
   - number      : semester number (1, 2, 3...)
   - status      : "completed" | "in-progress" | "upcoming"
   - gpa         : that semester's GPA as a string (e.g. "3.71"),
                    or null if not finished yet
   - description : 1-3 sentences about that semester
   - courses     : array of CORE/MAJOR course names only — skip
                    general education courses (English, Islamic
                    Studies, Pakistan Studies, etc.) to keep this
                    section focused and recruiter-friendly
   - skills      : array of short skill tags (shown as pills)
   - links       : optional array of { label, url } for work you
                    want to show (slides, assignments, projects).
                    Leave as an empty array [] if you have none yet.

   NOTE: Semesters 6, 7, and 8 below are DUMMY placeholders, and
   all GPA/CGPA values are DUMMY too — replace them with your
   real numbers.
   ========================================================== */

window.JOURNEY_DATA = {
  program: "BS Information Technology",
  cgpa: "3.20",

  semesters: [
    {
      number: 1,
      status: "completed",
      gpa: "2.69", // DUMMY — resume only gives overall CGPA (3.20), not per-semester GPA. Replace with real value.
      description: "Started the degree with foundational courses — got comfortable with digital logic and applied physics while adjusting to university life.",
      courses: [
        "Digital Logic Design (Lab)"
      ],
      skills: ["Digital Logic", "Boolean Algebra"],
      
    },
    {
      number: 2,
      status: "completed",
      gpa: "3.01", // DUMMY — replace with real value
      description: "Wrote my first real programs in Programming Fundamentals — this semester is where the actual \"computer science\" part of the degree began.",
      courses: [
        "Programming Fundamentals (Lab)",
        "Computer Networks (Lab)"
      ],
      skills: ["C Programming", "Networking Basics"],
      links: []
    },
    {
      number: 3,
      status: "completed",
      gpa: "3.55", // DUMMY — replace with real value
      description: "Things got serious — jumped into Object-Oriented Programming, database design, and low-level assembly language, plus a first real taste of software engineering practice.",
      courses: [
        "Computer Organization and Assembly Language (Lab)",
        "Object Oriented Programming (Lab)",
        "Software Engineering",
        "Database Systems (Lab)",
        "Calculus and Analytical Geometry"
      ],
      skills: ["Object-Oriented Programming", "SQL & Database Design", "Assembly Language", "Software Engineering Basics"],
      links: []
    },
    {
      number: 4,
      status: "completed",
      gpa: "3.45", // DUMMY — replace with real value
      description: "Data Structures and Operating Systems dominated this semester — learned how computers actually manage memory and processes, alongside a deep dive into information security.",
      courses: [
        "Data Structures (Lab)",
        "Operating Systems (Lab)",
        "Information Security",
        "Introduction to Management",
        "Probability and Statistics",
        "Multivariable Calculus"
      ],
      skills: ["Data Structures & Algorithms", "OS Concepts", "Information Security", "Statistics"],
  
    },
    {
      number: 5,
      status: "in-progress",
      gpa: null,
      description: "Currently exploring Artificial Intelligence and Web Technologies for the first time, alongside parallel and distributed computing — starting to see how large-scale systems are actually built.",
      courses: [
        "Artificial Intelligence (Lab)",
        "Analysis of Algorithms",
        "Parallel and Distributed Computing (Lab)",
        "Web Technologies (Lab)",
        "Linear Algebra",
        "Professional Practices"
      ],
      skills: ["AI Fundamentals", "Algorithm Analysis", "HTML / CSS / JS", "Distributed Systems Basics"],
     
    },
    {
      number: 6,
      status: "upcoming",
      gpa: null,
      description: "---",
      courses: [
        "Mobile Application Development (Lab)",
        "Cloud Computing",
        "Human Computer Interaction",
        "Compiler Construction"
      ],
      skills: [],
  
    },
    {
      number: 7,
      status: "upcoming",
      gpa: null,
      description: "---",
      courses: [
        "Final Year Project – I",
        "Machine Learning",
        "Elective I",
        "Elective II"
      ],
      skills: [],
    
    },
    {
      number: 8,
      status: "upcoming",
      gpa: null,
      description: "---",
      courses: [
        "Final Year Project – II",
        "Entrepreneurship",
        "Elective III"
      ],
      skills: [],
    }
  ]
};
