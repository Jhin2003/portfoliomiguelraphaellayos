import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Terminal,
  Code2,
  BrainCircuit,
  ChevronDown,
  X,
  BookOpen,
  FileText,
} from "lucide-react";
import { useState, useEffect } from "react";

const projectsData = [
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
    github: "https://github.com",
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

const researchData = [
  {
    id: 1,
    title: "QUBO: A Retrieval-Augmented Generation Philippine History Chatbot",
    venue: "Undergraduate Research",
    date: "2024",
    desc: "Explored the application of Retrieval-Augmented Generation (RAG) to improve the accuracy and contextual relevance of conversational AI in the domain of Philippine history.",
    link: "#"
  },
  {
    id: 2,
    title: "FSLEARN: Fine-Tuned Vision Models for Unstructured Data",
    venue: "Machine Learning Journal",
    date: "2023",
    desc: "Proposed an automated pipeline for extracting complex layouts and handwritten notes from unstructured documents using optimized vision transformers.",
    link: "#"
  }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <div className="bg-glow" />

      {/* Custom cursor glow effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 40%)`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono text-sm font-medium tracking-wider"
          >
            <span className="text-blue-400">~/</span>portfolio
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-8 text-sm font-medium text-zinc-400"
          >
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#research" className="hover:text-white transition-colors">
              Research
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
          </motion.div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.section
          style={{ opacity, scale }}
          className="min-h-[80vh] flex items-center relative"
        >
          <div className="w-full grid md:grid-cols-2 gap-2 items-center">
            {/* LEFT SIDE - TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-white/10 text-xs font-mono text-blue-400 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for new opportunities
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
                Hello I'm <br />
                <span className="text-gradient-accent">
                  Miguel Raphael Layos
                </span>
              </h1>

              <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
                I build scalable intelligent systems, bridging the gap between
                cutting-edge machine learning models and robust production
                environments.
              </p>

              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
                >
                  <Mail size={18} />
                  Get in touch
                </a>

                <div className="flex gap-2">
                  <a
                    href="https://github.com/Jhin2003"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg glass-card hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/miguel-raphael-layos-923847299/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg glass-card hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]">
                {/* Optional soft glow background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-20 rounded-3xl"></div>

                <img
                  src="/profile.png"
                  alt="Miguel Raphael Layos"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About / Skills Section */}
        <section id="about" className="py-24 border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Engineering intelligence.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                With a background in both traditional software engineering and
                machine learning, I specialize in taking AI from research
                notebooks to production-ready applications.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                I focus on performance, architecture, and user experience,
                ensuring that AI features feel like magic rather than science
                experiments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-2xl">
                <BrainCircuit className="text-blue-400 mb-4" size={24} />
                <h3 className="font-medium mb-2">AI / ML</h3>
                <ul className="text-sm text-zinc-500 space-y-2 font-mono">
                  <li>PyTorch / TensorFlow</li>
                  <li>LLMs / RAG</li>
                  <li>Computer Vision</li>
                  <li>MLOps</li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <Code2 className="text-purple-400 mb-4" size={24} />
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="text-sm text-zinc-500 space-y-2 font-mono">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>WebGL / Canvas</li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-2xl col-span-2">
                <Terminal className="text-emerald-400 mb-4" size={24} />
                <h3 className="font-medium mb-2">Backend & Systems</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    "Node.js",
                    "Python",
                    "Go",
                    "PostgreSQL",
                    "Redis",
                    "Docker",
                    "AWS",
                    "Kubernetes",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-zinc-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-t border-white/5">
          <h2 className="text-3xl font-bold mb-12">Selected Work</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
                className={`glass-card rounded-3xl p-2 group cursor-pointer ${index === 2 ? "md:col-span-2" : ""}`}
              >
                <div
                  className={`rounded-2xl bg-zinc-900 overflow-hidden relative ${index === 2 ? "flex flex-col md:flex-row gap-6 p-2" : "aspect-video mb-6"}`}
                >
                  <div
                    className={`${index === 2 ? "w-full md:w-1/2 aspect-video md:aspect-auto relative" : "w-full h-full"}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-contain w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    {index !== 2 && (
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-black/50 backdrop-blur-md rounded text-xs font-mono text-white border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {index === 2 ? (
                    <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
                      <div className="flex gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-zinc-300 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                        {project.title}{" "}
                        <ExternalLink
                          size={20}
                          className="text-zinc-500 group-hover:text-white transition-colors"
                        />
                      </h3>
                      <p className="text-zinc-400 leading-relaxed mb-6">
                        {project.shortDesc}
                      </p>
                      <span className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1">
                        View Details <span className="text-lg">→</span>
                      </span>
                    </div>
                  ) : null}
                </div>

                {index !== 2 && (
                  <div className="px-4 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <ExternalLink
                        size={20}
                        className="text-zinc-500 group-hover:text-white transition-colors"
                      />
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-24 border-t border-white/5">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <BookOpen className="text-blue-400" /> Research & Publications
          </h2>
          <div className="flex flex-col gap-6">
            {researchData.map((paper) => (
              <motion.div
                key={paper.id}
                whileHover={{ x: 5 }}
                className="glass-card p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono border border-blue-500/20">
                      {paper.date}
                    </span>
                    <span className="text-sm text-zinc-400 font-medium">
                      {paper.venue}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
                    {paper.desc}
                  </p>
                </div>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium shrink-0"
                >
                  <FileText size={16} />
                  Read Paper
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 border-t border-white/5">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {/* Role 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 text-zinc-500 group-[.is-active]:text-blue-400 group-[.is-active]:border-blue-500/30 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 rounded-full bg-current"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h3 className="text-lg font-bold text-white">
                    Senior AI Engineer
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    2023 - Present
                  </span>
                </div>
                <div className="text-blue-400 text-sm font-medium mb-4">
                  TechCorp Inc.
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Leading the development of internal LLM tools. Architected a
                  RAG pipeline that reduced customer support resolution time by
                  40%.
                </p>
              </div>
            </div>

            {/* Role 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 text-zinc-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 rounded-full bg-current"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h3 className="text-lg font-bold text-white">
                    Full Stack Developer
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    2021 - 2023
                  </span>
                </div>
                <div className="text-zinc-300 text-sm font-medium mb-4">
                  StartupX
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Built scalable web applications using React and Node.js.
                  Integrated early OpenAI APIs into core product features.
                </p>
              </div>
            </div>

            {/* Role 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 text-zinc-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 rounded-full bg-current"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h3 className="text-lg font-bold text-white">
                    Software Engineer
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    2019 - 2021
                  </span>
                </div>
                <div className="text-zinc-300 text-sm font-medium mb-4">
                  Agency Studio
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Developed high-performance marketing sites and interactive web
                  experiences for enterprise clients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-6 sm:p-10 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="aspect-video rounded-2xl overflow-hidden mb-8 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm font-mono text-zinc-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-invert max-w-none mb-10">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  {selectedProject.fullDesc}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  View Deployment
                </a>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-white/5 bg-black/50 backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Let's build something.</h2>
            <p className="text-zinc-500 text-sm">
              Currently open for new opportunities.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="px-5 py-2.5 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              hello@example.com
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <p>
            © {new Date().getFullYear()} AI Software Engineer. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
