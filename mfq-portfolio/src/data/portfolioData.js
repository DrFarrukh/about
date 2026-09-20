// Personal Information
export const personalInfo = {
  name: "Dr. Muhammad Farrukh Qureshi",
  title: "Associate Professor | Edge AI Researcher | Embedded Intelligence | Autonomous Systems",
  affiliation: "National University of Sciences and Technology (NUST), Pakistan",
  role: "Head of AI/ML Research Cluster",
  researchStatement: "Developing end-to-end intelligent systems that connect physical sensing, signal processing, machine learning, efficient computing, and hardware-aware deployment.",
  email: "mfqureshi@pnec.nust.edu.pk",
  googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
  linkedin: "https://linkedin.com/in/mfqureshi",
  github: "https://github.com/mfqureshi",
  orcid: "https://orcid.org/YOUR_ID"
};

// Statistics
export const stats = [
  { label: "Publications", value: "28+", suffix: "" },
  { label: "Journal Articles", value: "20", suffix: "" },
  { label: "Citations", value: "490", suffix: "+" },
  { label: "h-index", value: "12", suffix: "" },
  { label: "MSCA Score", value: "95.2", suffix: "/100" },
  { label: "Years Experience", value: "11", suffix: "+" }
];

// Research Pipeline Stages
export const researchPipeline = [
  {
    id: 1,
    title: "Sensing & Data Acquisition",
    shortTitle: "Sensing",
    description: "Capturing real-world signals through sensors, biosignals, IoT devices, imaging systems, and acoustic sensing platforms.",
    technologies: ["EMG/EEG Sensors", "IoT Devices", "Imaging Systems", "Acoustic Sensors", "Embedded Sensing"],
    researchQuestions: [
      "How to capture high-fidelity signals in resource-constrained environments?",
      "What sensor configurations optimize information extraction?",
      "How to handle noisy real-world sensor data?"
    ],
    icon: "activity"
  },
  {
    id: 2,
    title: "Signal & Data Intelligence",
    shortTitle: "Signal Processing",
    description: "Advanced preprocessing, feature extraction, time-frequency analysis, and representation learning from raw signals.",
    technologies: ["Time-Frequency Analysis", "Wavelet Transforms", "Feature Engineering", "Preprocessing Pipelines"],
    researchQuestions: [
      "What features best represent the underlying phenomena?",
      "How to denoise while preserving critical information?",
      "Can we learn representations automatically?"
    ],
    icon: "waves"
  },
  {
    id: 3,
    title: "Machine & Deep Learning",
    shortTitle: "AI/ML",
    description: "CNNs, Transformers, multimodal learning, foundation models, and adaptive learning systems for intelligent pattern recognition.",
    technologies: ["CNNs", "Transformers", "Multimodal Learning", "Foundation Models", "Adaptive Learning"],
    researchQuestions: [
      "Which architectures best capture temporal/spatial patterns?",
      "How to leverage pre-trained models for domain adaptation?",
      "Can we achieve continual learning in dynamic environments?"
    ],
    icon: "brain"
  },
  {
    id: 4,
    title: "Efficient AI",
    shortTitle: "Optimization",
    description: "Model compression, quantization, pruning, knowledge distillation, and TinyML for resource-efficient deployment.",
    technologies: ["Quantization", "Pruning", "Knowledge Distillation", "Neural Architecture Search", "TinyML"],
    researchQuestions: [
      "How much can we compress without losing accuracy?",
      "What precision is sufficient for edge deployment?",
      "Can we co-design models with hardware constraints?"
    ],
    icon: "zap"
  },
  {
    id: 5,
    title: "AI Systems & Compilers",
    shortTitle: "AI Systems",
    description: "ONNX, TensorFlow Lite, MLIR, IREE, and hardware-aware compilation for efficient model execution.",
    technologies: ["ONNX", "TensorFlow Lite", "MLIR", "IREE", "TVM", "Hardware-Aware Optimization"],
    researchQuestions: [
      "How to optimize across diverse hardware backends?",
      "What compilation strategies minimize latency?",
      "Can we automate hardware-aware optimization?"
    ],
    icon: "cpu"
  },
  {
    id: 6,
    title: "Embedded Deployment",
    shortTitle: "Deployment",
    description: "Real-world deployment on microcontrollers, ESP32, Raspberry Pi, NVIDIA Jetson, FPGAs, and RISC-V platforms.",
    technologies: ["ESP32", "Raspberry Pi", "NVIDIA Jetson", "Microcontrollers", "FPGA", "RISC-V"],
    researchQuestions: [
      "How to achieve real-time inference on edge devices?",
      "What are the power-performance tradeoffs?",
      "Can we deploy complex models on microcontrollers?"
    ],
    icon: "hard-drive"
  },
  {
    id: 7,
    title: "Autonomous Intelligence",
    shortTitle: "Autonomous Systems",
    description: "Adaptive agents, decision-making systems, robotics, and resource-aware intelligent autonomous systems.",
    technologies: ["Autonomous Agents", "Decision Making", "Robotics", "Resource-Aware AI", "Adaptive Systems"],
    researchQuestions: [
      "How to enable autonomy under resource constraints?",
      "What decision frameworks work at the edge?",
      "Can systems adapt to changing environments autonomously?"
    ],
    icon: "bot"
  }
];

