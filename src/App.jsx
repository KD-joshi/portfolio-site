import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const phrases = [
    "Machine Learning Engineer.",
    "AI Solutions Architect.",
    "Specializing in NLP & LLMs.",
    "Building Scalable AI Agents."
  ];

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newPhraseDelay = 2000;
    let timeoutId;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
      }
      
      let typeSpeed = isDeleting ? erasingDelay : typingDelay;
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = newPhraseDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
      }
      
      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-glow bg-glow-cyan"></div>
      <div className="bg-glow bg-glow-purple"></div>

      <nav className="navbar">
        <div className="nav-content">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            KJ<span className="accent">.</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero fade-in">
          <div className="hero-content">
            <div className="hero-badge">AI & Machine Learning Engineer</div>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Kuldeep</span>.<br />
              <span className="typewriter">{text}</span><span className="cursor">_</span>
            </h1>
            <p className="hero-subtitle">
              A results-driven AI Engineer with a strong foundation in Machine Learning, Natural Language Processing (NLP), and Full Stack Web Development. I architect scalable AI solutions, Transformer-based applications, and robust end-to-end systems.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section fade-in">
          <h2 className="section-title">About <span className="accent">Me</span></h2>
          <div className="about-grid">
            <div className="about-text glass-card">
              <p>
                As a Machine Learning Engineer, I serve as an effective liaison between IT and business stakeholders, possessing the technical depth to translate complex requirements into scalable implementations.
              </p>
              <p>
                I hold a B.Tech in Electronics and Communication Engineering (2020 – 2024), where I built a comprehensive theoretical foundation in Machine Learning, Deep Learning, Computer Vision, and Neural Networks.
              </p>
              <p>
                My true passion lies in bridging the gap between raw data and business impact—whether that involves building autonomous LLM agents, optimizing NLP pipelines, or architecting multi-tiered cloud infrastructure on GCP.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card glass-card">
                <h3>NLP & LLMs</h3>
                <p>Core Specialization</p>
              </div>
              <div className="stat-card glass-card">
                <h3>Cloud Architect</h3>
                <p>GCP Certified</p>
              </div>
              <div className="stat-card glass-card">
                <h3>Agentic AI</h3>
                <p>Multi-Agent Systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section fade-in">
          <h2 className="section-title">Professional <span className="accent">Experience</span></h2>
          <div className="timeline">
            
            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Nov 2025 – Present</div>
              <h3 className="timeline-role">Machine Learning Engineer</h3>
              <ul className="timeline-details">
                <li>Developed a multi-agent solution for an American travel corporation to automate customer segmentation. Built an ADK agent that generates and passes SQL queries to a Python script, executing dynamically on BigQuery.</li>
                <li>Engineered an agent for a Telecom Giant in Indonesia to facilitate user recharges and profile inquiries by interacting with APIs via an MCP server. Implemented a RAG architecture to process and retrieve general platform documentation.</li>
              </ul>
            </div>

            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Oct 2024 – Oct 2025</div>
              <h3 className="timeline-role">Technical Business Analyst</h3>
              <ul className="timeline-details">
                <li>Delivered comprehensive technical presentations and demonstrations to enterprise clients, focusing heavily on Google Cloud Platform (GCP) services and tools.</li>
                <li>Developed technical demos and Proof of Concepts (POCs) mapping complex client requirements to robust GCP architectural solutions.</li>
              </ul>
            </div>

            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Jan 2024 – May 2024</div>
              <h3 className="timeline-role">Research & ML Intern</h3>
              <ul className="timeline-details">
                <li>Engineered a platform for real-time sentiment analysis using both video and audio feeds.</li>
                <li>Trained and deployed a CNN-based model to detect human facial expressions on live camera feeds, rendering bounding boxes with emotion labels.</li>
                <li>Developed an interactive web-app UI to process recorded media and stream real-time sentiment analysis using Python, OpenCV, and TensorFlow.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section fade-in">
          <h2 className="section-title">Technical <span className="accent">Arsenal</span></h2>
          <div className="skills-grid expanded">
            <div className="skill-category glass-card">
              <h3>Machine Learning & AI</h3>
              <div className="tags">
                <span className="tag">Deep Learning</span>
                <span className="tag">NLP</span>
                <span className="tag">TensorFlow</span>
                <span className="tag">PyTorch</span>
                <span className="tag">Hugging Face</span>
                <span className="tag">Transformers</span>
                <span className="tag">LLMs / RAG</span>
              </div>
            </div>
            
            <div className="skill-category glass-card">
              <h3>Cloud & MLOps</h3>
              <div className="tags">
                <span className="tag">Google Cloud (GCP)</span>
                <span className="tag">Vertex AI</span>
                <span className="tag">BigQuery</span>
                <span className="tag">Cloud Run</span>
                <span className="tag">Agent Engine</span>
                <span className="tag">MCP Servers</span>
              </div>
            </div>

            <div className="skill-category glass-card">
              <h3>Languages & DBs</h3>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">C / C++</span>
                <span className="tag">Rust</span>
                <span className="tag">SQL / MySQL</span>
                <span className="tag">DBMS</span>
                <span className="tag">Jupyter Lab</span>
              </div>
            </div>

            <div className="skill-category glass-card">
              <h3>Web Development</h3>
              <div className="tags">
                <span className="tag">React.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express.js</span>
                <span className="tag">FastAPI</span>
                <span className="tag">JavaScript</span>
                <span className="tag">RESTful APIs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section fade-in">
          <h2 className="section-title">Deployed <span className="accent">AI Systems</span></h2>
          <div className="projects-grid">
            
            <article className="project-card glass-card">
              <div className="project-header">
                <h3>Sahabat Agent</h3>
              </div>
              <p className="project-desc">
                An AI-driven agent configured with a Vertex AI RAG engine for a major Indonesian telecom operator. Assists users with account management and mobile plan recharges via an independent MCP Server deployed on Cloud Run. Benchmarked 7+ LLMs via LiteLLM framework.
              </p>
              <div className="tags">
                <span className="tag-small">GCP Vertex AI</span>
                <span className="tag-small">Python</span>
                <span className="tag-small">LiteLLM</span>
                <span className="tag-small">MCP Server</span>
              </div>
            </article>

            <article className="project-card glass-card">
              <div className="project-header">
                <h3>Segmentation Bot & Vertex AI Search</h3>
              </div>
              <p className="project-desc">
                A multi-agent system to dynamically generate customized database views from a client's BigQuery master table. Parsed natural language into executable SQL, deployed backend routing via Cloud Run and Cloud Function Frameworks, and visualized in Looker.
              </p>
              <div className="tags">
                <span className="tag-small">Google ADK</span>
                <span className="tag-small">BigQuery</span>
                <span className="tag-small">Cloud Run</span>
                <span className="tag-small">Looker</span>
              </div>
            </article>

            <article className="project-card glass-card">
              <div className="project-header">
                <h3>Finance QnA Bot</h3>
              </div>
              <p className="project-desc">
                A Financial Q&A Chatbot leveraging Selenium for real-time web scraping of financial statements. Implemented a robust RAG system using Langchain and multiple LLMs (Flan-T5, Gemini 1.5 Flash, Gemini 2.5 Pro) to analyze scraped contexts.
              </p>
              <div className="tags">
                <span className="tag-small">Langchain</span>
                <span className="tag-small">Gemini</span>
                <span className="tag-small">Transformers</span>
                <span className="tag-small">Selenium</span>
              </div>
            </article>

            <article className="project-card glass-card">
              <div className="project-header">
                <h3>OCR Engine for Receipts</h3>
              </div>
              <p className="project-desc">
                A custom OCR pipeline utilizing Tesseract and OpenCV to automate the capture of essential financial data (amounts, dates) from receipt imagery for downstream workflows.
              </p>
              <div className="tags">
                <span className="tag-small">pytesseract</span>
                <span className="tag-small">OpenCV</span>
                <span className="tag-small">pandas</span>
                <span className="tag-small">spaCy</span>
              </div>
            </article>

          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section fade-in">
          <h2 className="section-title">Licenses & <span className="accent">Certifications</span></h2>
          <div className="cert-grid">
            <div className="cert-card glass-card highlight-border">
              <h4>Professional Cloud Architect</h4>
              <p className="cert-issuer">Google Cloud Certified</p>
              <p className="cert-desc">Mastery of Google Cloud Platform (GCP) architecture, practical applications, and hands-on scenario-based cloud solutions.</p>
            </div>
            <div className="cert-card glass-card highlight-border">
              <h4>Associate Cloud Engineer</h4>
              <p className="cert-issuer">Google Cloud Certified</p>
              <p className="cert-desc">Fundamentals of cloud computing, infrastructure architecture, and advanced features on the Google Cloud Platform.</p>
            </div>
            <div className="cert-card glass-card">
              <h4>NLP Specialization</h4>
              <p className="cert-issuer">Coursera / DeepLearning.AI</p>
              <p className="cert-desc">Probabilistic Models, Classification, Vector Spaces, and Sequence Models using Python.</p>
            </div>
            <div className="cert-card glass-card">
              <h4>Machine Learning Specialization</h4>
              <p className="cert-issuer">Coursera / Stanford</p>
              <p className="cert-desc">Comprehensive techniques including TensorFlow, Neural Networks, and contemporary ML algorithms.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section fade-in">
          <div className="contact-card glass-card">
            <h2 className="section-title">Let's <span className="accent">Connect</span></h2>
            <p>I'm always open to discussing new opportunities, innovative AI projects, or just chatting about tech.</p>
            <div className="contact-links">
              <a href="mailto:kcjoshivrl@gmail.com" className="btn btn-secondary">kcjoshivrl@gmail.com</a>
              <a href="https://linkedin.com/in/kuldeep-joshi-47b9271ba" target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn</a>
              <a href="https://github.com/KD-joshi" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Kuldeep Joshi. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
