import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Send, MessageCircle } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
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
        toast.success('Message sent successfully!');
      } catch (error) {
        toast.error('Failed to send message', error);
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white rounded-lg shadow-lg p-8 md:p-12"
    >
      <h2 className="text-3xl font-semibold text-center mb-8">
        Send Us a Message
      </h2>
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        className="max-w-3xl mx-auto space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="relative group">
          <User
            className="absolute left-4 top-4 text-gray-400 group-hover:text-yellow-500 transition-colors"
            size={20}
          />
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`pl-12 w-full p-4 border rounded-lg ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all focus:outline-none`}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        <div className="relative group">
          <Mail
            className="absolute left-4 top-4 text-gray-400 group-hover:text-yellow-500 transition-colors"
            size={20}
          />
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={`pl-12 w-full p-4 border rounded-lg ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all focus:outline-none`}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        <div className="relative group">
          <MessageCircle
            className="absolute left-4 top-4 text-gray-400 group-hover:text-yellow-500 transition-colors"
            size={20}
          />
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`pl-12 w-full p-4 border rounded-lg ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all focus:outline-none`}
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg flex items-center justify-center gap-2 shadow-md transition-colors font-semibold focus:outline-none"
        >
          <Send size={20} />
          Send Message
        </motion.button>
      </form>
      <ToastContainer position="top-right" />
    </motion.div>
  );
};

export default ContactForm;