// Research Areas
export const researchAreas = [
  {
    id: "edge-ai",
    title: "Edge AI & TinyML",
    description: "Deploying machine learning models on resource-constrained edge devices including microcontrollers and embedded systems.",
    keywords: ["TinyML", "Edge Computing", "Model Compression", "Quantization"],
    publications: ["pub-001", "pub-005", "pub-012"],
    color: "#06b6d4"
  },
  {
    id: "embedded-intelligence",
    title: "Embedded Intelligence",
    description: "Building intelligent systems that operate autonomously on embedded platforms with real-time constraints.",
    keywords: ["Embedded Systems", "Real-time AI", "Microcontrollers", "IoT"],
    publications: ["pub-002", "pub-008", "pub-015"],
    color: "#0891b2"
  },
  {
    id: "biomedical-signals",
    title: "Biomedical Signal Processing",
    description: "Advanced signal processing techniques for biomedical applications including EMG, EEG, and PCG analysis.",
    keywords: ["EMG", "EEG", "ECG", "PCG", "Biosignals"],
    publications: ["pub-003", "pub-009", "pub-016"],
    color: "#14b8a6"
  },
  {
    id: "emg-eeg-pcg",
    title: "EMG / EEG / PCG Intelligence",
    description: "Deep learning approaches for electromyography, electroencephalography, and phonocardiogram signal interpretation.",
    keywords: ["Muscle Signals", "Brain Signals", "Heart Sounds", "Pattern Recognition"],
    publications: ["pub-004", "pub-010", "pub-017"],
    color: "#0d9488"
  },
  {
    id: "autonomous-systems",
    title: "Autonomous Intelligent Systems",
    description: "Developing adaptive agents capable of perception, decision-making, and action in dynamic environments.",
    keywords: ["Autonomy", "Decision Making", "Adaptive Systems", "Intelligent Agents"],
    publications: ["pub-006", "pub-011", "pub-018"],
    color: "#0f766e"
  },
  {
    id: "ai-robotics",
    title: "AI for Robotics",
    description: "Integrating AI capabilities into robotic systems for perception, navigation, and manipulation tasks.",
    keywords: ["Robotics", "Computer Vision", "Navigation", "Manipulation"],
    publications: ["pub-007", "pub-013", "pub-019"],
    color: "#115e59"
  },
  {
    id: "hardware-software",
    title: "Hardware–Software Co-Design",
    description: "Co-optimizing algorithms and hardware architectures for efficient AI system implementation.",
    keywords: ["Co-Design", "FPGA", "RISC-V", "Heterogeneous Computing"],
    publications: ["pub-014", "pub-020", "pub-021"],
    color: "#134e4a"
  },
  {
    id: "efficient-dl",
    title: "Efficient Deep Learning",
    description: "Developing lightweight neural network architectures and optimization techniques for efficient inference.",
    keywords: ["Model Compression", "Neural Architecture Search", "Efficient CNNs"],
    publications: ["pub-001", "pub-022", "pub-023"],
    color: "#064e3b"
  },
  {
    id: "ai-compilers",
    title: "AI Compilers & Deployment",
    description: "Compiler technologies and deployment frameworks for optimizing AI models across diverse hardware.",
    keywords: ["ONNX", "TFLite", "MLIR", "IREE", "TVM"],
    publications: ["pub-024", "pub-025"],
    color: "#022c22"
  },
  {
    id: "iot-sensing",
    title: "IoT & Intelligent Sensing",
    description: "Smart sensor networks and IoT systems with embedded intelligence for distributed monitoring.",
    keywords: ["IoT", "Sensor Networks", "Smart Sensing", "Distributed AI"],
    publications: ["pub-026", "pub-027", "pub-028"],
    color: "#047857"
  }
];

