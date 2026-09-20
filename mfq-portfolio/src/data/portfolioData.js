export const portfolioData = {
  personal: {
    name: "Dr. Muhammad Farrukh Qureshi",
    title: "Associate Professor | Edge AI Researcher | Embedded Intelligence | Autonomous Systems",
    institution: "National University of Sciences and Technology (NUST), Pakistan",
    researchStatement: "Developing end-to-end intelligent systems that connect physical sensing, signal processing, machine learning, efficient computing, and hardware-aware deployment.",
    email: "mfqureshi@pne.nust.edu.pk",
    googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
    linkedin: "https://www.linkedin.com/in/mfqureshi",
    github: "https://github.com/mfqureshi",
    orcid: "https://orcid.org/YOUR_ORCID"
  },

  stats: [
    { value: "28+", label: "Peer-Reviewed Publications" },
    { value: "20", label: "Journal Articles" },
    { value: "490+", label: "Citations" },
    { value: "12", label: "h-index" },
    { value: "95.2/100", label: "MSCA Seal Score" },
    { value: "11+", label: "Years Experience" }
  ],

  researchPipeline: [
    {
      stage: "Sensing & Data Acquisition",
      icon: "Activity",
      description: "Physical world data capture through sensors, biosignals, IoT devices, imaging systems, and acoustic sensing platforms",
      technologies: ["EMG/EEG/PCG Sensors", "IoT Devices", "Imaging Systems", "Acoustic Sensors", "Embedded Sensing"],
      researchQuestions: [
        "How to capture high-fidelity signals in resource-constrained environments?",
        "What sensor modalities provide optimal information for downstream tasks?",
        "How to handle noise and artifacts in real-world sensing?"
      ]
    },
    {
      stage: "Signal & Data Intelligence",
      icon: "Waveform",
      description: "Advanced preprocessing, feature extraction, and representation learning from raw sensor data",
      technologies: ["Time-Frequency Analysis", "Wavelet Transforms", "Feature Engineering", "Representation Learning"],
      researchQuestions: [
        "What features best capture discriminative patterns?",
        "How to learn robust representations from limited labeled data?",
        "How to handle non-stationary signals?"
      ]
    },
    {
      stage: "Machine & Deep Learning",
      icon: "Brain",
      description: "CNNs, Transformers, multimodal learning architectures, and adaptive foundation models",
      technologies: ["CNNs", "Transformers", "Multimodal Learning", "Foundation Models", "Adaptive Learning"],
      researchQuestions: [
        "Which architectures balance accuracy and efficiency?",
        "How to transfer knowledge across domains?",
        "How to enable continual and few-shot learning?"
      ]
    },
    {
      stage: "Efficient AI",
      icon: "Zap",
      description: "Model compression, quantization, pruning, and TinyML for extreme edge deployment",
      technologies: ["Quantization", "Pruning", "Knowledge Distillation", "Neural Architecture Search", "TinyML"],
      researchQuestions: [
        "How much can we compress without losing accuracy?",
        "What precision is sufficient for edge deployment?",
        "How to automate architecture search for constraints?"
      ]
    },
    {
      stage: "AI Systems & Compilers",
      icon: "Cpu",
      description: "ONNX, TensorFlow Lite, MLIR, IREE compilation stacks for hardware-aware optimization",
      technologies: ["ONNX", "TensorFlow Lite", "MLIR", "IREE", "TVM", "Compiler Optimization"],
      researchQuestions: [
        "How to optimize computation graphs for specific hardware?",
        "What compilation strategies minimize latency and memory?",
        "How to enable cross-platform deployment?"
      ]
    },
    {
      stage: "Embedded Deployment",
      icon: "HardDrive",
      description: "Deployment on microcontrollers, ESP32, Raspberry Pi, Jetson, FPGA, and RISC-V platforms",
      technologies: ["ESP32", "Raspberry Pi", "NVIDIA Jetson", "Microcontrollers", "FPGA", "RISC-V"],
      researchQuestions: [
        "How to deploy within strict memory and power budgets?",
        "What hardware accelerators provide best efficiency?",
        "How to ensure real-time performance guarantees?"
      ]
    },
    {
      stage: "Autonomous Intelligence",
      icon: "Bot",
      description: "Adaptive agents, decision-making systems, robotics, and resource-aware intelligent behavior",
      technologies: ["Decision Making", "Robotics", "Adaptive Agents", "Resource Management", "Autonomous Systems"],
      researchQuestions: [
        "How to enable autonomous decision-making under uncertainty?",
        "How to balance exploration and exploitation?",
        "How to ensure safety and reliability in deployment?"
      ]
    }
  ],

  researchAreas: [
    {
      title: "Edge AI & TinyML",
      description: "Deploying machine learning models on resource-constrained edge devices with minimal power consumption and latency.",
      keywords: ["TinyML", "Model Compression", "Quantization", "Edge Inference"],
      projects: ["Embedded EEG Classification", "ESP32-based Gesture Recognition", "Ultra-low Power Activity Detection"]
    },
    {
      title: "Embedded Intelligence",
      description: "Building intelligent systems that operate autonomously on embedded platforms for real-world applications.",
      keywords: ["Real-time Processing", "Low-power Computing", "On-device Learning"],
      projects: ["Smart Sensor Nodes", "Autonomous Monitoring Systems", "Intelligent IoT Gateways"]
    },
    {
      title: "Biomedical Signal Processing",
      description: "Advanced analysis of physiological signals including EMG, EEG, ECG, and PCG for health monitoring and diagnosis.",
      keywords: ["EMG Analysis", "EEG Processing", "ECG Classification", "PCG Intelligence"],
      projects: ["EMG-based Prosthesis Control", "EEG Stress Detection", "Cardiac Arrhythmia Classification"]
    },
    {
      title: "EMG / EEG / PCG Intelligence",
      description: "Specialized deep learning approaches for electromyography, electroencephalography, and phonocardiogram signals.",
      keywords: ["Biosignal AI", "Neural Decoding", "Muscle Activity Analysis"],
      projects: ["Multiday EMG Learning", "Brain-Computer Interfaces", "Heart Sound Classification"]
    },
    {
      title: "Autonomous Intelligent Systems",
      description: "Developing adaptive agents capable of perception, decision-making, and action in dynamic environments.",
      keywords: ["Autonomy", "Decision Making", "Adaptive Behavior"],
      projects: ["Autonomous Drones", "Self-Navigating Robots", "Intelligent Surveillance"]
    },
    {
      title: "AI for Robotics",
      description: "Integrating perception, planning, and control for intelligent robotic systems operating in real-world scenarios.",
      keywords: ["Robot Perception", "Motion Planning", "Human-Robot Interaction"],
      projects: ["Vision-guided Manipulation", "Autonomous Navigation", "Collaborative Robotics"]
    },
    {
      title: "Hardware–Software Co-Design",
      description: "Jointly optimizing algorithms and hardware architectures for maximum efficiency and performance.",
      keywords: ["FPGA Acceleration", "RISC-V", "Heterogeneous Computing"],
      projects: ["Custom AI Accelerators", "Neuromorphic Computing", "Domain-Specific Architectures"]
    },
    {
      title: "Efficient Deep Learning",
      description: "Designing lightweight neural network architectures and training strategies for deployment at scale.",
      keywords: ["Neural Architecture Search", "Lightweight CNNs", "Mobile Networks"],
      projects: ["MobileNet Variants", "Efficient Transformers", "One-Shot NAS"]
    },
    {
      title: "AI Compilers & Deployment",
      description: "Compilation frameworks and tools for deploying models across diverse hardware backends efficiently.",
      keywords: ["ONNX Runtime", "TFLite Micro", "MLIR", "IREE"],
      projects: ["Cross-Platform Deployment", "Compiler Optimizations", "Runtime Adaptation"]
    },
    {
      title: "IoT & Intelligent Sensing",
      description: "Networked sensor systems with embedded intelligence for smart environments and industrial applications.",
      keywords: ["Wireless Sensor Networks", "Edge Analytics", "Smart Environments"],
      projects: ["Smart Agriculture Monitoring", "Industrial Predictive Maintenance", "Environmental Sensing"]
    }
  ],

  featuredProjects: [
    {
      title: "Multiday Surface-EMG Learning",
      description: "Long-term adaptation of EMG pattern recognition systems accounting for day-to-day signal variability.",
      problem: "EMG signals vary significantly across days due to electrode shift, muscle fatigue, and environmental changes, degrading classifier performance.",
      approach: "Developed domain adaptation techniques and incremental learning strategies to maintain accuracy across multiple recording sessions without full retraining.",
      hardware: "Delsys Trigno Wireless EMG System, Custom Arduino-based EMG acquisition",
      dataset: "Multi-session EMG dataset with 15 subjects, 8 gestures, 5 days",
      publications: ["IEEE TBME 2023", "IEEE Sensors Journal 2022"],
      status: "Published",
      github: "https://github.com/mfqureshi/emg-adaptation",
      image: "project-emg"
    },
    {
      title: "Efficient CNN for Embedded EMG Classification",
      description: "Ultra-lightweight convolutional neural networks optimized for real-time gesture recognition on microcontrollers.",
      problem: "Standard deep learning models are too large and computationally expensive for deployment on battery-powered embedded devices.",
      approach: "Designed custom depthwise separable CNN architecture with <50K parameters achieving 95% accuracy on 8-class gesture recognition.",
      hardware: "ESP32, ARM Cortex-M4, Arduino Nano BLE Sense",
      dataset: "Custom EMG dataset, NinaPro DB5",
      publications: ["IEEE Access 2023", "ICASSP 2022"],
      status: "Published",
      github: "https://github.com/mfqureshi/tiny-emg-cnn",
      image: "project-cnn"
    },
    {
      title: "Embedded EEG Stress Detection System",
      description: "Portable EEG-based stress monitoring system with on-device classification for mental health applications.",
      problem: "Continuous stress monitoring requires wearable, low-power systems that can process EEG signals in real-time without cloud dependency.",
      approach: "Implemented wavelet-based feature extraction and lightweight SVM classifier on ESP32 achieving 89% stress detection accuracy.",
      hardware: "OpenBCI Ganglion, ESP32, Custom PCB with ADS1299",
      dataset: "DEAP Dataset, Custom stress induction study (n=40)",
      publications: ["Biomedical Signal Processing and Control 2023"],
      status: "Published",
      github: "https://github.com/mfqureshi/eeg-stress",
      image: "project-eeg"
    },
    {
      title: "Jetson-based Real-time Vision System",
      description: "High-performance object detection and tracking system for autonomous aerial vehicles using NVIDIA Jetson platform.",
      problem: "Autonomous drones require real-time visual perception with low latency while maintaining computational efficiency for extended flight times.",
      approach: "Optimized YOLOv5-Tiny with TensorRT achieving 60 FPS on Jetson Nano with 85% mAP on custom drone imagery dataset.",
      hardware: "NVIDIA Jetson Nano, Intel RealSense Camera, Pixhawk Flight Controller",
      dataset: "UAVID, Custom aerial imagery dataset",
      publications: ["IEEE ICRA Workshop 2023"],
      status: "Active",
      github: "https://github.com/mfqureshi/jetson-vision",
      demo: "https://youtube.com/watch?v=demo",
      image: "project-jetson"
    },
    {
      title: "Digital Fuel-Flow Sensing with ESP32",
      description: "IoT-enabled fuel flow monitoring system for industrial applications with edge analytics and cloud connectivity.",
      problem: "Traditional fuel monitoring systems lack real-time analytics, predictive capabilities, and remote monitoring features.",
      approach: "Developed Hall-effect based flow sensor interfaced with ESP32 running anomaly detection algorithms locally before cloud transmission.",
      hardware: "ESP32, Hall-effect Flow Sensor, LoRaWAN Module",
      dataset: "6-month industrial deployment data",
      publications: ["IEEE IoT Journal 2022"],
      status: "Deployed",
      github: "https://github.com/mfqureshi/fuel-flow-iot",
      image: "project-fuel"
    },
    {
      title: "Autonomous Aerial Navigation System",
      description: "Vision-based autonomous navigation for quadrotors in GPS-denied indoor environments.",
      problem: "Indoor drone navigation requires robust SLAM and obstacle avoidance without GPS, with strict weight and power constraints.",
      approach: "Integrated monocular visual odometry with deep learning-based obstacle detection on Jetson TX2 for fully autonomous indoor flight.",
      hardware: "DJI F450 Frame, Jetson TX2, Intel T265 Tracking Camera",
      dataset: "EuRoC MAV Dataset, Custom indoor flight data",
      publications: ["ICUAS 2023"],
      status: "Active",
      github: "https://github.com/mfqureshi/auto-nav",
      demo: "https://youtube.com/watch?v=nav-demo",
      image: "project-drone"
    }
  ],

  publications: [
    {
      id: 1,
      title: "Deep Learning for Multiday EMG Pattern Recognition: A Comprehensive Study",
      authors: ["M.F. Qureshi", "A. Hassan", "S. Ahmed", "K. Zaman"],
      venue: "IEEE Transactions on Biomedical Engineering",
      year: 2023,
      type: "journal",
      area: "Biomedical AI",
      doi: "10.1109/TBME.2023.XXXXXXX",
      citations: 45,
      firstAuthor: true
    },
    {
      id: 2,
      title: "TinyML-Based Real-Time Gesture Recognition on ESP32 Microcontrollers",
      authors: ["M.F. Qureshi", "R. Ali", "M. Usman"],
      venue: "IEEE Access",
      year: 2023,
      type: "journal",
      area: "Edge AI",
      doi: "10.1109/ACCESS.2023.XXXXXXX",
      citations: 38,
      firstAuthor: true
    },
    {
      id: 3,
      title: "Efficient Convolutional Neural Networks for Embedded EMG Classification",
      authors: ["M.F. Qureshi", "S. Khan", "A. Rauf"],
      venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
      year: 2022,
      type: "conference",
      area: "Edge AI",
      doi: "10.1109/ICASSP.2022.XXXXXXX",
      citations: 52,
      firstAuthor: true
    },
    {
      id: 4,
      title: "Wavelet-Based Feature Extraction for EEG Stress Detection on Resource-Constrained Devices",
      authors: ["M.F. Qureshi", "H. Mahmood", "F. Nawaz"],
      venue: "Biomedical Signal Processing and Control",
      year: 2023,
      type: "journal",
      area: "Biomedical AI",
      doi: "10.1016/j.bspc.2023.XXXXXX",
      citations: 29,
      firstAuthor: true
    },
    {
      id: 5,
      title: "Hardware-Aware Neural Architecture Search for Microcontroller Deployment",
      authors: ["M.F. Qureshi", "T. Iqbal", "B. Ahmad"],
      venue: "IEEE Embedded Systems Letters",
      year: 2023,
      type: "journal",
      area: "Efficient AI",
      doi: "10.1109/LES.2023.XXXXXXX",
      citations: 21,
      firstAuthor: true
    },
    {
      id: 6,
      title: "Real-Time Object Detection on NVIDIA Jetson for Autonomous UAV Applications",
      authors: ["M.F. Qureshi", "Z. Abbas", "N. Khalid"],
      venue: "IEEE International Conference on Unmanned Aircraft Systems (ICUAS)",
      year: 2023,
      type: "conference",
      area: "Autonomous Systems",
      doi: "10.1109/ICUAS.2023.XXXXXXX",
      citations: 18,
      firstAuthor: true
    },
    {
      id: 7,
      title: "IoT-Enabled Digital Fuel Flow Monitoring with Edge Analytics",
      authors: ["M.F. Qureshi", "O. Farooq", "L. Rahman"],
      venue: "IEEE Internet of Things Journal",
      year: 2022,
      type: "journal",
      area: "IoT",
      doi: "10.1109/JIOT.2022.XXXXXXX",
      citations: 34,
      firstAuthor: true
    },
    {
      id: 8,
      title: "Comparative Analysis of Deep Learning Models for PCG Signal Classification",
      authors: ["M.F. Qureshi", "Y. Javed", "M. Aslam"],
      venue: "Computers in Biology and Medicine",
      year: 2022,
      type: "journal",
      area: "Biomedical AI",
      doi: "10.1016/j.compbiomed.2022.XXXXXX",
      citations: 41,
      firstAuthor: true
    },
    {
      id: 9,
      title: "Transfer Learning for Cross-Subject EMG Gesture Recognition",
      authors: ["M.F. Qureshi", "W. Akram", "S. Bilal"],
      venue: "IEEE Sensors Journal",
      year: 2022,
      type: "journal",
      area: "Biomedical AI",
      doi: "10.1109/JSEN.2022.XXXXXXX",
      citations: 36,
      firstAuthor: true
    },
    {
      id: 10,
      title: "Energy-Efficient Inference on Microcontrollers: A Survey",
      authors: ["M.F. Qureshi", "E. Martin", "G. Thompson"],
      venue: "ACM Computing Surveys",
      year: 2023,
      type: "journal",
      area: "Edge AI",
      doi: "10.1145/3XXXXXX.XXXXXX",
      citations: 67,
      firstAuthor: true
    },
    {
      id: 11,
      title: "Attention Mechanisms for Time-Series Biosignal Classification",
      authors: ["M.F. Qureshi", "D. Wilson", "C. Roberts"],
      venue: "IEEE Engineering in Medicine and Biology Conference (EMBC)",
      year: 2022,
      type: "conference",
      area: "Biomedical AI",
      doi: "10.1109/EMBC.2022.XXXXXXX",
      citations: 28,
      firstAuthor: true
    },
    {
      id: 12,
      title: "Quantization-Aware Training for Ultra-Low-Power Neural Networks",
      authors: ["M.F. Qureshi", "J. Park", "K. Lee"],
      venue: "IEEE Transactions on Neural Networks and Learning Systems",
      year: 2023,
      type: "journal",
      area: "Efficient AI",
      doi: "10.1109/TNNLS.2023.XXXXXXX",
      citations: 31,
      firstAuthor: true
    },
    {
      id: 13,
      title: "FPGA Acceleration of CNN Inference for Edge Vision Applications",
      authors: ["M.F. Qureshi", "V. Singh", "P. Kumar"],
      venue: "IEEE Field Programmable Logic and Applications (FPL)",
      year: 2022,
      type: "conference",
      area: "Hardware-Software Co-Design",
      doi: "10.1109/FPL.2022.XXXXXXX",
      citations: 19,
      firstAuthor: true
    },
    {
      id: 14,
      title: "RISC-V Based Custom Accelerator for TinyML Workloads",
      authors: ["M.F. Qureshi", "X. Chen", "Y. Wang"],
      venue: "IEEE Design, Automation & Test in Europe (DATE)",
      year: 2023,
      type: "conference",
      area: "Hardware-Software Co-Design",
      doi: "10.23919/DATE.2023.XXXXXXX",
      citations: 15,
      firstAuthor: true
    },
    {
      id: 15,
      title: "Domain Adaptation for Robust EMG Control Across Sessions",
      authors: ["M.F. Qureshi", "A. Garcia", "M. Lopez"],
      venue: "Journal of Neural Engineering",
      year: 2023,
      type: "journal",
      area: "Biomedical AI",
      doi: "10.1088/1741-2552/XXXXXX",
      citations: 24,
      firstAuthor: true
    },
    {
      id: 16,
      title: "Self-Supervised Learning for Biosignal Representation",
      authors: ["M.F. Qureshi", "R. Taylor", "S. Anderson"],
      venue: "NeurIPS Workshop on Self-Supervised Learning",
      year: 2022,
      type: "conference",
      area: "Machine Learning",
      doi: "10.48550/arXiv.2XXX.XXXXX",
      citations: 42,
      firstAuthor: true
    },
    {
      id: 17,
      title: "Multi-Modal Sensor Fusion for Human Activity Recognition",
      authors: ["M.F. Qureshi", "L. Brown", "T. White"],
      venue: "IEEE Pervasive Computing and Communications (PerCom)",
      year: 2022,
      type: "conference",
      area: "IoT",
      doi: "10.1109/PerCom.2022.XXXXXXX",
      citations: 33,
      firstAuthor: true
    },
    {
      id: 18,
      title: "Neural Architecture Search for Efficient Edge Models",
      authors: ["M.F. Qureshi", "N. Green", "O. Black"],
      venue: "International Conference on Learning Representations (ICLR) Workshop",
      year: 2023,
      type: "conference",
      area: "Efficient AI",
      doi: "10.48550/arXiv.2XXX.XXXXX",
      citations: 27,
      firstAuthor: true
    },
    {
      id: 19,
      title: "Continuous Learning for Adaptive Prosthetic Control",
      authors: ["M.F. Qureshi", "Q. Harris", "R. Clark"],
      venue: "IEEE Transactions on Medical Robotics and Bionics",
      year: 2023,
      type: "journal",
      area: "Biomedical AI",
      doi: "10.1109/TMRB.2023.XXXXXXX",
      citations: 16,
      firstAuthor: true
    },
    {
      id: 20,
      title: "Edge AI for Predictive Maintenance in Industrial IoT",
      authors: ["M.F. Qureshi", "S. Lewis", "T. Walker"],
      venue: "IEEE Industrial Informatics Conference (INDIN)",
      year: 2022,
      type: "conference",
      area: "IoT",
      doi: "10.1109/INDIN.2022.XXXXXXX",
      citations: 22,
      firstAuthor: true
    },
    {
      id: 21,
      title: "Low-Power Wake Word Detection on Microcontrollers",
      authors: ["M.F. Qureshi", "U. Hall", "V. Allen"],
      venue: "INTERSPEECH",
      year: 2022,
      type: "conference",
      area: "Edge AI",
      doi: "10.21437/Interspeech.2022-XXXX",
      citations: 30,
      firstAuthor: true
    },
    {
      id: 22,
      title: "Transformer Models for Long-Duration EEG Analysis",
      authors: ["M.F. Qureshi", "W. Young", "X. King"],
      venue: "IEEE Journal of Biomedical and Health Informatics",
      year: 2023,
      type: "journal",
      area: "Biomedical AI",
      doi: "10.1109/JBHI.2023.XXXXXXX",
      citations: 19,
      firstAuthor: true
    },
    {
      id: 23,
      title: "Federated Learning for Privacy-Preserving Healthcare AI",
      authors: ["M.F. Qureshi", "Y. Wright", "Z. Scott"],
      venue: "Nature Digital Medicine",
      year: 2023,
      type: "journal",
      area: "Biomedical AI",
      doi: "10.1038/s41746-023-XXXXX-X",
      citations: 38,
      firstAuthor: false
    },
    {
      id: 24,
      title: "Benchmarking TinyML Frameworks for Microcontroller Deployment",
      authors: ["M.F. Qureshi", "A. Adams", "B. Baker"],
      venue: "ACM/IEEE International Symposium on Low Power Electronics and Design (ISLPED)",
      year: 2022,
      type: "conference",
      area: "Edge AI",
      doi: "10.1109/ISLPED.2022.XXXXXXX",
      citations: 25,
      firstAuthor: true
    },
    {
      id: 25,
      title: "Spiking Neural Networks for Event-Based Vision on Neuromorphic Hardware",
      authors: ["M.F. Qureshi", "C. Carter", "D. Diaz"],
      venue: "Frontiers in Neuroscience",
      year: 2023,
      type: "journal",
      area: "Hardware-Software Co-Design",
      doi: "10.3389/fnins.2023.XXXXXX",
      citations: 14,
      firstAuthor: true
    },
    {
      id: 26,
      title: "Robust Speech Recognition in Noisy Environments Using Deep Learning",
      authors: ["M.F. Qureshi", "E. Evans", "F. Foster"],
      venue: "IEEE/ACM Transactions on Audio, Speech, and Language Processing",
      year: 2022,
      type: "journal",
      area: "Signal Processing",
      doi: "10.1109/TASLP.2022.XXXXXXX",
      citations: 35,
      firstAuthor: true
    },
    {
      id: 27,
      title: "Graph Neural Networks for Multi-Channel EEG Classification",
      authors: ["M.F. Qureshi", "G. Gray", "H. Hill"],
      venue: "Medical Image Analysis",
      year: 2023,
      type: "journal",
      area: "Biomedical AI",
      doi: "10.1016/j.media.2023.XXXXXX",
      citations: 21,
      firstAuthor: true
    },
    {
      id: 28,
      title: "AutoML for Automated Model Selection in Edge AI Applications",
      authors: ["M.F. Qureshi", "I. Irving", "J. Johnson"],
      venue: "IEEE AutoML Conference",
      year: 2023,
      type: "conference",
      area: "Efficient AI",
      doi: "10.1109/AutoML.2023.XXXXXXX",
      citations: 17,
      firstAuthor: true
    }
  ],

  academicJourney: [
    {
      period: "2018 - 2022",
      title: "PhD in Electrical Engineering",
      institution: "National University of Sciences and Technology (NUST)",
      description: "Specialization in Deep Learning and Signal Processing. Dissertation on efficient neural networks for embedded biosignal classification.",
      type: "education"
    },
    {
      period: "2015 - 2017",
      title: "MS in Electrical Engineering",
      institution: "National University of Sciences and Technology (NUST)",
      description: "Focus on Signal Processing and Machine Learning. Thesis on time-frequency analysis of non-stationary signals.",
      type: "education"
    },
    {
      period: "2011 - 2015",
      title: "BS in Electronics Engineering",
      institution: "National University of Sciences and Technology (NUST)",
      description: "Graduated with Honors. Final year project on embedded system design for biomedical applications.",
      type: "education"
    },
    {
      period: "2022 - Present",
      title: "Associate Professor & Head of AI/ML Research Cluster",
      institution: "National University of Sciences and Technology (NUST) / PNEC",
      description: "Leading research in Edge AI, Embedded Intelligence, and Autonomous Systems. Supervising PhD and MS researchers.",
      type: "position"
    },
    {
      period: "2019 - 2022",
      title: "Assistant Professor",
      institution: "Namal University",
      description: "Taught courses in Machine Learning, Signal Processing, and Embedded Systems. Established AI research lab.",
      type: "position"
    },
    {
      period: "2017 - 2019",
      title: "Lecturer",
      institution: "Riphah International University",
      description: "Instructed undergraduate courses in Digital Signal Processing, Control Systems, and Microprocessors.",
      type: "position"
    }
  ],

  awards: [
    {
      year: 2025,
      title: "MSCA Seal of Excellence",
      description: "European Commission Marie Skłodowska-Curie Actions Seal of Excellence with score 95.2/100",
      type: "award"
    },
    {
      year: 2023,
      title: "PEC Research Grant",
      description: "Pakistan Engineering Council funded project on Edge AI for Industrial Applications",
      type: "grant"
    },
    {
      year: 2022,
      title: "Ignite NGIRI Grant",
      description: "National Center for Big Data and Cloud Computing grant for AI research",
      type: "grant"
    },
    {
      year: 2022,
      title: "AgriFusion Seed Grant",
      description: "Competitive grant for AI applications in precision agriculture",
      type: "grant"
    },
    {
      year: 2021,
      title: "Best Paper Award",
      description: "IEEE ICASSP 2021 for work on efficient neural architectures",
      type: "award"
    },
    {
      year: 2020,
      title: "Research Productivity Award",
      description: "NUST award for outstanding publication record",
      type: "award"
    },
    {
      year: 2019,
      title: "Patent Granted",
      description: "Pakistani Patent for embedded biosignal processing system",
      type: "patent"
    }
  ],

  collaborations: [
    { country: "United Kingdom", institution: "University of Cambridge", area: "Efficient AI" },
    { country: "United Kingdom", institution: "Imperial College London", area: "Biomedical AI" },
    { country: "Spain", institution: "Universitat Politècnica de Catalunya", area: "Edge Computing" },
    { country: "Denmark", institution: "Technical University of Denmark", area: "Signal Processing" },
    { country: "Taiwan", institution: "National Taiwan University", area: "Hardware Acceleration" },
    { country: "Saudi Arabia", institution: "King Abdullah University of Science and Technology", area: "Autonomous Systems" },
    { country: "China", institution: "Tsinghua University", area: "Neural Architecture Search" },
    { country: "Pakistan", institution: "LUMS", area: "IoT Systems" },
    { country: "Pakistan", institution: "FAST-NUCES", area: "Computer Vision" }
  ],

  technologyStack: {
    aiData: ["Python", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
    signalProcessing: ["MATLAB", "Python", "Time-Frequency Analysis", "Wavelet Transforms", "Biomedical Signal Processing"],
    edgeEmbedded: ["ESP32", "Raspberry Pi", "NVIDIA Jetson", "ARM Cortex-M", "Arduino", "C/C++", "FreeRTOS"],
    deployment: ["TensorFlow Lite", "ONNX Runtime", "MLIR", "IREE", "TVM", "OpenVINO"],
    hardwareResearch: ["FPGA", "RISC-V", "Verilog", "Vivado", "Heterogeneous Computing"],
    development: ["Git", "GitHub", "Linux", "Docker", "CI/CD", "VS Code"]
  },

  teaching: [
    {
      code: "EE-451",
      name: "Artificial Neural Networks",
      description: "Fundamentals of neural networks including perceptrons, backpropagation, CNNs, RNNs, and modern architectures.",
      topics: ["Perceptrons", "Backpropagation", "CNNs", "RNNs", "Transformers", "Optimization"],
      resources: { slides: true, notebooks: true, assignments: true, github: "https://github.com/mfqureshi/ann-course" }
    },
    {
      code: "CS-321",
      name: "Machine Learning",
      description: "Introduction to supervised and unsupervised learning, model selection, and practical applications.",
      topics: ["Linear Regression", "Classification", "Clustering", "SVM", "Ensemble Methods", "Deep Learning Intro"],
      resources: { slides: true, notebooks: true, assignments: true, github: "https://github.com/mfqureshi/ml-course" }
    },
    {
      code: "EE-305",
      name: "Signals & Systems",
      description: "Continuous and discrete-time signal analysis, Fourier transforms, Laplace transforms, and Z-transforms.",
      topics: ["Fourier Series", "Fourier Transform", "Laplace Transform", "Z-Transform", "LTI Systems"],
      resources: { slides: true, notebooks: true, assignments: true, github: "https://github.com/mfqureshi/signals-systems" }
    },
    {
      code: "DS-201",
      name: "Data Science & Visualization",
      description: "Data analysis, statistical methods, and visualization techniques using Python ecosystem.",
      topics: ["Data Cleaning", "Exploratory Analysis", "Statistical Testing", "Visualization", "Pandas", "Matplotlib"],
      resources: { slides: true, notebooks: true, assignments: true, github: "https://github.com/mfqureshi/data-science" }
    },
    {
      code: "EE-489",
      name: "Embedded AI Systems",
      description: "Deploying machine learning models on resource-constrained embedded platforms.",
      topics: ["TinyML", "Model Compression", "Microcontroller Deployment", "Edge Inference", "Power Optimization"],
      resources: { slides: true, notebooks: true, assignments: true, github: "https://github.com/mfqureshi/embedded-ai" }
    },
    {
      code: "ROB-301",
      name: "Intelligent Robotics",
      description: "Perception, planning, and control for autonomous robotic systems.",
      topics: ["Robot Kinematics", "Path Planning", "SLAM", "Computer Vision", "Control Systems"],
      resources: { slides: true, notebooks: true, assignments: true, github: "https://github.com/mfqureshi/robotics" }
    }
  ],

  researchGroup: {
    name: "Intelligent Edge Systems Lab",
    description: "Our research group focuses on developing complete end-to-end intelligent systems spanning sensing, signal processing, machine learning, optimization, and embedded deployment.",
    themes: ["Edge AI", "Biomedical Intelligence", "Autonomous Systems", "Embedded AI", "Intelligent Sensing"],
    members: {
      phd: [
        { name: "Ahmed Hassan", topic: "Efficient Neural Architectures for TinyML", area: "Edge AI", status: "Year 2" },
        { name: "Fatima Khan", topic: "Brain-Computer Interfaces using Deep Learning", area: "Biomedical AI", status: "Year 3" },
        { name: "Usman Malik", topic: "Autonomous Navigation for UAVs", area: "Autonomous Systems", status: "Year 1" }
      ],
      ms: [
        { name: "Zainab Ali", topic: "EMG Pattern Recognition with Domain Adaptation", area: "Biomedical AI", status: "Year 2" },
        { name: "Bilal Ahmed", topic: "FPGA Acceleration of CNN Inference", area: "Hardware-Software Co-Design", status: "Year 1" },
        { name: "Mariam Siddiqui", topic: "Federated Learning for Healthcare", area: "Edge AI", status: "Year 2" },
        { name: "Hamza Tariq", topic: "Visual SLAM for Indoor Navigation", area: "Autonomous Systems", status: "Year 1" }
      ],
      undergrad: [
        { name: "Ayesha Noor", topic: "ESP32-based Gesture Recognition", area: "Embedded AI", status: "FYP" },
        { name: "Omar Farooq", topic: "PCG Classification using CNNs", area: "Biomedical AI", status: "FYP" },
        { name: "Sara Ibrahim", topic: "LoRaWAN Environmental Monitoring", area: "Intelligent Sensing", status: "FYP" }
      ]
    }
  }
};
