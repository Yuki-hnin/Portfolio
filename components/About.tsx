import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Sparkles, Rocket } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with React, Node.js, and modern technologies.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with Figma and modern design tools.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Sparkles,
      title: 'Data Science',
      description: 'Analyzing data patterns and building machine learning models for intelligent solutions.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Rocket,
      title: 'Problem Solving',
      description: 'Strong foundation in algorithms, data structures, and computational thinking.',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  return (
    <div ref={ref} className="relative py-32 px-6 bg-slate-900/50">
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
            className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 mb-6"
          >
            About Me
          </motion.span>
          <h2 className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Student. Developer. Designer.
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Currently pursuing a Bachelor of Computer Science (Hons) with a specialization in Data Science 
            at AlBukhari International University, maintaining a GPA of 3.78. I combine technical expertise 
            with creative problem-solving to build meaningful digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              />
              <div className="relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700 group-hover:border-cyan-400/30 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="text-white" size={24} />
                </motion.div>
                <h3 className="mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="mb-6 text-white">My Journey</h3>
            <div className="space-y-4 text-gray-400">
              <p>
                As a Computer Science student specializing in Data Science, I've developed a strong foundation 
                in programming, algorithms, and statistical analysis. My coursework includes Python, OOP, 
                Machine Learning, and Software Engineering.
              </p>
              <p>
                Beyond academics, I've gained hands-on experience through various projects, from building 
                full-stack web applications to developing data analysis models. I'm passionate about using 
                technology to solve real-world problems.
              </p>
              <p>
                I'm also actively involved in university organizations like AMSA, where I serve in leadership 
                roles managing content and design. This has helped me develop strong teamwork and communication skills.
              </p>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative z-10"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY1NDMwNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}