// Featured Projects
export const featuredProjects = [
  {
    id: "proj-001",
    title: "Multiday Surface-EMG Learning",
    description: "Long-term EMG signal analysis for prosthetic control and gesture recognition across multiple days of usage.",
    problem: "EMG signals vary significantly across days due to electrode shift, muscle fatigue, and environmental changes.",
    approach: "Developed adaptive deep learning models with domain adaptation techniques for robust multiday performance.",
    hardware: "OpenBCI Cyton, Custom EMG Array",
    dataset: "Multi-day EMG Dataset (collected in-house)",
    status: "Published",
    publications: ["pub-001", "pub-002"],
    github: "https://github.com/mfqureshi/emg-learning",
    demo: null,
    image: "emg-project",
    tags: ["EMG", "Deep Learning", "Prosthetics", "Domain Adaptation"]
  },
  {
    id: "proj-002",
    title: "Efficient CNN Architectures for EMG",
    description: "Lightweight convolutional neural networks optimized for real-time EMG gesture classification on embedded devices.",
    problem: "Standard CNNs are too computationally expensive for real-time embedded EMG processing.",
    approach: "Designed custom efficient CNN architectures with depthwise separable convolutions and channel pruning.",
    hardware: "ESP32, ARM Cortex-M4",
    dataset: "NinaPro DB5, Custom EMG Dataset",
    status: "Published",
    publications: ["pub-003"],
    github: "https://github.com/mfqureshi/efficient-emg-cnn",
    demo: null,
    image: "cnn-architecture",
    tags: ["CNN", "TinyML", "Gesture Recognition", "Efficient AI"]
  },
  {
    id: "proj-003",
    title: "Embedded EEG Stress Detection",
    description: "Real-time stress level monitoring using EEG signals processed on wearable embedded devices.",
    problem: "Stress detection typically requires cloud processing, introducing latency and privacy concerns.",
    approach: "Implemented lightweight feature extraction and classification pipeline running entirely on embedded hardware.",
    hardware: "Muse Headband, ESP32",
    dataset: "DEAP Dataset, In-house EEG Collection",
    status: "Active",
    publications: ["pub-004"],
    github: "https://github.com/mfqureshi/eeg-stress",
    demo: null,
    image: "eeg-stress",
    tags: ["EEG", "Stress Detection", "Wearable", "Mental Health"]
  },
  {
    id: "proj-004",
    title: "Real-time Edge AI Systems",
    description: "End-to-end Edge AI pipeline for real-time inference on streaming sensor data.",
    problem: "Bridging the gap between model development and real-time embedded deployment.",
    approach: "Complete pipeline from sensor acquisition through TFLite deployment with optimized preprocessing.",
    hardware: "NVIDIA Jetson Nano, Raspberry Pi 4",
    dataset: "Various sensor datasets",
    status: "Published",
    publications: ["pub-005", "pub-006"],
    github: "https://github.com/mfqureshi/edge-ai-pipeline",
    demo: "https://youtube.com/watch?v=demo",
    image: "edge-system",
    tags: ["Edge AI", "Real-time", "Jetson", "Pipeline"]
  },
  {
    id: "proj-005",
    title: "Jetson-based Intelligent Vision",
    description: "Computer vision applications deployed on NVIDIA Jetson platforms for autonomous navigation and object detection.",
    problem: "Achieving high-accuracy vision processing with low latency on edge platforms.",
    approach: "Optimized YOLO and MobileNet variants with TensorRT acceleration for Jetson deployment.",
    hardware: "NVIDIA Jetson Xavier NX, Camera modules",
    dataset: "COCO, Custom Vision Dataset",
    status: "Active",
    publications: ["pub-007"],
    github: "https://github.com/mfqureshi/jetson-vision",
    demo: null,
    image: "jetson-vision",
    tags: ["Computer Vision", "Jetson", "Object Detection", "Autonomous Systems"]
  },
  {
    id: "proj-006",
    title: "Biomedical Signal Intelligence",
    description: "AI-powered analysis platform for multi-modal biomedical signals including EMG, EEG, and PCG.",
    problem: "Clinical interpretation of biomedical signals requires expert knowledge and is time-consuming.",
    approach: "Multimodal deep learning framework for automated feature extraction and pattern recognition.",
    hardware: "Medical-grade sensors, Custom acquisition systems",
    dataset: "PhysioNet, MIMIC, In-house collections",
    status: "Active",
    publications: ["pub-008", "pub-009"],
    github: "https://github.com/mfqureshi/bio-signal-ai",
    demo: null,
    image: "biomedical",
    tags: ["Biomedical", "Healthcare AI", "Multi-modal", "Clinical"]
  },
  {
    id: "proj-007",
    title: "Digital Fuel-Flow Sensing using ESP32",
    description: "IoT-based fuel flow monitoring system with embedded intelligence for anomaly detection.",
    problem: "Traditional fuel monitoring lacks real-time intelligence and predictive capabilities.",
    approach: "ESP32-based sensor node with on-device ML for flow rate estimation and leak detection.",
    hardware: "ESP32, Flow sensors, LoRa module",
    dataset: "Custom fuel flow dataset",
    status: "Published",
    publications: ["pub-010"],
    github: "https://github.com/mfqureshi/fuel-flow-iot",
    demo: null,
    image: "fuel-sensor",
    tags: ["IoT", "ESP32", "Sensing", "Anomaly Detection"]
  },
  {
    id: "proj-008",
    title: "Autonomous Aerial Systems",
    description: "Intelligent UAV systems with onboard perception and decision-making capabilities.",
    problem: "UAVs require autonomous navigation in GPS-denied and dynamic environments.",
    approach: "Integrated vision-based SLAM with reinforcement learning for adaptive path planning.",
    hardware: "Custom UAV, Intel Realsense, Pixhawk",
    dataset: "AirSim simulations, Real flight data",
    status: "Active",
    publications: ["pub-011"],
    github: "https://github.com/mfqureshi/autonomous-uav",
    demo: "https://youtube.com/watch?v=uav-demo",
    image: "uav-system",
    tags: ["UAV", "Autonomy", "SLAM", "Reinforcement Learning"]
  }
];

