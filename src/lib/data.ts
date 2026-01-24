import { BrainCircuit, Database, LineChart, Code, Github, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const SKILLS: { name: string; icon: LucideIcon }[] = [
  { name: "Python", icon: Code },
  { name: "SQL", icon: Database },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Matplotlib & Seaborn", icon: LineChart },
  { name: "Pandas & NumPy", icon: Code },
  { name: "Scikit-learn", icon: BrainCircuit },
  { name: "Git & GitHub", icon: Github },
  { name: "Pytorch & TensorFlow", icon: Code },
];

export const EDUCATION = [
  {
    degree: "Master’s Degree in Artificial Intelligence for Business and Society",
    institution: "IULM University",
    period: "Oct 2022 - Mar 2025",
    location: "Milan, Italy",
    description: "Thesis: Predictive Analytics for Quality Improvement and Cost Reduction in High-Tech Manufacturing: A Case Study. | Grade: 110/110 cum laude",
  },
  {
    degree: "Erasmus+ Master - School of Computer Science for Business Management",
    institution: "Romanian-American University",
    period: "Feb 2024 - Jul 2024",
    location: "Bucharest, Romania",
    description: "Grade: 10/10",
  },
      {
    degree: "Bachelor’s Degree in Law",
    institution: "University of Milan-Bicocca",
    period: "Oct 2018 - Dec 2022",
    location: "Milan, Italy",
    description: "Thesis: The legal problems of NFTs | Grade: 93/110",
  },
    {
    degree: "Erasmus+ Bachelor - School of Law",
    institution: "University of Ljubljana",
    period: "Oct 2020 - Jan 2021",
    location: "Ljubljana, Slovenia",
    description: "Grade: 8/10",
  },
];

export const EXPERIENCE = [
  {
    role: "Jr Data Scientist Trainee",
    company: "Heroes B.V.",
    period: "Feb 2026 - Jul 2026",
    location: "Utrecht, Netherlands",
    description: "Selected for a 6-month intensive program mastering the end-to-end data lifecycle. Developing and deploying scalable Machine Learning and GenAI solutions using Azure, Databricks, and MLflow for enterprise-level business challenges",
  },
  {
    role: "Data Administrator",
    company: "JBT Marel",
    period: "Jun 2025 - Dec 2025",
    location: "Eindhoven, Netherlands",
    description: "Utilizing Excel and Power BI daily for data analysis and reporting to support procurement operations. Verifying and updating supplier data within internal systems.",
  },
  {
    role: "Data Science Graduation Intern",
    company: "ASML",
    period: "Sep 2024 - Mar 2025",
    location: "Veldhoven, Netherlands",
    description: "Developing a predictive model using SAP and python to analyze large volumes of data, identifying correlations between New Product Introduction (NPI) parameters, quality metrics, and operational costs. Conducted data analysis on quality issues by analyzing relevant datasets. Presented findings and insights through PowerPoint presentations to stakeholders.",
  },
  {
    role: "Research Intern",
    company: "IULM AI Lab",
    period: "Feb 2024 - Mar 2024",
    location: "Milan, Italy",
    description: "Investigated state-of-the-art text-to-image generation methods, including Midjourney, DALL-E, and Stable Diffusion. Conducted in-depth analysis of 10+ scientific papers to understand the underlying processes and architectures of generative AI models.",
  },
];

export const CERTIFICATIONS = [
  {
    name: "IBM AI Engineering Professional Certificate",
    issuer: "IBM via Coursera",
    date: "Sep 2023",
    description: "Covered machine learning, deep learning, and AI concepts using Python and popular libraries such as Scikit-learn, Keras, and TensorFlow.",
    url: "https://coursera.org/share/6c8e328bcac33615573dd63bbc8ecd8f"
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google via Coursera",
    date: "Jul 2023",
    description: "Covered topics such as network security, threat detection, and incident response.",
    url: "https://coursera.org/share/233edf9117d3693b9227e2ee490e91e4"
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jun 2023",
    description: "Describe cloud concepts. Describe Azure architecture and services. Describe Azure management and governance",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/mariajosesalasmiranda/5D3DBA19FD80153?sharingId=F18C61CBFA38AC47",
  },
];

export const ACHIEVEMENTS = [
  {
    name: "Google Developer Student Club AI Hackathon",
    issuer: "Google Developer Group - PoliMi",
    date: "Apr 2024",
    description: "Participated in a hackathon focused on AI applications for education.",
    url: "https://www.linkedin.com/posts/activity-7188836709374046208-Mut0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-KJMsBjd3TbbtvTkhWvCBtm93wdLj8ePw",
  },
  {
    name: "Winner: AI applications for inclusion",
    issuer: "IULM Talent & Creativity Challenge – edition II",
    date: "Feb 2024",
    description: "Won the competition for developing an AI application focused on inclusion.",
    url: "https://www.linkedin.com/in/mj-salas/details/honors/",
  },
];

export const PROJECTS = [
    {
        title: "Learn Language Assistant",
        description: "Developed a language learning application leveraging Azure AI Foundry to enhance pronunciation and translation capabilities. Implemented speech recognition, text-to-speech, and speech translation features, supporting multiple languages.",
        tags: ["Azure AI"],
        links: [
            { type: "github" as const, url: "https://github.com/nuna-bit/azure-speech-language-assistant" },
        ]
    },
    {
        title: "Emotion Vision",
        description: "Developed a real-time emotion recognition system using a deep neural network (65% accuracy on FER-2013), integrating live webcam video with emotion prediction and visual overlays.",
        tags: ["TensorFlow", "Keras", "OpenCV"],
        links: [
            { type: "github" as const, url: "https://github.com/nuna-bit/Emotion-Vision" }
        ]
    },
    {
        title: "Building a Neural Network for Image Classification",
        description: "Completed a project focused on building and training a neural network to classify images from the CIFAR-10 dataset, consisting of 60,000 images across 10 classes, achieving an accuracy of over 80% on the test dataset.",
        tags: ["TensorFlow", "Keras", "NumPy", "Matplotlib"],
        links: [
            { type: "github" as const, url: "https://github.com/nuna-bit/CNN_CIFAR10" },
        ]
    },
    {
        title: "Roll a Ball",
        description: "Developed ’Roll a Ball,’ a 3D interactive game where players control a ball to collect objects and navigate obstacles, as part of a course in game development.",
        tags: ["Unity Hub", "C#", "Game Development"],
        links: [
            { type: "github" as const, url: "https://github.com/nuna-bit/Roll-a-Ball" },
        ]
    },
    {
        title: "Sentiment Analysis with Python & Hugging Face",
        description: "NLP sentiment analysis repository featuring a live deployment on Hugging Face. Focused on TextBlob implementation and CI/CD basics with Git.",
        tags: ["Python", "Git", "GitHub", "Hugging Face", "TextBlob", "NLP"],
        links: [
            { type: "github" as const, url: "https://github.com/nuna-bit/sentiment-analysis-with-python-Hugging-Face" },
            { type: "huggingface" as const, url: "https://huggingface.co/spaces/nuna-bit/textblob-sentiment-demo" }
        ]
    },
    {
        title: "Brazilian E-Commerce Analytics Dashboard",
        description: "Interactive Streamlit dashboard analyzing a Kaggle e-commerce dataset.",
        tags: ["Streamlit", "Kaggle", "Python", "Pandas"],
        links: [
            { type: "github" as const, url: "https://github.com/nuna-bit/ecommerce-eda-dashboard" },
            { type: "kaggle" as const, url: "https://www.kaggle.com/code/mariajosesm/eda-brazilian-ecommerce" },
            { type: "demo" as const, url: "https://ecommerce-eda-dashboard-mwsjjkaoxcyltylmtzq8gr.streamlit.app/" }
        ]
    },
    {
        title: "Futuristic AI Library",
        description: "Created an interactive website for a tech-focused AI library with a virtual assistant, seamless data management, and efficient deployment, showcasing teamwork and technical expertise.",
        tags: ["HTML5", "CSS3", "PHP", "JavaScript", "MySQL", "Docker", "IBM Watsonx"],
        links: [
            { type: "github" as const, url: "https://github.com/MariaPizzulli/FuturisticAI_Library" }
        ]
    }
];
