import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface Message {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY_HERE'); // Get this from EmailJS dashboard
    // Load messages from localStorage
    const savedMessages = localStorage.getItem('contactMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hnin.htun@student.aiu.edu.my',
      href: 'mailto:hnin.htun@student.aiu.edu.my',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+60113967476',
      href: 'tel:+60113967476',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Alor Setar, Kedah, Malaysia',
      href: '#',
      gradient: 'from-green-400 to-emerald-500',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const timestamp = new Date().toLocaleString();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'hnin.htun@student.aiu.edu.my', // Your Gmail
      message: formData.message,
      timestamp: timestamp,
    };

    emailjs
      .send('SERVICE_ID_HERE', 'TEMPLATE_ID_HERE', templateParams)
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
        // Add message to list with timestamp
        const newMessage: Message = {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: timestamp,
        };
        const updatedMessages = [newMessage, ...messages];
        setMessages(updatedMessages);
        localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
        
        setSubmitMessage('Message sent successfully! ✓');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitMessage(''), 3000);
      })
      .catch((error) => {
        console.error('Failed to send email', error);
        setSubmitMessage('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            className="inline-block px-4 py-2 rounded-full bg-pink-400/10 border border-pink-400/20 text-pink-400 mb-6"
          >
            Get In Touch
          </motion.span>
          <h2 className="mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon className="text-white" size={20} />
                  </motion.div>
                  <div>
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    <div className="text-white">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20"
            >
              <h4 className="text-white mb-4">Why Work With Me?</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Responsive communication and regular updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Clean, maintainable, and well-documented code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Attention to detail and pixel-perfect designs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>On-time delivery and professional service</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 text-white transition-all duration-300"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 text-white transition-all duration-300"
                  placeholder="hnin@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 text-white transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(6,182,212,0.3)' }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-center ${
                    submitMessage.includes('successfully')
                      ? 'bg-green-400/10 text-green-400 border border-green-400/20'
                      : 'bg-red-400/10 text-red-400 border border-red-400/20'
                  }`}
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Messages Received */}
        {messages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-slate-800"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Clock className="w-6 h-6 text-cyan-400" />
              Messages Received
            </h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-white font-semibold">{msg.name}</p>
                      <p className="text-gray-400 text-sm">{msg.email}</p>
                    </div>
                    <span className="text-cyan-400 text-xs whitespace-nowrap ml-4">
                      {msg.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{msg.message}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-8 border-t border-slate-800 text-center text-gray-400 text-sm"
        >
          <p>© 2025 Hnin Eaindra Htun. All rights reserved.</p>
          <p className="mt-2">Designed & Built with passion ❤️</p>
        </motion.div>
      </div>
    </div>
  );
}