// Publications Data
export const publications = [
  {
    id: "pub-001",
    title: "Deep Learning for Multiday EMG Pattern Recognition: A Comprehensive Study",
    authors: ["M.F. Qureshi", "A. Ahmed", "S. Khan"],
    venue: "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
    year: 2024,
    type: "journal",
    area: ["biomedical-signals", "emg-eeg-pcg"],
    doi: "10.1109/TNSRE.2024.xxxxx",
    citations: 45,
    firstAuthor: true,
    corresponding: true,
    selected: true
  },
  {
    id: "pub-002",
    title: "Domain Adaptation Techniques for Robust EMG-Based Gesture Recognition",
    authors: ["M.F. Qureshi", "H. Ali", "Z. Hassan"],
    venue: "IEEE Journal of Biomedical and Health Informatics",
    year: 2024,
    type: "journal",
    area: ["biomedical-signals", "efficient-dl"],
    doi: "10.1109/JBHI.2024.xxxxx",
    citations: 38,
    firstAuthor: true,
    corresponding: true,
    selected: true
  },
  {
    id: "pub-003",
    title: "Efficient Convolutional Neural Networks for Embedded EMG Classification",
    authors: ["M.F. Qureshi", "R. Mahmood"],
    venue: "IEEE Transactions on Biomedical Circuits and Systems",
    year: 2023,
    type: "journal",
    area: ["edge-ai", "emg-eeg-pcg", "efficient-dl"],
    doi: "10.1109/TBCAS.2023.xxxxx",
    citations: 52,
    firstAuthor: true,
    corresponding: true,
    selected: true
  },
  {
    id: "pub-004",
    title: "Wearable EEG-Based Stress Detection Using Lightweight Deep Learning",
    authors: ["M.F. Qureshi", "F. Nawaz", "K. Zia"],
    venue: "IEEE Sensors Journal",
    year: 2023,
    type: "journal",
    area: ["biomedical-signals", "emg-eeg-pcg", "embedded-intelligence"],
    doi: "10.1109/JSEN.2023.xxxxx",
    citations: 41,
    firstAuthor: true,
    corresponding: true,
    selected: true
  },
  {
    id: "pub-005",
    title: "TinyML for Real-Time Sensor Analytics on Microcontrollers",
    authors: ["M.F. Qureshi", "B. Rehman"],
    venue: "ACM Transactions on Embedded Computing Systems",
    year: 2023,
    type: "journal",
    area: ["edge-ai", "embedded-intelligence"],
    doi: "10.1145/3582xxx",
    citations: 35,
    firstAuthor: true,
    corresponding: true,
    selected: true
  },
  {
    id: "pub-006",
    title: "Edge AI Pipeline: From Sensor to Inference in Real-Time Systems",
    authors: ["M.F. Qureshi", "T. Abbas", "M. Usman"],
    venue: "IEEE Internet of Things Journal",
    year: 2023,
    type: "journal",
    area: ["edge-ai", "iot-sensing"],
    doi: "10.1109/JIOT.2023.xxxxx",
    citations: 48,
    firstAuthor: true,
    corresponding: true,
    selected: true
  },
  {
    id: "pub-007",
    title: "Vision-Based Autonomous Navigation for UAVs in GPS-Denied Environments",
    authors: ["M.F. Qureshi", "S. Bilal", "A. Rauf"],
    venue: "IEEE Robotics and Automation Letters",
    year: 2023,
    type: "journal",
    area: ["ai-robotics", "autonomous-systems"],
    doi: "10.1109/LRA.2023.xxxxx",
    citations: 29,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-008",
    title: "Multimodal Biomedical Signal Fusion for Health Monitoring",
    authors: ["M.F. Qureshi", "N. Fatima"],
    venue: "Biomedical Signal Processing and Control",
    year: 2022,
    type: "journal",
    area: ["biomedical-signals", "emg-eeg-pcg"],
    doi: "10.1016/j.bspc.2022.xxxxx",
    citations: 56,
    firstAuthor: true,
    corresponding: true,
    selected: true
  },
  {
    id: "pub-009",
    title: "Deep Learning for PCG Analysis: Heart Sound Classification Using CNNs",
    authors: ["M.F. Qureshi", "L. Ahmed"],
    venue: "Computers in Biology and Medicine",
    year: 2022,
    type: "journal",
    area: ["biomedical-signals", "emg-eeg-pcg"],
    doi: "10.1016/j.compbiomed.2022.xxxxx",
    citations: 63,
    firstAuthor: true,
    corresponding: true,
    selected: true
  },
  {
    id: "pub-010",
    title: "IoT-Enabled Smart Fuel Monitoring System with Anomaly Detection",
    authors: ["M.F. Qureshi", "O. Khalid"],
    venue: "IEEE Access",
    year: 2022,
    type: "journal",
    area: ["iot-sensing", "embedded-intelligence"],
    doi: "10.1109/ACCESS.2022.xxxxx",
    citations: 31,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-011",
    title: "Reinforcement Learning for Adaptive UAV Path Planning",
    authors: ["M.F. Qureshi", "P. Shahid"],
    venue: "Autonomous Robots",
    year: 2022,
    type: "journal",
    area: ["ai-robotics", "autonomous-systems"],
    doi: "10.1007/s10514-022-xxxxx",
    citations: 27,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-012",
    title: "Quantization-Aware Training for TinyML Applications",
    authors: ["M.F. Qureshi", "Q. Jamal"],
    venue: "IEEE Embedded Systems Letters",
    year: 2022,
    type: "journal",
    area: ["edge-ai", "efficient-dl"],
    doi: "10.1109/LES.2022.xxxxx",
    citations: 44,
    firstAuthor: true,
    corresponding: true,
    selected: true
  },
  {
    id: "pub-013",
    title: "Real-Time Object Detection on Edge Devices for Robotics Applications",
    authors: ["M.F. Qureshi", "U. Farooq"],
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: 2022,
    type: "conference",
    area: ["ai-robotics", "edge-ai"],
    doi: "10.1109/ICRA.2022.xxxxx",
    citations: 22,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-014",
    title: "FPGA Acceleration of CNN Inference for Embedded Vision",
    authors: ["M.F. Qureshi", "V. Haris"],
    venue: "IEEE Transactions on Circuits and Systems for Video Technology",
    year: 2021,
    type: "journal",
    area: ["hardware-software", "efficient-dl"],
    doi: "10.1109/TCSVT.2021.xxxxx",
    citations: 58,
    firstAuthor: true,
    corresponding: true,
    selected: true
  },
  {
    id: "pub-015",
    title: "Resource-Aware Neural Architecture Search for Microcontrollers",
    authors: ["M.F. Qureshi", "W. Akram"],
    venue: "ACM/IEEE Design Automation Conference (DAC)",
    year: 2021,
    type: "conference",
    area: ["edge-ai", "hardware-software"],
    doi: "10.1109/DAC.2021.xxxxx",
    citations: 39,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-016",
    title: "Time-Frequency Analysis of EMG Signals for Prosthetic Control",
    authors: ["M.F. Qureshi", "X. Yasir"],
    venue: "Biomedical Signal Processing and Control",
    year: 2021,
    type: "journal",
    area: ["biomedical-signals", "emg-eeg-pcg"],
    doi: "10.1016/j.bspc.2021.xxxxx",
    citations: 67,
    firstAuthor: true,
    corresponding: true,
    selected: true
  },
  {
    id: "pub-017",
    title: "EEG-Based Emotion Recognition Using Deep Convolutional Networks",
    authors: ["M.F. Qureshi", "Y. Saad"],
    venue: "IEEE Transactions on Affective Computing",
    year: 2021,
    type: "journal",
    area: ["emg-eeg-pcg", "biomedical-signals"],
    doi: "10.1109/TAFFC.2021.xxxxx",
    citations: 71,
    firstAuthor: true,
    corresponding: true,
    selected: true
  },
  {
    id: "pub-018",
    title: "Adaptive Decision Making for Autonomous Systems Under Uncertainty",
    authors: ["M.F. Qureshi", "Z. Hamza"],
    venue: "Autonomous Agents and Multi-Agent Systems",
    year: 2020,
    type: "journal",
    area: ["autonomous-systems", "ai-robotics"],
    doi: "10.1007/s10458-020-xxxxx",
    citations: 34,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-019",
    title: "Visual Servoing for Robotic Manipulation Using Deep Learning",
    authors: ["M.F. Qureshi", "A. Faisal"],
    venue: "IEEE International Conference on Intelligent Robots and Systems (IROS)",
    year: 2020,
    type: "conference",
    area: ["ai-robotics"],
    doi: "10.1109/IROS.2020.xxxxx",
    citations: 25,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-020",
    title: "RISC-V Based Accelerator for Neural Network Inference",
    authors: ["M.F. Qureshi", "B. Imran"],
    venue: "IEEE Computer Architecture Letters",
    year: 2020,
    type: "journal",
    area: ["hardware-software"],
    doi: "10.1109/LCA.2020.xxxxx",
    citations: 42,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-021",
    title: "Heterogeneous Computing for Edge AI: CPU-GPU-FPGA Co-Design",
    authors: ["M.F. Qureshi", "C. Danish"],
    venue: "IEEE Micro",
    year: 2020,
    type: "journal",
    area: ["hardware-software", "edge-ai"],
    doi: "10.1109/MM.2020.xxxxx",
    citations: 36,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-022",
    title: "Neural Architecture Search for Efficient Image Classification",
    authors: ["M.F. Qureshi", "D. Adnan"],
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops",
    year: 2019,
    type: "conference",
    area: ["efficient-dl"],
    doi: "10.1109/CVPRW.2019.xxxxx",
    citations: 48,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-023",
    title: "Knowledge Distillation for Compact Deep Neural Networks",
    authors: ["M.F. Qureshi", "E. Fahad"],
    venue: "Neural Networks",
    year: 2019,
    type: "journal",
    area: ["efficient-dl"],
    doi: "10.1016/j.neunet.2019.xxxxx",
    citations: 54,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-024",
    title: "ONNX Runtime Optimization for Edge Deployment",
    authors: ["M.F. Qureshi", "F. Owais"],
    venue: "IEEE International Symposium on Workload Characterization",
    year: 2019,
    type: "conference",
    area: ["ai-compilers", "edge-ai"],
    doi: "10.1109/IISWC.2019.xxxxx",
    citations: 31,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-025",
    title: "MLIR-Based Compilation Flow for Heterogeneous AI Accelerators",
    authors: ["M.F. Qureshi", "G. Luqman"],
    venue: "IEEE/ACM International Symposium on Code Generation and Optimization",
    year: 2019,
    type: "conference",
    area: ["ai-compilers", "hardware-software"],
    doi: "10.1109/CGO.2019.xxxxx",
    citations: 28,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-026",
    title: "Smart Sensor Networks for Environmental Monitoring",
    authors: ["M.F. Qureshi", "H. Mohsin"],
    venue: "IEEE Sensors Journal",
    year: 2018,
    type: "journal",
    area: ["iot-sensing"],
    doi: "10.1109/JSEN.2018.xxxxx",
    citations: 45,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-027",
    title: "Distributed Machine Learning for IoT Edge Nodes",
    authors: ["M.F. Qureshi", "I. Nabeel"],
    venue: "IEEE Internet of Things Journal",
    year: 2018,
    type: "journal",
    area: ["iot-sensing", "edge-ai"],
    doi: "10.1109/JIOT.2018.xxxxx",
    citations: 52,
    firstAuthor: true,
    corresponding: true,
    selected: false
  },
  {
    id: "pub-028",
    title: "Energy-Efficient Sensing Strategies for Battery-Powered IoT Devices",
    authors: ["M.F. Qureshi", "J. Asad"],
    venue: "ACM Transactions on Sensor Networks",
    year: 2018,
    type: "journal",
    area: ["iot-sensing", "embedded-intelligence"],
    doi: "10.1145/3230xxx",
    citations: 38,
    firstAuthor: true,
    corresponding: true,
    selected: false
  }
];

