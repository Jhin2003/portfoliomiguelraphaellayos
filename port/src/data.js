export const projectsData = [
  {
    id: 1,
    title: "QUBO: A Retrieval-Augmented Generation Philippine History Chatbot",
    shortDesc:
      "A collaborative whiteboard powered by generative AI. Sketch rough ideas and watch them transform into high-fidelity designs in real-time.",
    fullDesc:
      "Neural Canvas is a next-generation collaborative whiteboard that leverages generative AI to enhance the design process. Users can sketch rough wireframes or ideas, and the AI instantly transforms them into high-fidelity, production-ready designs. It features real-time multiplayer collaboration, version history, and export capabilities to popular design tools. Built with Next.js, OpenAI's latest vision models, and WebSockets for seamless real-time syncing.",
    image: "/QUBO.png",
    tags: ["Next.js", "OpenAI", "WebSockets", "Tailwind CSS"],
    link: "https://example.com/neural-canvas",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "FSLEARN",
    shortDesc:
      "An automated data extraction pipeline using custom fine-tuned vision models to process complex unstructured documents at scale.",
    fullDesc:
      "Visionary Data solves the problem of unstructured document processing at an enterprise scale. By utilizing custom fine-tuned vision models (based on PyTorch), it can accurately extract tables, handwritten notes, and complex layouts from PDFs and images. The pipeline is fully automated, highly scalable, and includes a human-in-the-loop verification dashboard built with React.",
    image: "https://picsum.photos/seed/ai2/800/450?blur=2",
    tags: ["Python", "PyTorch", "FastAPI", "React"],
    link: "https://example.com/visionary-data",
    github: "https://github.com/Jhin2003/FSLEARN",
  },
  {
    id: 3,
    title: "NU MARKETPLACE MANILA",
    shortDesc:
      "A real-time voice and video assistant leveraging the Gemini Live API. Features ultra-low latency streaming and visual context understanding.",
    fullDesc:
      "Echo is a cutting-edge real-time voice and video assistant built on top of the Gemini Live API. It achieves ultra-low latency streaming, allowing for natural, interruptible conversations. The assistant can also 'see' through the user's camera, providing contextual help based on the user's environment. The frontend is built with React and WebRTC, ensuring robust peer-to-peer connections and high-quality media streaming.",
    image: "https://picsum.photos/seed/ai3/800/450?blur=2",
    tags: ["React", "WebRTC", "Gemini API", "Node.js"],
    link: "https://example.com/echo-ai",
    github: "https://github.com",
  },
];

export const researchData = [
  {
    id: 1,
    title: "QUBO: A Retrieval-Augmented Generation Philippine History Chatbot",
    venue: "Undergraduate Thesis",
    date: "2026",
    desc: "Explored the application of Retrieval-Augmented Generation (RAG) to improve the accuracy and contextual relevance of conversational AI in the domain of Philippine history.",
    link: "https://github.com/Jhin2003/research_papers/blob/main/Qubo.pdf",
  },
  {
    id: 2,
    title: "Statistical Analysis of Personal Dota 2 Match_Performance",
    venue: "Machine Learning Journal",
    date: "2026",
    desc: "Analyzed a dataset of personal Dota 2 match performance using statistical methods to identify key factors influencing player success and performance trends over time.",
    link: "https://github.com/Jhin2003/research_papers/blob/main/Statistical_Analysis_of_Personal_Dota_2_Match_Performance.pdf",
  },

  {
    id: 3,
    title:
      "Deep Learning-Based Recognition and Detection of the Filipino Sign Language Alphabet",
    venue: "Machine Learning Journal",
    date: "2025",
    desc: "This research paper presents a deep learning-based approach for the recognition and detection of the Filipino Sign Language (FSL) alphabet. The study utilizes convolutional neural networks (CNNs) to classify hand gestures corresponding to the FSL alphabet, achieving high accuracy and demonstrating the potential for improving communication accessibility for the deaf community in the Philippines.",
    link: "https://github.com/Jhin2003/research_papers/blob/main/Deep%20Learning-Based%20Recognition%20and%20Detection%20of%20the%20Filipino%20Sign%20Language%20Alphabet.pdf",
  },
];

export const experienceData = [
  {
    id: 1,
    title: "AI Engineer Intern",
    company: "Example Company",
    date: "2023 - Present",
    description:
      "Leading the development of internal LLM tools. Architected a RAG pipeline that reduced customer support resolution time by 40%.",
    active: true,
  },
  {
    id: 2,
    title: "Computer Science Student",
    company: "National University Manila",
    date: "2022 - Present",
    description:
      "Studying Computer Science with specialization in Machine Learning and building AI/ML projects.",
  },
  {
    id: 3,
    title: "Senior High School – ABM Strand",
    company: "La Salle College Antipolo",
    date: "2020 - 2022",
    description:
      "Completed senior high school under the Accountancy, Business, and Management strand.",
  },
];
