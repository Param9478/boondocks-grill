/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Send, MessageCircle } from 'lucide-react';
import PropTypes from 'prop-types';

const ContactForm = ({ itemVariants }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            'form-name': 'contact',
            ...formData,
          }).toString(),
        });
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        alert('Failed to send message: ' + error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <motion.div
      variants={itemVariants}
      className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="grid md:grid-cols-2">
        <div className="p-8 md:p-12">
          <motion.h2
            className="text-3xl font-bold mb-6 text-gray-800"
            variants={itemVariants}
          >
            <span className="text-yellow-500">Send Us</span> a Message
          </motion.h2>

          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-6 w-2/3"
            variants={itemVariants}
          />

          <motion.p
            className="text-gray-700 font-light text-sm mb-8"
            variants={itemVariants}
          >
            We'd love to hear from you! Please fill out the form and we'll get
            back to you as soon as possible.
          </motion.p>

          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <motion.div className="relative group" variants={itemVariants}>
              <User
                className="absolute left-4 top-4 text-gray-400 group-hover:text-yellow-500 transition-colors"
                size={20}
              />
              <motion.input
                whileFocus={{
                  scale: 1.01,
                  boxShadow: '0 0 0 3px rgba(234, 179, 8, 0.2)',
                }}
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`pl-12 w-full p-4 border rounded-lg ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:border-yellow-500 transition-all focus:outline-none`}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </motion.div>

            <motion.div className="relative group" variants={itemVariants}>
              <Mail
                className="absolute left-4 top-4 text-gray-400 group-hover:text-yellow-500 transition-colors"
                size={20}
              />
              <motion.input
                whileFocus={{
                  scale: 1.01,
                  boxShadow: '0 0 0 3px rgba(234, 179, 8, 0.2)',
                }}
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`pl-12 w-full p-4 border rounded-lg ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-yellow-500 transition-all focus:outline-none`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </motion.div>

            <motion.div className="relative group" variants={itemVariants}>
              <MessageCircle
                className="absolute left-4 top-4 text-gray-400 group-hover:text-yellow-500 transition-colors"
                size={20}
              />
              <motion.textarea
                whileFocus={{
                  scale: 1.01,
                  boxShadow: '0 0 0 3px rgba(234, 179, 8, 0.2)',
                }}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`pl-12 w-full p-4 border rounded-lg ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:border-yellow-500 transition-all focus:outline-none`}
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg flex items-center justify-center gap-2 shadow-md transition-colors font-semibold focus:outline-none"
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </form>
        </div>

        <div className="hidden md:block relative bg-gradient-to-br from-yellow-50 to-yellow-100">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(234, 179, 8, 0.2) 10px, rgba(234, 179, 8, 0.2) 20px)',
                backgroundSize: '28.28px 28.28px',
              }}
            ></div>
          </div>

          {/* Floating particles - matching Component1 */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-yellow-400/30"
              style={{
                width: 4 + Math.random() * 8,
                height: 4 + Math.random() * 8,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}

          {/* Central decorative element */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
            <motion.div
              className="absolute inset-0 rounded-full bg-yellow-500/10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />

            <motion.div
              className="absolute inset-4 rounded-full bg-yellow-500/20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 0.5,
              }}
            />

            <motion.div
              className="absolute inset-8 rounded-full bg-yellow-500/30 flex items-center justify-center"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Send size={32} className="text-yellow-600/60" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
ContactForm.propTypes = {
  itemVariants: PropTypes.object.isRequired,
};
export default ContactForm;