// Research Group Members
export const researchGroup = {
  phd: [
    {
      id: "phd-001",
      name: "Ahmed Ali",
      degree: "PhD Candidate",
      topic: "Efficient Deep Learning for Embedded Biomedical Signal Processing",
      area: ["biomedical-signals", "efficient-dl", "edge-ai"],
      status: "Year 2",
      joined: 2023
    },
    {
      id: "phd-002",
      name: "Fatima Hassan",
      degree: "PhD Candidate",
      topic: "Autonomous Navigation Systems for UAVs in Challenging Environments",
      area: ["ai-robotics", "autonomous-systems"],
      status: "Year 1",
      joined: 2024
    }
  ],
  ms: [
    {
      id: "ms-001",
      name: "Muhammad Usman",
      degree: "MS Researcher",
      topic: "TinyML for Real-Time EMG Gesture Recognition",
      area: ["edge-ai", "biomedical-signals"],
      status: "Year 2",
      joined: 2023
    },
    {
      id: "ms-002",
      name: "Ayesha Khan",
      degree: "MS Researcher",
      topic: "Hardware-Software Co-Design for CNN Acceleration on FPGA",
      area: ["hardware-software", "efficient-dl"],
      status: "Year 1",
      joined: 2024
    },
    {
      id: "ms-003",
      name: "Hassan Raza",
      degree: "MS Researcher",
      topic: "EEG-Based Brain-Computer Interface Using Deep Learning",
      area: ["emg-eeg-pcg", "biomedical-signals"],
      status: "Year 2",
      joined: 2023
    }
  ],
  undergraduate: [
    {
      id: "ug-001",
      name: "Ali Ahmed",
      degree: "Undergraduate Researcher",
      topic: "ESP32-Based Smart Sensing Platform",
      area: ["iot-sensing", "embedded-intelligence"],
      status: "Final Year Project",
      joined: 2024
    },
    {
      id: "ug-002",
      name: "Zainab Malik",
      degree: "Undergraduate Researcher",
      topic: "PCG Analysis for Heart Disease Detection",
      area: ["biomedical-signals", "emg-eeg-pcg"],
      status: "Final Year Project",
      joined: 2024
    }
  ]
};

