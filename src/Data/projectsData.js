const projectsData = [

  {
    title: "VisionPack",
    description: "AI-based visual inspection system for industrial defect detection.",

    imgPath: "/images/visionpack.jpeg",  // ✅ fixed

    problem:
      "Manual inspection in manufacturing industries is slow, inconsistent, and prone to human error, especially when detecting very small defects at high production speeds.",

    solution:
      "Developed an intelligent pipeline using YOLOv5 for defect detection, SRGAN for enhancing low-resolution images, and OCR (EasyOCR + Tesseract) to extract product information in real time. Optimized for edge deployment to ensure fast inference.",

    challenges:
      "Faced issues with poor image quality and high inference latency. Addressed this by integrating super-resolution techniques and optimized the pipeline for real-time performance.",
  },

  {
    title: "SensorSense",
    description: "Predictive maintenance system using AI and reinforcement learning.",

    imgPath: "/images/sensorsense.png", // ✅ already correct

    problem:
      "Unexpected machine failures in industrial environments lead to costly downtime and inefficient maintenance scheduling.",

    solution:
      "Built a predictive maintenance engine using LSTM to detect degradation patterns in time-series sensor data and Q-learning for maintenance decisions.",

    challenges:
      "Handling noisy sensor data and ensuring real-time predictions required preprocessing pipelines and optimization.",
  },

  {
    title: "APGR-Net",
    description: "Physics-guided underwater image restoration model.",

    imgPath: "/images/apgrnet.jpeg", // ✅ fixed

    problem:
      "Underwater images suffer from distortion and poor visibility due to light scattering.",

    solution:
      "Integrated physics constraints like Snell’s law with deep learning for improved restoration.",

    challenges:
      "Modeling underwater light behavior was complex; solved by combining physics with neural networks.",
  },

  {
    title: "SU-CARE-FoB",
    description: "Fog-based healthcare IoT system for real-time medical data routing.",

    imgPath: "/images/sucare.jpeg", // ✅ fixed

    problem:
      "Delays in medical data transmission affect critical patient care.",

    solution:
      "Designed SDN-based routing with urgency prioritization using fog computing.",

    challenges:
      "Balancing latency and priority handling required optimized routing strategies.",
  },

];

export default projectsData;