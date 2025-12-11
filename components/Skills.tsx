import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: 'Programming & Development',
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript / React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'SQL & Databases', level: 85 },
      ],
    },
    {
      title: 'Data Science & ML',
      color: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Data Mining & Analytics', level: 88 },
        { name: 'Data Structures & Algorithms', level: 90 },
        { name: 'Tableau & PowerBI', level: 75 },
      ],
    },
    {
      title: 'Design & UI/UX',
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Adobe Photoshop', level: 80 },
        { name: 'Canva & Capcut', level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      color: 'from-orange-400 to-red-500',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Linux', level: 75 },
        { name: 'Postman', level: 80 },
        { name: 'Google Workspace', level: 90 },
      ],
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
            className="inline-block px-4 py-2 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 mb-6"
          >
            Skills & Expertise
          </motion.span>
          <h2 className="mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            What I Bring to the Table
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A diverse skill set combining technical expertise with creative problem-solving 
            to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                        className="text-cyan-400 text-sm"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                      
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-100%', '400%'],
                        }}
                        transition={{
                          duration: 2,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5,
                          ease: 'easeInOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circular Progress Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-center text-white mb-12">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Problem Solving', value: 95, color: 'text-cyan-400' },
              { label: 'Communication', value: 90, color: 'text-purple-400' },
              { label: 'Creativity', value: 92, color: 'text-pink-400' },
              { label: 'Leadership', value: 88, color: 'text-green-400' },
            ].map((competency, index) => (
              <motion.div
                key={competency.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-32 h-32 mb-4">
                  {/* Background circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-slate-700"
                    />
                    
                    {/* Progress circle */}
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      className={competency.color}
                      initial={{ strokeDasharray: '351.68', strokeDashoffset: '351.68' }}
                      animate={
                        isInView
                          ? {
                              strokeDashoffset: 351.68 - (351.68 * competency.value) / 100,
                            }
                          : {}
                      }
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
                    />
                  </svg>
                  
                  {/* Center text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className={`${competency.color}`}
                    >
                      {competency.value}%
                    </motion.span>
                  </div>
                </div>
                
                <span className="text-gray-300 text-center text-sm">{competency.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}