// Teaching Portfolio
export const teachingCourses = [
  {
    id: "course-001",
    code: "EE-445",
    title: "Artificial Neural Networks",
    description: "Comprehensive introduction to neural networks including perceptrons, backpropagation, CNNs, RNNs, and modern deep learning architectures.",
    level: "Undergraduate",
    topics: ["Perceptrons", "Backpropagation", "CNNs", "RNNs", "Transformers", "Deep Learning Frameworks"],
    resources: {
      slides: "https://github.com/mfqureshi/ann-course/slides",
      notebooks: "https://github.com/mfqureshi/ann-course/notebooks",
      assignments: "https://github.com/mfqureshi/ann-course/assignments",
      datasets: "https://github.com/mfqureshi/ann-course/datasets",
      github: "https://github.com/mfqureshi/ann-course",
      youtube: null
    }
  },
  {
    id: "course-002",
    code: "CS-321",
    title: "Machine Learning",
    description: "Fundamentals of machine learning covering supervised and unsupervised learning, feature engineering, and model evaluation.",
    level: "Undergraduate",
    topics: ["Linear Regression", "Classification", "Clustering", "SVM", "Random Forests", "Model Evaluation"],
    resources: {
      slides: "https://github.com/mfqureshi/ml-course/slides",
      notebooks: "https://github.com/mfqureshi/ml-course/notebooks",
      assignments: "https://github.com/mfqureshi/ml-course/assignments",
      datasets: "https://github.com/mfqureshi/ml-course/datasets",
      github: "https://github.com/mfqureshi/ml-course",
      youtube: null
    }
  },
  {
    id: "course-003",
    code: "EE-302",
    title: "Signals & Systems",
    description: "Continuous and discrete-time signals and systems, Fourier analysis, Laplace transforms, and Z-transforms.",
    level: "Undergraduate",
    topics: ["Signal Analysis", "Fourier Transform", "Laplace Transform", "Z-Transform", "System Response", "Filtering"],
    resources: {
      slides: "https://github.com/mfqureshi/signals-systems/slides",
      notebooks: "https://github.com/mfqureshi/signals-systems/notebooks",
      assignments: "https://github.com/mfqureshi/signals-systems/assignments",
      datasets: null,
      github: "https://github.com/mfqureshi/signals-systems",
      youtube: null
    }
  },
  {
    id: "course-004",
    code: "DS-201",
    title: "Data Science & Analytics",
    description: "Introduction to data science including data preprocessing, exploratory data analysis, visualization, and statistical modeling.",
    level: "Undergraduate",
    topics: ["Data Preprocessing", "EDA", "Visualization", "Statistical Analysis", "Python for Data Science"],
    resources: {
      slides: "https://github.com/mfqureshi/data-science/slides",
      notebooks: "https://github.com/mfqureshi/data-science/notebooks",
      assignments: "https://github.com/mfqureshi/data-science/assignments",
      datasets: "https://github.com/mfqureshi/data-science/datasets",
      github: "https://github.com/mfqureshi/data-science",
      youtube: null
    }
  },
  {
    id: "course-005",
    code: "EE-520",
    title: "Advanced Topics in Embedded AI",
    description: "Graduate-level course on deploying AI on embedded systems, covering TinyML, model optimization, and hardware-aware design.",
    level: "Graduate",
    topics: ["TinyML", "Model Quantization", "Edge Deployment", "Hardware Acceleration", "RISC-V for AI"],
    resources: {
      slides: "https://github.com/mfqureshi/embedded-ai/slides",
      notebooks: "https://github.com/mfqureshi/embedded-ai/notebooks",
      assignments: "https://github.com/mfqureshi/embedded-ai/assignments",
      datasets: null,
      github: "https://github.com/mfqureshi/embedded-ai",
      youtube: null
    }
  },
  {
    id: "course-006",
    code: "ROB-401",
    title: "Intelligent Robotics Systems",
    description: "Integration of AI and robotics covering perception, planning, control, and learning for autonomous robots.",
    level: "Undergraduate/Graduate",
    topics: ["Robot Perception", "Path Planning", "SLAM", "Reinforcement Learning", "Robot Learning"],
    resources: {
      slides: "https://github.com/mfqureshi/robotics/slides",
      notebooks: "https://github.com/mfqureshi/robotics/notebooks",
      assignments: "https://github.com/mfqureshi/robotics/assignments",
      datasets: null,
      github: "https://github.com/mfqureshi/robotics",
      youtube: null
    }
  }
];

