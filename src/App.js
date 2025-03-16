import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleDownload = () => {
    // In a real implementation, this would link to your actual resume file
    alert('In a real implementation, this would download your resume PDF');
  };

  return (
    <div className="app">
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="main-content">
        {activeSection === 'about' && <About />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'research' && <Research />}
      </main>
      <Footer />
    </div>
  );
}

function Header({ setActiveSection, activeSection }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Aditi Chowdhuri</h1>
        <div className="contact-info">
          <p>+1 (917) 337-7109 | anc2207@columbia.edu</p>
          <p>
            <a href="https://linkedin.com/in/aditi-chowdhuri" target="_blank" rel="noreferrer">LinkedIn</a> | 
            <a href="https://github.com/Aditi-Chowdhuri" target="_blank" rel="noreferrer"> GitHub</a>
          </p>
        </div>
        <button className="download-button" onClick={() => window.open('resume.pdf', '_blank')}>
          Download Resume
        </button>
      </div>
      <nav className="navigation">
        <ul>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <button onClick={() => setActiveSection('about')}>About</button>
          </li>
          <li className={activeSection === 'experience' ? 'active' : ''}>
            <button onClick={() => setActiveSection('experience')}>Experience</button>
          </li>
          <li className={activeSection === 'education' ? 'active' : ''}>
            <button onClick={() => setActiveSection('education')}>Education</button>
          </li>
          <li className={activeSection === 'skills' ? 'active' : ''}>
            <button onClick={() => setActiveSection('skills')}>Skills</button>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <button onClick={() => setActiveSection('projects')}>Projects</button>
          </li>
          <li className={activeSection === 'research' ? 'active' : ''}>
            <button onClick={() => setActiveSection('research')}>Research</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <p>
        I am a Computer Science graduate student at Columbia University with a strong background in software engineering,
        machine learning, and web development. With professional experience at Bank of America and other organizations,
        I've developed expertise in creating efficient AI solutions, optimizing application performance, and building user-centric
        interfaces.
      </p>
      <p>
        My research focuses on federated learning, AI security, and enhancing LLMs. I'm passionate about developing innovative
        solutions that combine cutting-edge technology with practical applications.
      </p>
    </section>
  );
}

