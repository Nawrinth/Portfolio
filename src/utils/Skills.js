
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
        liveDemo: "",
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
        slug: "humanity-os",
        project: "Humanity Os",
        desc: "AI-powered NeuroScan detects brain tumors quickly with advanced precision.",
        image: HumanityOS,
        liveDemo: "",
        github: "",
        techUsed: ["ReactJs", "Node.js", "Deep Learning", "ExpressJs", "Tailwind CSS"],
        keyFeatures: [
            "🧠 AI-powered mental health assessment that analyzes emotions using facial recognition and natural language processing.",
            "💨 Carbon footprint calculator that helps users measure and track their lifestyle’s environmental impact accurately.",
            "🗺️ Real-time interactive data maps displaying dynamic information about water resources and active fire incidents.",
            "🌾 Agriculture management tools that support farmers with crop insights, productivity tracking, and resource planning.",
            "📅 Community event management system enabling users to create, manage, and participate in local sustainability events.",
            "🔐 Secure authentication system utilizing JWT and encrypted passwords to ensure safe user login and data protection."
        ]


    },
    {
        slug: "portfolio",
        project: "Portfolio",
        desc: "AI-powered NeuroScan detects brain tumors quickly with advanced precision.",
        image: Portfolio,
        liveDemo: "",
        github: "",
        techUsed: ["ReactJs", "Node.js", "Deep Learning", "Framer Motion", "Tailwind CSS"],
        keyFeatures: [
            "🧠 AI Brain Scan Analysis – Detects glioma, meningioma, pituitary, or no tumor instantly.",
            "🩻 Attention U-Net Segmentation – Pinpoints tumor regions with high accuracy from MRI scans.",
            "💻 Intuitive Web App – Upload and view scan results in a clean, responsive UI.",
            "🔗 ML-Backend Integration – Flask deep learning API connected seamlessly to Node.js backend.",
            "🗄️ Secure File Handling – Stores uploaded MRI scans safely using Multer on the server.",
            "🌐 Anywhere Access – Works smoothly on desktop, tablet, and mobile browsers."
        ]


    },
]


export const CertificatesList = [
    TechvantoML,
    Infernoverse,
    Supervised,
    NeuralAndDL


]