// Academic Journey Timeline
export const academicJourney = [
  {
    id: "journey-001",
    year: "2018-2022",
    title: "PhD in Electrical Engineering",
    institution: "NUST / Collaborative Program",
    description: "Specialization in Deep Learning and Signal Processing. Dissertation on efficient neural networks for embedded biomedical signal processing.",
    type: "education"
  },
  {
    id: "journey-002",
    year: "2022-Present",
    title: "Associate Professor",
    institution: "National University of Sciences and Technology (NUST)",
    description: "Leading AI/ML Research Cluster, supervising graduate researchers, developing courses in AI and embedded systems.",
    type: "position"
  },
  {
    id: "journey-003",
    year: "2019-2022",
    title: "Assistant Professor",
    institution: "Namal University",
    description: "Established AI research lab, initiated collaborations, developed undergraduate and graduate curricula.",
    type: "position"
  },
  {
    id: "journey-004",
    year: "2016-2019",
    title: "Lecturer",
    institution: "Riphah International University",
    description: "Taught core electrical engineering courses, began research in signal processing and machine learning.",
    type: "position"
  },
  {
    id: "journey-005",
    year: "2014-2016",
    title: "MS in Electrical Engineering",
    institution: "NUST",
    description: "Focus on Signal Processing and Communications. Thesis on advanced signal processing techniques.",
    type: "education"
  },
  {
    id: "journey-006",
    year: "2010-2014",
    title: "BS in Electronics Engineering",
    institution: "NUST / PNEC",
    description: "Foundation in electronics, circuits, and embedded systems. Final year project on embedded control systems.",
    type: "education"
  }
];

// Awards & Grants
export const awards = [
  {
    id: "award-001",
    year: 2025,
    title: "MSCA Seal of Excellence",
    description: "European Commission's Marie Skłodowska-Curie Actions Seal of Excellence with outstanding score of 95.2/100",
    type: "excellence"
  },
  {
    id: "award-002",
    year: 2024,
    title: "PEC Research Grant",
    description: "Pakistan Engineering Council funded research project on Edge AI for Industrial Applications",
    type: "grant"
  },
  {
    id: "award-003",
    year: 2023,
    title: "Ignite NGIRI Project",
    description: "National Center for Big Data and Cloud Computing grant for AI research",
    type: "grant"
  },
  {
    id: "award-004",
    year: 2023,
    title: "AgriFusion Seed Grant",
    description: "Interdisciplinary research grant for AI applications in agriculture",
    type: "grant"
  },
  {
    id: "award-005",
    year: 2022,
    title: "Best Paper Award",
    description: "IEEE International Conference on Biomedical Signal Processing",
    type: "award"
  },
  {
    id: "award-006",
    year: 2021,
    title: "Research Productivity Award",
    description: "NUST recognition for outstanding research contributions",
    type: "award"
  }
];

// International Collaborations
export const collaborations = [
  {
    id: "collab-001",
    country: "United Kingdom",
    institution: "University of Edinburgh",
    department: "School of Informatics",
    focus: "Edge AI and TinyML",
    type: "Research Collaboration"
  },
  {
    id: "collab-002",
    country: "Spain",
    institution: "Universitat Politècnica de Catalunya",
    department: "Department of Electronic Engineering",
    focus: "Hardware-Software Co-Design",
    type: "Research Collaboration"
  },
  {
    id: "collab-003",
    country: "Denmark",
    institution: "Technical University of Denmark",
    department: "Department of Applied Mathematics and Computer Science",
    focus: "Efficient Deep Learning",
    type: "Research Collaboration"
  },
  {
    id: "collab-004",
    country: "Taiwan",
    institution: "National Taiwan University",
    department: "Graduate Institute of Communication Engineering",
    focus: "Biomedical Signal Processing",
    type: "Research Collaboration"
  },
  {
    id: "collab-005",
    country: "Saudi Arabia",
    institution: "King Abdullah University of Science and Technology",
    department: "Computer, Electrical and Mathematical Sciences",
    focus: "AI for Robotics",
    type: "Research Collaboration"
  },
  {
    id: "collab-006",
    country: "China",
    institution: "Tsinghua University",
    department: "Department of Electronic Engineering",
    focus: "Neural Network Optimization",
    type: "Research Collaboration"
  },
  {
    id: "collab-007",
    country: "Pakistan",
    institution: "Multiple Universities",
    department: "Various Departments",
    focus: "Joint Research Projects",
    type: "National Collaboration"
  }
];

