/* ==========================================================
   CHATBOT DATA — Ayesha's Portfolio Assistant
   ==========================================================
   Edit the fields below to update what the chatbot knows and
   says. To add a new Q&A: copy one object from the "qa" array,
   paste it before the closing "]", and edit keywords/answer.

   - keywords : words the visitor might type; more keywords =
                better matching. Keep them lowercase.
   - question : shown as the suggested-question chip label
   - answer   : what the bot replies with (plain text, short
                paragraphs work best; you can use \n for a
                line break)
   ========================================================== */

window.CHATBOT_DATA = {
  botName: "Ayesha's Assistant",
  greeting: "Hi! I can answer quick questions about Ayesha's skills, experience, and projects. What would you like to know?",

  suggestedQuestions: [
    "What are her core skills?",
    "Is she available for hire?",
    "Tell me about her experience",
    "Show me her projects",
    "How can I contact her?"
  ],

  fallback: "I don't have a specific answer for that yet — but you can reach Ayesha directly at iayeshaazafar@gmail.com, or check the Contact section below for more ways to get in touch.",

  qa: [
    {
      keywords: ["skill", "skills", "tech", "technology", "stack", "know", "expert", "good at", "language", "framework"],
      question: "What are her core skills?",
      answer: "Ayesha is skilled in Python, JavaScript (ES6), Java, C/C++, PHP, and C#. On the web side she works with React, Node.js, Express.js, and Django. For databases she's used MySQL, PostgreSQL, MongoDB, and SQL Server, and she's deployed and managed applications on AWS, Heroku, DigitalOcean, and Azure. She also works with Git, Bitbucket, and Jira."
    },
    {
      keywords: ["available", "availability", "hire", "hiring", "freelance", "open to work", "job", "opportunity", "start", "internship"],
      question: "Is she available for hire?",
      answer: "Ayesha is currently pursuing her BS in Information Technology and is open to internships, freelance work, and entry-level opportunities. The best way to check current availability is to reach out directly via the Contact form or email."
    },
    {
      keywords: ["experience", "years", "background", "career", "worked", "history"],
      question: "Tell me about her experience",
      answer: "Ayesha is a BS Information Technology student who has built several hands-on projects. She's currently in her 5th semester, maintaining a CGPA of 3.20. See the Projects and Journey sections for details."
    },
    {
      keywords: ["project", "projects", "work", "portfolio", "built", "made", "examples"],
      question: "Show me her projects",
      answer: "Ayesha has built a Result Management System (C++ OOP desktop app), and currently working on more projects. Scroll down to the Projects section to see details and tech stacks for each."
    },
    {
      keywords: ["contact", "reach", "email", "phone", "call", "message", "get in touch", "linkedin"],
      question: "How can I contact her?",
      answer: "You can email Ayesha at iayeshazafar@gmail.com, call +92 300 1234567, or use the contact form at the bottom of this page. She's also on LinkedIn and GitHub — links are in the Contact section."
    },
    {
      keywords: ["resume", "cv", "download"],
      question: "Can I get her resume?",
      answer: "Yes — there's a Download Resume button in the hero section at the top of the page."
    },
    {
      keywords: ["location", "based", "where", "live", "city", "country", "remote"],
      question: "Where is she based?",
      answer: "Ayesha is based in Kasur, Punjab, Pakistan, and is open to remote work as well as local opportunities."
    },
    {
      keywords: ["education", "degree", "study", "studied", "university", "college", "cgpa", "gpa"],
      question: "What's her educational background?",
      answer: "Ayesha is pursuing a BS in Information Technology at Government Islamia Graduate College, Kasur (expected 2028), currently holding a CGPA of 3.20. Before that, she completed ICS at Government Degree College For Women, Kasur and Matric at District Public School, Kasur. Check out the Journey page for a full semester-by-semester breakdown."
    },
    {
      keywords: ["blog", "articles", "write", "writing"],
      question: "Does she write articles?",
      answer: "Yes, Ayesha writes about web development and things she's learning. You can check out the Blog section from the navigation tab above."
    },
    {
      keywords: ["journey", "semester", "courses", "coursework", "academic"],
      question: "Can I see her academic journey?",
      answer: "Yes — the Journey page has a full semester-by-semester breakdown of her coursework, GPA, and skills picked up along the way. You can find it in the navigation bar above."
    },
    {
      keywords: ["why", "hire her", "strength", "strengths", "best"],
      question: "Why should I hire her?",
      answer: "Ayesha combines a strong academic foundation (3.20 CGPA in a Computer Science-focused IT degree) with real hands-on project experience across multiple languages and stacks — from low-level C++ to full-stack React and Firebase apps. She's comfortable picking up new tools quickly and enjoys turning a concept into a working product."
    }
  ]
};
