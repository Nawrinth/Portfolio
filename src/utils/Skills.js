
import neuroScan from "../assets/neuroscan.png"
import aramAIonb from "../assets/aramAIonb.png"
import Portfolio from "../assets/Portfolio.png"
import HumanityOS from "../assets/humanity-os.jpg"


import TechvantoML from "../assets/certificates/techvantoML.png"
import Infernoverse from "../assets/certificates/infernoverse.png"
import Supervised from "../assets/certificates/Supervised.png"
import NeuralAndDL from "../assets/certificates/NeuralAndDL.png"


export const SkillList = {
    language:
        [
            ["C", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"],
            ["C++", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"],
            ["Java", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"],
            ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
            ["Python", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"],
            ["SQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"]
        ],
    framework:
        [
            ["ReactJs", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],
            ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"],
            ["ExpressJs", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"],
            ["React Native", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"]
            ,
            ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"]
        ],
    ml: [
        ["TensorFlow", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"],
        ["Supervised Learning", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"],
        ["Neural Network", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"],
        ["pandas", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"],
        ["scikit-learn", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"],
        ["Data Visualization", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"]
    ]
};

export const ProjectsList = [
    {
        slug: "NeuroScan",
        project: "NeuroScan",
        desc: "AI-powered NeuroScan detects brain tumors quickly with advanced precision.",
        image: neuroScan,
        liveDemo: "https://neuro-scan-theta.vercel.app/",
        github: "https://github.com/Nawrinth/NeuroScan",
        techUsed: ["ReactJs", "Node.js", "Deep Learning", "ExpressJs", "Tailwind CSS"],
        keyFeatures: [
            "🧠 AI Brain Scan Analysis – Detects glioma, meningioma, pituitary, or no tumor instantly.",
            "🩻 Attention U-Net Segmentation – Pinpoints tumor regions with high accuracy from MRI scans.",
            "💻 Intuitive Web App – Upload and view scan results in a clean, responsive UI.",
            "🔗 ML-Backend Integration – Flask deep learning API connected seamlessly to Node.js backend.",
            "🗄️ Secure File Handling – Stores uploaded MRI scans safely using Multer on the server.",
            "🌐 Anywhere Access – Works smoothly on desktop, tablet, and mobile browsers."
        ]


    },
    {
        slug: "aramAI",
        project: "Aram AI",
        desc: "AramAI: Legal AI Assistant using RAG for intelligent document analysis.",
        image: aramAIonb,
        liveDemo: "",
        github: "https://github.com/FakeandrewA/AramAI",
        techUsed: ["ReactJs", "Node.js", "FastAPI", "LangChain", "LangGraph"],
        keyFeatures: [
            "⚖️ Legal Query Assistant – Ask legal questions and get context-aware answers.",
            "🧩 RAG Architecture – Retrieves relevant legal documents before generating responses.",
            "📚 Vector Database (Qdrant) – Stores and searches legal embeddings efficiently.",
            "🌐 FastAPI Backend – Powers the AI engine and API endpoints.",
            "💻 React Frontend – Delivers a smooth, modern, and responsive user interface.",
            "☁️ MongoDB Integration – Manages user data, chat history, and legal document metadata.",
            "🧠 Embeddings via Ollama + nomic-embed-text – Enables semantic legal document retrieval."
        ]



    },
    {
        slug: "portfolio",
        project: "Portfolio",
        desc: "A personal portfolio website showcasing my projects, skills, and experience, built with a clean and responsive design.",
        image: Portfolio,
        liveDemo: "https://nawrinth-portfolio.vercel.app/",
        github: "https://github.com/Nawrinth/Portfolio",
        techUsed: ["ReactJs", "Framer Motion", "Tailwind CSS"],
        keyFeatures: [
            "✨ Showcasing full-stack MERN projects with clean, scalable architecture",
            "🤖 Highlighting machine learning models and practical AI implementations",
            "📱 Fully responsive design compatible with all screen sizes",
            "🎨 Smooth UI animations and interactive components",
            "📘 In-depth project case studies outlining tech stack and problem-solving",
        ]


    },
]


export const CertificatesList = [
    TechvantoML,
    Infernoverse,
    Supervised,
    NeuralAndDL
]


export const SocialMediaLinks = {
    linkedin : "https://www.linkedin.com/in/nawrinth/",
    github : "https://github.com/Nawrinth/",
    instagram : "https://www.instagram.com/nawrinth"
}

export const ResumeLink = "https://ik.imagekit.io/lle8t0qjk/resume.pdf"