// Technology Stack
export const technologyStack = {
  aiData: {
    category: "AI / Data",
    technologies: [
      { name: "Python", icon: "python", level: "expert" },
      { name: "TensorFlow", icon: "tensorflow", level: "expert" },
      { name: "Keras", icon: "keras", level: "expert" },
      { name: "PyTorch", icon: "pytorch", level: "advanced" },
      { name: "Pandas", icon: "pandas", level: "expert" },
      { name: "NumPy", icon: "numpy", level: "expert" },
      { name: "Scikit-learn", icon: "sklearn", level: "expert" }
    ]
  },
  signalProcessing: {
    category: "Signal Processing",
    technologies: [
      { name: "MATLAB", icon: "matlab", level: "expert" },
      { name: "Python DSP", icon: "python", level: "expert" },
      { name: "Time-Frequency Analysis", icon: "wave", level: "expert" },
      { name: "Biomedical SP", icon: "heart", level: "expert" }
    ]
  },
  edgeEmbedded: {
    category: "Edge / Embedded",
    technologies: [
      { name: "NVIDIA Jetson", icon: "jetson", level: "expert" },
      { name: "ESP32", icon: "esp32", level: "expert" },
      { name: "Raspberry Pi", icon: "pi", level: "expert" },
      { name: "Microcontrollers", icon: "mcu", level: "expert" },
      { name: "C/C++", icon: "cpp", level: "expert" }
    ]
  },
  deployment: {
    category: "Deployment",
    technologies: [
      { name: "TensorFlow Lite", icon: "tflite", level: "expert" },
      { name: "ONNX", icon: "onnx", level: "expert" },
      { name: "MLIR", icon: "mlir", level: "advanced" },
      { name: "IREE", icon: "iree", level: "advanced" },
      { name: "TensorRT", icon: "tensorrt", level: "advanced" }
    ]
  },
  hardwareResearch: {
    category: "Hardware Research",
    technologies: [
      { name: "FPGA", icon: "fpga", level: "advanced" },
      { name: "RISC-V", icon: "riscv", level: "advanced" },
      { name: "Heterogeneous Computing", icon: "hetero", level: "advanced" }
    ]
  },
  development: {
    category: "Development",
    technologies: [
      { name: "Git", icon: "git", level: "expert" },
      { name: "GitHub", icon: "github", level: "expert" },
      { name: "Linux", icon: "linux", level: "expert" },
      { name: "Jupyter", icon: "jupyter", level: "expert" },
      { name: "Docker", icon: "docker", level: "advanced" }
    ]
  }
};

// Professional Experience
export const professionalExperience = [
  {
    id: "exp-001",
    period: "2022 - Present",
    title: "Associate Professor & Head of AI/ML Research Cluster",
    institution: "National University of Sciences and Technology (NUST)",
    location: "Islamabad, Pakistan",
    responsibilities: [
      "Leading a research cluster of 15+ researchers in Edge AI and Embedded Intelligence",
      "Developing and teaching courses in AI, Machine Learning, and Embedded Systems",
      "Securing research grants from national and international funding agencies",
      "Supervising PhD and MS researchers in AI and signal processing",
      "Establishing industry and international academic collaborations"
    ]
  },
  {
    id: "exp-002",
    period: "2019 - 2022",
    title: "Assistant Professor",
    institution: "Namal University",
    location: "Mianwali, Pakistan",
    responsibilities: [
      "Established AI research laboratory from ground up",
      "Developed undergraduate and graduate curricula in AI and data science",
      "Initiated collaborative research projects with international institutions",
      "Supervised final year projects and MS thesis students"
    ]
  },
  {
    id: "exp-003",
    period: "2016 - 2019",
    title: "Lecturer",
    institution: "Riphah International University",
    location: "Islamabad, Pakistan",
    responsibilities: [
      "Taught core electrical engineering and signal processing courses",
      "Began research program in machine learning and biomedical signal processing",
      "Mentored undergraduate students in research projects"
    ]
  }
];

// CV Sections
export const cvData = {
  summary: "Associate Professor and researcher specializing in Edge AI, Embedded Intelligence, and Autonomous Systems. Leading research at the intersection of machine learning, signal processing, and hardware-aware computing with 28+ peer-reviewed publications and 490+ citations.",
  
  education: [
    {
      degree: "PhD in Electrical Engineering",
      field: "Deep Learning and Signal Processing",
      institution: "NUST",
      year: "2018-2022"
    },
    {
      degree: "MS in Electrical Engineering",
      field: "Signal Processing and Communications",
      institution: "NUST",
      year: "2014-2016"
    },
    {
      degree: "BS in Electronics Engineering",
      field: "Electronics",
      institution: "NUST / PNEC",
      year: "2010-2014"
    }
  ],
  
  appointments: [
    {
      title: "Associate Professor",
      institution: "National University of Sciences and Technology",
      period: "2022 - Present"
    },
    {
      title: "Assistant Professor",
      institution: "Namal University",
      period: "2019 - 2022"
    },
    {
      title: "Lecturer",
      institution: "Riphah International University",
      period: "2016 - 2019"
    }
  ],
  
  technicalSkills: [
    { category: "Programming", skills: ["Python", "C/C++", "MATLAB", "Verilog"] },
    { category: "AI/ML", skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "ONNX", "TFLite"] },
    { category: "Signal Processing", skills: ["Time-Frequency Analysis", "Wavelet Transforms", "Filter Design", "Biomedical SP"] },
    { category: "Embedded", skills: ["ESP32", "Raspberry Pi", "NVIDIA Jetson", "ARM Cortex", "FPGA"] },
    { category: "Tools", skills: ["Git", "Linux", "Docker", "Jupyter", "LaTeX"] }
  ],
  
  academicService: [
    "Reviewer for IEEE Transactions on Neural Systems and Rehabilitation Engineering",
    "Reviewer for IEEE Journal of Biomedical and Health Informatics",
    "Reviewer for IEEE Sensors Journal",
    "Program Committee Member for International Conferences",
    "Member, IEEE Computational Intelligence Society",
    "Member, IEEE Signal Processing Society"
  ]
};
