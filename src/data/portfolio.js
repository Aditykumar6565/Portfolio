// Central data object for the portfolio site.
// Edit this file to update the site's content.

const portfolio = {
  siteMeta: {
    title: 'Aditya Kumar — Software Engineer & RPA Consultant',
    description:
      'Aditya Kumar — Junior Agentic AI Automation Consultant. RPA Developer, AI & ML enthusiast, frontend developer.',
    author: 'Aditya Kumar',
    primaryColor: '#2563EB' // matches Tailwind primary
  },

  hero: {
    name: 'Aditya Kumar',
    role: 'Junior Agentic AI Automation Consultant',
    location: 'Chennai, India',
    intro:
      "Results-driven and adaptable Software Professional with 1.5+ years of hands-on experience in RPA and AI-driven automation. I build scalable automation solutions using UiPath, Power Automate and integrate AI/ML models for smarter workflows.",
    ctaText: 'Download Resume',
    resumeLink: '/ResumeAditya.pdf' // copy your resume to public or update path
  },

  contact: {
    email: 'adityamax7870@gmail.com',
    phone: '+91-8853800609',
    linkedin: 'https://www.linkedin.com/in/adityakumar-6699111b3/',
    github: 'https://github.com/Aditykumar6565',
    website: 'https://aditya.web.app/',
    location: 'Chennai, India'
  },

  experience: [
    {
      company: 'dotSolved',
      role: 'Junior Consultant — Agentic AI Automation',
      period: 'Mar 2024 – Present',
      teamSize: 2,
      bullets: [
        'Designed and developed intelligent automation solutions using UiPath REFramework.',
        'Implemented Document Understanding workflows (invoices, resumes) with Tesseract/OCR.',
        'Built AI-driven bots and assisted in developing GenAI-based agents.',
        'Worked with Power Automate AI Builder for document classification and prediction models.',
        'Managed workflows in UiPath Orchestrator (assets, queues, schedules).',
        'Contributed to Resume Extractor using Python + spaCy for NER and entity extraction.',
        'Completed UiPath RPA Associate and Advanced Developer trainings.'
      ],
      tech: ['UiPath', 'Power Automate', 'Python', 'spaCy', 'Orchestrator']
    },
    {
      company: 'Intern (various)',
      role: 'Software & Automation Intern',
      period: '2023 – 2024',
      bullets: [
        'Internship work focused on automation, document processing and small ML tasks.',
        'Worked on frontend clones and small fullstack projects to strengthen web skills.'
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'React']
    }
  ],

  skills: {
    languages: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS'],
    frameworks: ['UiPath', 'Power Automate', 'React', 'TensorFlow', 'Flask'],
    tools: [
      'NumPy',
      'Pandas',
      'spaCy',
      'Tesseract OCR',
      'UiPath Orchestrator',
      'LangChain',
      'LangFlow',
      'Git'
    ],
    soft: ['Problem solving', 'Quick learning', 'Team collaboration', 'Adaptability']
  },

  education: [
    {
      school: 'AVIT, Chennai',
      degree: 'B.E. — Computer Science & Engineering',
      period: '2020 – 2024',
      cgpa: '8.7'
    }
  ],

  certificates: [
    'UiPath Academy — Automation Developer Associate',
    'Professional Training in UiPath',
    'Fundamentals of Machine Learning and AI — AWS',
    'Introduction to Android Studio — Great Learning',
    'FullStack Development (Web) — Internshala',
    'AI Tools Workshop — be10x'
  ],

  projects: [
    {
      title: 'Resume Extractor (NER)',
      description:
        'Resume parsing system using Python + spaCy to extract name, email, skills, education, experience and present in structured JSON / Excel.',
      tech: ['Python', 'spaCy', 'pandas'],
      repo: 'https://github.com/Aditykumar6565/resume-extractor',
      demo: ''
    },
    {
      title: 'Brain Tumor Analysis',
      description:
        'CNN-based image classification for brain tumor detection. Built a prototype to categorize tumor types from MRI slices.',
      tech: ['TensorFlow', 'Keras', 'Python'],
      repo: 'https://github.com/Aditykumar6565/brain-tumor-analysis',
      demo: ''
    },
    {
      title: 'Vendor Reconciliation Agent',
      description:
        'Rule-based automation to reconcile vendor transactions and produce financial summaries automatically.',
      tech: ['UiPath', 'Python'],
      repo: '',
      demo: ''
    },
    {
      title: 'Frontend Clones & Portfolio',
      description:
        'Practice projects including Myntra and Amazon frontend clones and a personal portfolio site using HTML/CSS/JS and React.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      repo: 'https://github.com/Aditykumar6565',
      demo: 'https://aditya.web.app/'
    }
  ],

  extras: {
    hobbies: ['Open source', 'Learning ML/AI', 'Coding practice'],
    interests: ['AI', 'Automation', 'Cloud Computing']
  }
};

export default portfolio;
