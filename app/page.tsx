'use client';

import { motion, Variants } from 'motion/react';
import { 
  Github, 
  Linkedin,
  Mail, 
  MapPin, 
  Phone, 
  GraduationCap, 
  Trophy, 
  Cpu, 
  Code2, 
  Wrench, 
  Languages, 
  TerminalSquare, 
  Award,
  ChevronRight,
  ExternalLink,
  FileDown
} from 'lucide-react';

import { ThemeToggle } from '@/components/theme-toggle';

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const STAGGER_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Portfolio() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 print:hidden">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">AJ.</span>
          <ThemeToggle />
        </div>
      </header>
      <main className="min-h-screen max-w-5xl mx-auto px-6 py-24 md:py-32 space-y-32">
        {/* Hero Section */}
      <motion.section 
        className="space-y-8"
        initial="hidden"
        animate="show"
        variants={STAGGER_CONTAINER_VARIANTS}
      >
        <div className="space-y-4">
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </motion.div>
          <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white">
            Aaron Johns
          </motion.h1>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-light">
            B.Tech in Artificial Intelligence & Data Science <br className="hidden md:block"/>
            specializing in <span className="text-zinc-800 dark:text-zinc-200 font-medium">autonomous systems</span>, <span className="text-zinc-800 dark:text-zinc-200 font-medium">robotics</span>, and <span className="text-zinc-800 dark:text-zinc-200 font-medium">machine learning</span>.
          </motion.p>
        </div>

        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2 bg-zinc-100/50 dark:bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <MapPin className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
            <span>Kottayam, Kerala, India</span>
          </div>
          <a href="mailto:aaronjohns2004@gmail.com" className="flex items-center gap-2 bg-zinc-100/50 dark:bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors">
            <Mail className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
            <span>aaronjohns2004@gmail.com</span>
          </a>
          <a href="tel:+918714013438" className="flex items-center gap-2 bg-zinc-100/50 dark:bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors">
            <Phone className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
            <span>+91 87140 13438</span>
          </a>
          <a href="https://github.com/Aaron-Johns" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-100/50 dark:bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors">
            <Github className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/aaron-johns-a2891a299/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-100/50 dark:bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors">
            <Linkedin className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
            <span>LinkedIn</span>
          </a>
          <a href="/resume.pdf" download="Aaron_Johns_Resume.pdf" className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-lg border border-emerald-200 dark:border-emerald-500/20 hover:bg-emerald-200 dark:hover:bg-emerald-500/20 transition-colors print:hidden cursor-pointer">
            <FileDown className="w-4 h-4" />
            <span className="font-medium">Download PDF Resume</span>
          </a>
        </motion.div>
      </motion.section>

      {/* Experience & Leadership Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER_CONTAINER_VARIANTS}
        className="space-y-8"
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <TerminalSquare className="w-6 h-6 text-zinc-950 dark:text-zinc-50" />
          <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">Leadership & Experience</h2>
        </motion.div>

        <div className="grid gap-6">
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="group relative border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20 p-6 rounded-2xl hover:bg-zinc-200 dark:bg-zinc-800/40 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">Founder</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium">Drone Club – SJCET</p>
              </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Established the college&apos;s first drone club. Organized workshops, competitions, and hands-on drone development sessions for students to foster interest and expertise in autonomous systems.
            </p>
          </motion.div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="group relative border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20 p-6 rounded-2xl hover:bg-zinc-200 dark:bg-zinc-800/40 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">Software Head</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium">NIDAR 2025</p>
              </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Headed the software division to develop an autonomous drone system for precision agriculture, optimizing payload drop mechanisms and custom imaging workflows for efficient crop monitoring.
            </p>
          </motion.div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="group relative border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20 p-6 rounded-2xl hover:bg-zinc-200 dark:bg-zinc-800/40 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">Team Lead</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium">Vitals 24</p>
              </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Led a multidisciplinary team to build &quot;Bromance,&quot; a comprehensive ADHD-focused accessibility application featuring specialized typography and interactive querying methodologies.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER_CONTAINER_VARIANTS}
        className="space-y-8"
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <Code2 className="w-6 h-6 text-zinc-950 dark:text-zinc-50" />
          <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">Main Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            variants={FADE_UP_ANIMATION_VARIANTS} 
            whileHover={{ y: -5, scale: 1.01, rotate: -1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex flex-col justify-between border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-6 rounded-2xl hover:border-zinc-300 dark:border-zinc-700 transition-all h-full shadow-sm hover:shadow-md dark:shadow-none"
          >
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">AI-Driven Pandemic Simulation</h3>
                <span className="inline-flex text-xs uppercase tracking-wider font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded">GAMA Platform</span>
              </div>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                  <span>Implemented SEIDR and multi-fidelity physics-informed neural networks in GAML to simulate disease spread dynamics under varying intervention scenarios.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                  <span>Engineered agent decision rules and physics-based constraints for high-fidelity infection modeling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                  <span>Developed real-time visualizations and comparative analytics for policy impact assessment.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            variants={FADE_UP_ANIMATION_VARIANTS} 
            whileHover={{ y: -5, scale: 1.01, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex flex-col justify-between border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-6 rounded-2xl hover:border-zinc-300 dark:border-zinc-700 transition-all h-full shadow-sm hover:shadow-md dark:shadow-none"
          >
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">Long-Context Token Gater</h3>
                <span className="inline-flex text-xs uppercase tracking-wider font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded">LLM Optimization</span>
              </div>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                  <span>Developed a modular system to optimize how LLMs process long-form data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                  <span>Implemented specialized gating modules using hybrid, joint entropy, and quantum-based logic.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                  <span>Includes scripts for mass query execution and synthetic QA generation.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            variants={FADE_UP_ANIMATION_VARIANTS} 
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex flex-col justify-between border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-6 rounded-2xl hover:border-zinc-300 dark:border-zinc-700 transition-all md:col-span-2 shadow-sm hover:shadow-md dark:shadow-none"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">Bromance App: ADHD Attention Methods</h3>
                  <div className="flex gap-2">
                    <span className="inline-flex text-xs uppercase tracking-wider font-semibold bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 px-2 py-1 rounded">1st Place • Vitals 24</span>
                    <span className="inline-flex text-xs uppercase tracking-wider font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded">Flutter / Cross-Platform</span>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-zinc-600 dark:text-zinc-400 text-sm mt-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-zinc-700 dark:text-zinc-300">OpenDyslexic Typography:</strong> Integrated specialized fonts to letters from appearing to flip or rotate.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-zinc-700 dark:text-zinc-300">Interactive Querying:</strong> Replaced passive reading with an active retrieval system, encouraging users to engage with data through searching and questioning.
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-zinc-700 dark:text-zinc-300">Cross-Platform UI:</strong> Built with Flutter to ensure a predictable and uniform interface across Android, iOS, Web, and Desktop, reducing the cognitive effort needed to navigate different devices.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER_CONTAINER_VARIANTS}
        className="space-y-8"
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <Wrench className="w-6 h-6 text-zinc-950 dark:text-zinc-50" />
          <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">Technical Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
            <h3 className="text-lg font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
              <TerminalSquare className="w-4 h-4 text-zinc-600 dark:text-zinc-400" /> Software & Data
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'OpenCV', 'PyTorch', 'Pandas', 'NumPy', 'SQL', 'R', 'GAMA Platform', 'Matplotlib', 'Git', 'Jupyter'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:border-zinc-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
            <h3 className="text-lg font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-zinc-600 dark:text-zinc-400" /> Hardware & Robotics
            </h3>
            <div className="flex flex-wrap gap-2">
              {['NVIDIA Jetson Orin Nano', 'Raspberry Pi 4', 'Arduino UNO', 'ESP32', 'Pixhawk', 'GNSS Modules', 'Siyi A8 Mini', 'Skydroid T12', 'LoRa HAT', 'UART / I2C / SPI'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:border-zinc-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Awards Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER_CONTAINER_VARIANTS}
        className="space-y-8"
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <Trophy className="w-6 h-6 text-zinc-950 dark:text-zinc-50" />
          <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">Competitions & Awards</h2>
        </motion.div>

        <div className="grid gap-4">
          {[
            { title: 'SAEIndia ADDC 2026', org: 'Autonomous Drone Development Challenge', result: 'AIR 20', detail: 'Developed QR detection algorithm and automated payload drop mechanism for a fully autonomous drone in live flight competition.' },
            { title: 'NIDAR 2025', org: 'National Drone Competition', result: 'Overall AIR 12', detail: 'Design Review AIR 5, Business Plan AIR 8, Ignite Prize AIR 13.' },
            { title: 'Business Plan Presentation', org: 'SAEIndia, SJCET', result: '1st Place', detail: 'Presented viable startup plan with cost analysis, market strategy, and prototype validation; ranked 1st among 10+ teams.' },
            { title: 'Vitals 24', org: 'IEEE, Sahrdaya College', result: '1st Place', detail: 'Created Bromance app for ADHD students; outperformed 700+ teams; Prize USD 500.' },
            { title: 'Blitzkrieg Hackathon', org: 'Sacred Hearts College, Kochi', result: '1st Place', detail: 'Solved 4 timed algorithmic challenges under 3-hour constraint; outperformed 10+ teams; Prize INR 8,000.' },
            { title: 'Astra 2024 Secret Syntax', org: 'Sacred Hearts College, Kochi', result: '1st Place', detail: 'Wrote and debugged code without looking at the screen; Prize INR 4,000.' },
            { title: 'Codezilla Hackathon', org: 'ADSA, SJCET', result: '2nd Place', detail: 'Completed multiple timed coding challenges focused on optimization and logic.' },
            { title: '3rd SAEISS Autonomous Drone Challenge 2024–25', org: 'SAEIndia Southern Section', result: '17th Nationally', detail: 'Achieved 17th nationally and 2nd in Kerala.' },
          ].map((award, i) => (
            <motion.div key={i} variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl hover:bg-zinc-100/50 dark:bg-zinc-900/50 transition-colors border border-transparent hover:border-zinc-200 dark:border-zinc-800 group">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                  <h3 className="font-medium text-zinc-800 dark:text-zinc-200">{award.title}</h3>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 pl-6">{award.org}</p>
                {award.detail && <p className="text-sm text-zinc-600 dark:text-zinc-400 pl-6 mt-1">{award.detail}</p>}
              </div>
              <div className="mt-2 md:mt-0 pl-6 md:pl-0 text-left md:text-right shrink-0">
                <span className="inline-flex items-center rounded-md bg-zinc-200/50 dark:bg-zinc-200 dark:bg-zinc-800/50 px-2 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 ring-1 ring-inset ring-zinc-700/50">
                  {award.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER_CONTAINER_VARIANTS}
        className="space-y-8"
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <GraduationCap className="w-6 h-6 text-zinc-950 dark:text-zinc-50" />
          <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">Education</h2>
        </motion.div>

        <div className="grid gap-6">
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col md:flex-row justify-between gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20">
            <div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">B.Tech in Artificial Intelligence and Data Science</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">St. Joseph’s College of Engineering and Technology</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                {['Machine Learning', 'AI & Data Science', 'Big Data Analytics', 'Robotics', 'Algorithm Analysis', 'Statistical Modeling'].map(course => (
                  <span key={course} className="bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded">{course}</span>
                ))}
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Choondachery, Kerala</p>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-1">CGPA: 7.71</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pt-20 pb-10 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-600 dark:text-zinc-400 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p>© {new Date().getFullYear()} Aaron Johns. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Languages className="w-4 h-4"/> English, Malayalam, Arabic</span>
        </div>
      </motion.footer>
    </main>
    </>
  );
}