function Experience() {
  return (
    <section className="section">
      <h2>Experience</h2>
      
      <div className="experience-item">
        <div className="experience-header">
          <h3>Teaching Assistant</h3>
          <p className="date">January 2024 - Present</p>
        </div>
        <p className="organization">Columbia University - Networks Crowds and the Web (4223)</p>
        <ul>
          <li>Grading exams and assisting students in understanding key concepts of networks and web systems</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Teaching Assistant</h3>
          <p className="date">September 2024 - Present</p>
        </div>
        <p className="organization">Columbia University - Introduction to Databases (4111)</p>
        <ul>
          <li>Responsible for grading exams and assignments, proctoring exams, and supporting students in database concepts</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Research Intern</h3>
          <p className="date">September 2024 - December 2024</p>
        </div>
        <p className="organization">ARISE Lab - Columbia University</p>
        <ul>
          <li>Creating AI solutions to enhance LLMs with improved semantic understanding for better security</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Software Engineer</h3>
          <p className="date">June 2022 - July 2024</p>
        </div>
        <p className="organization">Bank of America, Mumbai, India</p>
        <ul>
          <li>Engineered and deployed user-centric UI features and backend services for financial applications, significantly enhancing user experience and increasing system performance by 20%</li>
          <li>Developed machine learning models focused on data preprocessing and Natural Language Processing (NLP), improving data accuracy and processing efficiency by 25%</li>
          <li>Led the volunteer team in community service initiatives, refining interpersonal skills and fostering teamwork</li>
          <li>Implemented continuous integration and deployment pipelines, reducing deployment time by 40% and improving code quality</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Software Developer Intern</h3>
          <p className="date">July 2021 - October 2021</p>
        </div>
        <p className="organization">Tata Consultancy Services, Mumbai, India</p>
        <ul>
          <li>Designed, developed, and maintained scalable microservices using Spring Boot and Java to support enterprise applications</li>
          <li>Worked with MySQL and PostgreSQL for efficient data management and query performance tuning</li>
          <li>Optimized application performance by refactoring code, reducing runtime by 10%, and improving overall efficiency</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Web Developer Intern</h3>
          <p className="date">August 2020 - December 2020</p>
        </div>
        <p className="organization">Trikon Technologies, Noida, India</p>
        <ul>
          <li>Designed, developed, and maintained the company website, enhancing user experience and responsiveness</li>
          <li>Collaborated with the backend team to integrate RESTful APIs using Node.js and Express.js, improving data retrieval efficiency by 30%</li>
          <li>Conducted website testing and debugging to resolve performance issues and enhance overall stability</li>
        </ul>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section">
      <h2>Education</h2>
      
      <div className="education-item">
        <div className="education-header">
          <h3>Master of Science in Computer Science</h3>
          <p className="date">2024 - 2025</p>
        </div>
        <p className="institution">Columbia University, New York, NY</p>
        <p className="gpa">CGPA: 3.91/4.0</p>
        <p className="details">
          <strong>Relevant Coursework:</strong> Advanced Software Engineering, Analysis of Algorithms, User Interface Design, 
          Programming Language and Translators, Advanced Database Systems
        </p>
        <p className="details">
          <strong>Honors:</strong> TAII for Introduction to Databases (4111) and Networks Crowds and the Web (4223)
        </p>
      </div>
      
      <div className="education-item">
        <div className="education-header">
          <h3>Bachelor of Science in Computer Science and Engineering</h3>
          <p className="date">2018 - 2022</p>
        </div>
        <p className="institution">Vellore Institute of Technology (VIT), Vellore, India</p>
        <p className="gpa">CGPA: 3.99/4.0</p>
        <p className="details">
          <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Database Management Systems, 
          Data Visualization, Machine Learning, Internet and Web Programming
        </p>
        <p className="details">
          <strong>Honors:</strong> Special Achievers and Achievers 2021
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section">
      <h2>Skills</h2>
      
      <div className="skills-category">
        <h3>Programming Languages</h3>
        <div className="skills-list">
          <span className="skill-item">Python</span>
          <span className="skill-item">Java</span>
          <span className="skill-item">C</span>
          <span className="skill-item">C++</span>
          <span className="skill-item">C#</span>
          <span className="skill-item">R</span>
          <span className="skill-item">MATLAB</span>
          <span className="skill-item">SQL</span>
          <span className="skill-item">JavaScript</span>
          <span className="skill-item">Go</span>
        </div>
      </div>
      
      <div className="skills-category">
        <h3>Frameworks</h3>
        <div className="skills-list">
          <span className="skill-item">TensorFlow</span>
          <span className="skill-item">Keras</span>
          <span className="skill-item">PyTorch</span>
          <span className="skill-item">Numpy</span>
          <span className="skill-item">Pandas</span>
          <span className="skill-item">Matplotlib</span>
          <span className="skill-item">Plotly</span>
          <span className="skill-item">OpenCV</span>
          <span className="skill-item">Beautiful Soup</span>
          <span className="skill-item">Gunicorn</span>
          <span className="skill-item">OpenMP</span>
          <span className="skill-item">MPI</span>
        </div>
      </div>
      
      <div className="skills-category">
        <h3>Tools</h3>
        <div className="skills-list">
          <span className="skill-item">Git</span>
          <span className="skill-item">Arduino</span>
          <span className="skill-item">Raspberry Pi</span>
          <span className="skill-item">Figma</span>
          <span className="skill-item">Adobe Suite</span>
          <span className="skill-item">Google Firebase</span>
          <span className="skill-item">Google Firestore</span>
          <span className="skill-item">GCP</span>
          <span className="skill-item">AWS</span>
          <span className="skill-item">Linux</span>
        </div>
      </div>
      
      <div className="skills-category">
        <h3>Web Development</h3>
        <div className="skills-list">
          <span className="skill-item">HTML5</span>
          <span className="skill-item">CSS3</span>
          <span className="skill-item">JQuery</span>
          <span className="skill-item">PHP</span>
          <span className="skill-item">MongoDB</span>
          <span className="skill-item">Flask</span>
          <span className="skill-item">NodeJS</span>
          <span className="skill-item">ExpressJS</span>
          <span className="skill-item">ReactJS</span>
          <span className="skill-item">D3.js</span>
          <span className="skill-item">EJS</span>
          <span className="skill-item">JSX</span>
        </div>
      </div>
      
      <div className="skills-category">
        <h3>Soft Skills</h3>
        <div className="skills-list">
          <span className="skill-item">Problem Solving</span>
          <span className="skill-item">Team Collaboration</span>
          <span className="skill-item">Leadership</span>
          <span className="skill-item">Project Management</span>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>
      
      <div className="project-item">
        <h3>Foodgasm</h3>
        <p>
          Developed an AI-powered recipe platform using computer vision to detect fridge ingredients and LLMs for personalized recipe suggestions. 
          Built with React.js, FastAPI, Microsoft Phi 3.5 Vision Instruct, and AI-driven calorie estimation for a seamless and intelligent user experience.
        </p>
      </div>
      
      <div className="project-item">
        <h3>Tutor AI</h3>
        <p>
          Developed an AI-based posture correction system using PoseNet, TensorFlow, and JavaScript to provide real-time feedback 
          for physically demanding tasks. Integrated machine learning to analyze body alignment and offer personalized corrections. 
          Used React.js for the user interface, ensuring a seamless and interactive learning experience.
        </p>
      </div>
      
      <div className="project-item">
        <h3>Baby Shield</h3>
        <p>
          Created a monitoring system to prevent SIDS (Sudden Infant Death Syndrome) in newborns using TensorFlow and IoT devices.
        </p>
      </div>
      
      <div className="project-item">
        <h3>Justice</h3>
        <p>
          Built a safety device and app with a Taser, hidden camera, and SOS functionality for emergency situations.
        </p>
      </div>
      
      <div className="project-item">
        <h3>Visual Hertz</h3>
        <p>
          Developed a platform to assist auditory-impaired students in classrooms through visual cues and real-time captioning.
        </p>
      </div>
      
      <div className="project-item">
        <h3>COVID-19 Tracker</h3>
        <p>
          Created a real-time tracking website for SARS-CoV-2 virus progression using ReactJS and Firebase with interactive visualizations.
        </p>
      </div>
      
      <div className="project-item">
        <h3>Memory++</h3>
        <p>
          Designed an app to help dementia patients with to-do lists and reminders using machine learning for personalized recommendations.
        </p>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="section">
      <h2>Research Papers</h2>
      
      <div className="research-item">
      <h3>Temporal Weighted Averaging for Asynchronous Federated Learning</h3>
        <p className="publication">Computational Intelligence and Neuroscience 2021, Hindawi</p>
        <p className="doi">DOI: 10.1155/2021/5844728</p>
      <a href="https://doi.org/10.1155/2021/5844728" target="_blank" rel="noreferrer" className="paper-link">View Paper</a>
      </div>
      
      <div className="research-item">
        <h3>Progressive Search Personalization and Privacy Protection Using Federated Learning</h3>
        <p className="publication">Expert Systems, Wiley</p>
        <p className="doi">DOI: 10.1111/exsy.13318</p>
        <a href="https://doi.org/10.1111/exsy.13318" target="_blank" rel="noreferrer" className="paper-link">View Paper</a>
      </div>
      
      <div className="research-item">
        <h3>Suraksha: The Ultimate Self-Defense Kit for Women</h3>
        <p className="publication">International Journal Of Engineering Research & Technology (IJERT), Volume 12, Issue 02 (February 2023)</p>
        <p className="doi">DOI: 10.17577/IJERTV12IS020039</p>
        <a href="https://doi.org/10.17577/IJERTV12IS020039" target="_blank" rel="noreferrer" className="paper-link">View Paper</a>
      </div>
      
      <div className="section-subsection">
        <h3>Awards</h3>
        <ul className="awards-list">
          <li>UNIHack 2020: Overall 2nd place (50 teams)</li>
          <li>Women Techies 2019: Winner 1st place</li>
          <li>yuHacks 2021: Best use of Google Cloud (50 teams)</li>
          <li>WiCS 2021: Overall 2nd Prize and Best use of Hardware (100 teams)</li>
          <li>SheHacks 2021: Overall 1st Prize and Best use of Hardware (70 teams)</li>
        </ul>
      </div>
      
      <div className="section-subsection">
        <h3>Extra-Curricular Activities</h3>
        <ul>
          <li>Blogging on Medium (examples: Introducing Firestore for Web-Apps and Firestore-Storing, Deleting, and Querying Data)</li>
          <li>Reviewing IEEE papers, providing feedback to authors and editors</li>
        </ul>
      </div>
      
      <div className="section-subsection">
        <h3>Leadership</h3>
        <p><strong>roboVITics (Official robotics club of VIT)</strong></p>
        <p>Event Organizer and Web Dev Head</p>
        <p>Led the Web Development team and orchestrated a successful international hackathon</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Aditi Chowdhuri. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:anc2207@columbia.edu">Email</a>
        <a href="https://linkedin.com/in/aditi-chowdhuri" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/Aditi-Chowdhuri" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
}

export default App;
