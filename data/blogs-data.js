/* ==========================================================
   BLOG POSTS DATA
   ==========================================================
   To add a new blog post: copy one of the objects below
   (from the opening { to closing },) and paste it at the
   TOP of the array, then edit the values.

   Fields:
   - slug     : unique id for the URL, use dashes, no spaces
   - title    : post title
   - excerpt  : 1-2 line summary shown on the blog list page
   - date     : e.g. "August 24, 2026"
   - readTime : e.g. "5 min read"
   - tags     : array of short topic labels
   - content  : the full post body. Write each paragraph
                wrapped in <p>...</p>. You can also use
                <h3>...</h3> for subheadings inside a post.
   ========================================================== */

window.BLOG_POSTS = [
  {
    slug: "my-first-oop-project",
    title: " My First OOP Project",
    excerpt: "Writing real code finally made OOP make sense.",
    date: "October 12, 2026",
    readTime: "6 min read",
    tags: ["C++", "Object-Oriented Programming", "File Handling"],
    content: `
      <p>A simple and efficient Result Management System developed to manage student records and display results easily.This project was developed as a college assignment to practically implement the core concepts of object oriented programming and result management logic.</p>
      
      <h3>1. Better understanding to do the code</h3>
      <p>Cleaning up messy early logic into structured OOP classes turned raw working code into elegant, production-grade software.</p>
      
      <h3>2. Obtain clearity on the concept of File handling </h3>
      <p>Tied object data directly to local files so data persists even after closing the program.</p>
      
      <h3>3. Plan for user error before it happens</h3>
      <p>Users only notice error handling when it’s missing. Clear error messages and input validation guide the user without interrupting their workflow.</p>
      
      <h2> Overall Experience</h2>
      <p>Designing the interface and adding color to the console output was one of the most rewarding parts of this build. It showed me how much design and formatting matter—even in a text-based C++ console app!</p>
    `
  },
  {
    slug: "i-started-learning-python",
    title: "How I Started Learning Python",
    excerpt: "Starting Python opened up a clear path toward full-stack development and software engineering.",
    date: "june 3, 2026",
    readTime: "8 min read",
    tags: ["Python", "core-concepts", "Learning"],
    content: `
      <p>It all started when a friend recommended Dr. Mohammad Nauman's channel to learn Python. Watching his lectures was one of the best choices I made. His practical approach completely clarified the complex concepts and sparked a momentum that kept me going every single day.</p>
      
      <h3>1. Solid foundation in core concepts</h3>
      <p>Mastered expressions, variables, functions, loops, lists, tuples, and dictionaries to build strong programming logic.</p>
      
      <h3>2. Real environment setup</h3>
      <p>Configured VS Code for solving the assignments and Hands-on practice with Jupyter Notebooks.</p>
      
      <h3>3. Practical algorithms & flow control</h3>
      <p>Implemented core concepts like factorials, Fibonacci sequences, string formatting, break/continue statements, and recursion.</p>
      
      <h3>4. Automated testing with Pytest</h3>
      <p>Wrote assignment code and tested it independently using <code>py.test</code> to catch bugs early and guarantee program reliability.</p>
      
      <p>Want to track my learning journey?  <a href="https://github.com/iayeshazafar/python-learning-journey" target="_blank" rel="noopener noreferrer"><code>Explore</code></a></p>
    `
  },
  {
    slug: "building-a-glassmorphism-portfolio",
  title: "Building My Portfolio with Modern Glassmorphism",
  excerpt: "How I designed a custom glassmorphism UI from scratch using clean HTML, CSS, and interactive JavaScript components.",
  date: "October 18, 2026",
  readTime: "7 min read",
  tags: ["Frontend", "CSS", "Portfolio"],
  content: `
    <p>When building my developer portfolio, I wanted to show real technical ownership—not just list a few projects. Instead of using heavy frameworks or ready-made templates, I built a custom dark-mode interface using  HTML, CSS, and  JavaScript.</p>

    <h3> Establishing a Lightweight Design System</h3>
    <p>Consistency keeps code easy to maintain. Before building components, I set up global CSS variables for typography, spacing, and a dark, neon-accented color palette. This kept every UI element aligned and fast.</p>

    <h3> Decoupling Content via Data-Driven Rendering</h3>
    <p>To prevent technical debt as apps grow, I separated content from layout across my timeline and blog pages. By storing records in data objects and rendering them with lightweight JavaScript, the interface stays clean and handles states smoothly.</p>
    
    <h3> Eliminating External Abstractions</h3>
    <p>Building this UI from scratch taught me how browsers render pages, handle DOM updates, and manage layouts. Without heavy build tools or libraries in the way, every line of code has a purpose—resulting in lightning-fast load times, zero bloat, and full control over the user experience..</p>
    <br> <br>
    <p>Ultimately, building a custom ecosystem from the ground up reinforces a vital engineering truth: simplicity, when executed with precision, outperforms complexity every single time.</p>
  `
  }
];
