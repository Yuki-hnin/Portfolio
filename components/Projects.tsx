import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Islamic Book Library Website',
      description: 'An online Islamic digital library with searchable book categories and an accessible, mobile-friendly reading interface.',
      image: 'https://images.unsplash.com/photo-1725112690272-84c409dc3464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwbGlicmFyeSUyMGJvb2tzfGVufDF8fHx8MTc2NTQzNzkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Full Stack', 'React', 'Node.js', 'MongoDB'],
      gradient: 'from-cyan-500 to-blue-500',
      date: 'July 2025',
    },
    {
      title: 'Lavender Hotel Website',
      description: 'A responsive hotel booking website with organized room listings, booking forms, and a clean user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJvb2tpbmd8ZW58MXx8fHwxNzY1MzYzNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['UI/UX', 'React', 'Figma', 'Responsive'],
      gradient: 'from-purple-500 to-pink-500',
      date: 'July 2025',
    },
    {
      title: 'Teacher Evaluation System',
      description: 'A role-based evaluation system with Teacher, Principal, Admin HR dashboards, forms, and real-time charts using Django & React.',
      image: 'https://images.unsplash.com/photo-1560785496-321917f24016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwZXZhbHVhdGlvbnxlbnwxfHx8fDE3NjU0Mzc5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Frontend', 'Django', 'React', 'Charts'],
      gradient: 'from-orange-500 to-red-500',
      date: 'Oct 2025 - Jan 2025',
    },
    {
      title: 'Airline Delay Anomaly Detection',
      description: 'Implemented ML models (Isolation Forest, LOF, One-Class SVM) to identify extreme flight delays using ROC-AUC evaluation.',
      image: 'https://images.unsplash.com/photo-1753040050114-ae924195a578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGlnaHQlMjBkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NTQzNzkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Data Analysis', 'Python', 'Machine Learning', 'Scikit-learn'],
      gradient: 'from-green-500 to-emerald-500',
      date: 'Aug 2025',
    },
  ];

  return (
    <div ref={ref} className="relative py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-400 mb-6"
          >
            My Work
          </motion.span>
          <h2 className="mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A selection of projects that showcase my skills, creativity, and passion for building 
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-400/30 transition-all duration-300">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                  />

                  {/* Hover Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredProject === index ? 1 : 0,
                      y: hoveredProject === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white text-slate-900 shadow-lg"
                      aria-label="View project"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white text-slate-900 shadow-lg"
                      aria-label="View code"
                    >
                      <Github size={20} />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        className="px-3 py-1 rounded-full bg-slate-700/50 text-cyan-400 text-xs border border-slate-600"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  }}
                  animate={{
                    x: hoveredProject === index ? ['-100%', '200%'] : '-100%',
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}