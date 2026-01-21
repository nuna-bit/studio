import { BrainCircuit, Database, LineChart, Code, Github } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const SKILLS: { name: string; icon: LucideIcon }[] = [
  { name: "Python", icon: Code },
  { name: "SQL", icon: Database },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Data Visualization", icon: LineChart },
  { name: "Pandas & NumPy", icon: Code },
  { name: "Scikit-learn", icon: BrainCircuit },
  { name: "Tableau", icon: LineChart },
  { name: "Git & GitHub", icon: Github },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Data Science",
    institution: "University of Tech",
    period: "2022 - 2024",
    description: "Focused on advanced machine learning, big data technologies, and statistical analysis. Completed a capstone project on predictive modeling for customer churn.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State College",
    period: "2018 - 2022",
    description: "Fundamentals of computer science, including algorithms, data structures, and software engineering principles.",
  },
];

export const CERTIFICATIONS = [
  {
    name: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "2023",
    description: "Covered topics such as data cleaning, analysis, visualization, and machine learning using Python.",
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "2024",
    description: "Demonstrated proficiency in building and training neural networks using TensorFlow.",
  },
];

export const PROJECTS = [
    {
        title: "Customer Churn Prediction",
        description: "Developed a machine learning model to predict customer churn for a telecom company. Utilized logistic regression and random forest models, achieving 85% accuracy. The project involved data preprocessing, feature engineering, model training, and evaluation.",
        tags: ["Machine Learning", "Python", "Scikit-learn", "Pandas"],
        links: [
            { type: "github" as const, url: "#" },
            { type: "demo" as const, url: "#" },
        ]
    },
    {
        title: "Sales Forecasting with Time Series",
        description: "Built a time series model to forecast monthly sales for a retail store. Employed ARIMA and Prophet models to capture seasonality and trends. The model helped in optimizing inventory management.",
        tags: ["Time Series Analysis", "Python", "Prophet", "Statsmodels"],
        links: [
            { type: "github" as const, url: "#" }
        ]
    },
    {
        title: "Social Media Sentiment Analysis",
        description: "Created a dashboard to analyze real-time sentiment of tweets about a specific topic. Used NLP techniques for sentiment classification and data visualization tools to display the results.",
        tags: ["NLP", "Python", "Dash", "Plotly"],
        links: [
            { type: "github" as const, url: "#" },
            { type: "demo" as const, url: "#" },
        ]
    }
];
