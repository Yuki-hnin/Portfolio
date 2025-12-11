import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

// Disable Framer Motion warnings for non-animatable SVG properties
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    svg { pointer-events: none; }
  `;
  document.head.appendChild(style);
}

export function Hero() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    const resumePath = new URL('./assets/HNIN EAINDRA HTUN_RESUME.pdf', import.meta.url).href;
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Hnin_Eaindra_Htun_Resume.pdf';
    link.click();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-rose-950/20 to-slate-950" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-rose-600 shadow-lg shadow-rose-600/50 hover:shadow-rose-600/80 transition-shadow">
              <img
                src={new URL('./assets/profile.jpg', import.meta.url).href}
                alt="Hnin Eaindra Htun"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/96/1f2937/06b6d4?text=Photo';
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-rose-600/10 border border-rose-600/20 text-rose-600">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="block text-gray-300 mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-rose-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              Hnin Eaindra Htun
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <TypewriterText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Computer Science student specializing in Data Science at AlBukhari International University. 
            Passionate about building innovative web applications, analyzing data, and creating elegant user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168,85,247,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-rose-600 to-purple-600 text-white"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full border border-rose-600/30 text-rose-600 hover:bg-rose-600/10"
            >
              Get In Touch
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="px-8 py-3 rounded-full border border-rose-600/30 text-rose-600 hover:bg-rose-600/10 flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/Yuki-hnin', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/hnin-eaindra-htun-b522a4282/', label: 'LinkedIn' },
              { icon: Mail, href: 'hnin.htun@student.aiu.edu.my', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-rose-600/50 hover:bg-rose-600/10 transition-colors"
                aria-label={social.label}
              >
                <div className="text-gray-300">
                  <social.icon size={20} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <div className="text-cyan-400">
            <ArrowDown size={32} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TypewriterText() {
  const titles = ['Data Science Student', 'Full Stack Developer', 'UI/UX Designer', 'Data Analyst'];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 flex items-center justify-center">
      <motion.span
        key={currentTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-xl text-rose-600"
      >
        {titles[currentTitle]}
      </motion.span>
    </div>
  );
}