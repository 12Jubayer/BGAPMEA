import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Building2, Globe, MessageSquare } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
      service: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+8801305223310", "Available 24/7"],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["aljubayer92@gmail.com", "Response within 24 hours"],
      color: "from-teal-500 to-teal-700"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Chandpur, Chittagong", "Bangladesh"],
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekend: By Appointment"],
      color: "from-green-500 to-green-700"
    }
  ];

  const services = [
    "Business Consulting",
    "International Trade",
    "Partnership Development",
    "Market Research",
    "Human Resources",
    "Risk Management",
    "Other"
  ];

  const officeLocations = [
    {
      city: "Chittagong",
      country: "Bangladesh",
      address: "Main Office, Chandpur, Chittagong",
      phone: "+8801305223310",
      email: "chittagong@bgapmea.com",
      isMain: true
    },
    {
      city: "Dhaka",
      country: "Bangladesh",
      address: "Business District, Dhaka",
      phone: "+8801305223311",
      email: "dhaka@bgapmea.com",
      isMain: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Ready to take your business to the next level? Get in touch with our experts today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu text-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.5
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform-gpu`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className={`${detailIndex === 0 ? 'text-gray-900 font-semibold' : 'text-gray-600'} ${detailIndex > 0 ? 'mt-1' : 'mb-2'}`}>
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <motion.form
                whileHover={{ scale: 1.02 }}
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg space-y-6 transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </motion.div>
                  
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+8801xxxxxxxxx"
                    />
                  </motion.div>
                </div>
                
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </motion.div>
                
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Brief subject of your inquiry"
                  />
                </motion.div>
                
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-8 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-2xl transition-all duration-300 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </motion.button>
              </motion.form>
            </motion.div>
            
            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Locations</h2>
              
              <div className="space-y-6">
                {officeLocations.map((location, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                    }}
                    className={`p-6 rounded-2xl shadow-lg transition-all duration-500 transform-gpu ${
                      location.isMain 
                        ? 'bg-gradient-to-br from-blue-600 to-teal-600 text-white' 
                        : 'bg-white'
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        animate={{ 
                          rotateY: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 10,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.5
                        }}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transform-gpu ${
                          location.isMain ? 'bg-white/20' : 'bg-gradient-to-r from-blue-600 to-teal-600'
                        }`}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <Building2 className={`w-6 h-6 ${location.isMain ? 'text-white' : 'text-white'}`} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className={`text-xl font-bold ${location.isMain ? 'text-white' : 'text-gray-900'}`}>
                            {location.city}
                          </h3>
                          {location.isMain && (
                            <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                              Main Office
                            </span>
                          )}
                        </div>
                        
                        <p className={`font-medium mb-1 ${location.isMain ? 'text-blue-100' : 'text-gray-600'}`}>
                          {location.country}
                        </p>
                        
                        <p className={`mb-3 ${location.isMain ? 'text-blue-100' : 'text-gray-600'}`}>
                          {location.address}
                        </p>
                        
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Phone className={`w-4 h-4 ${location.isMain ? 'text-blue-200' : 'text-blue-600'}`} />
                            <span className={`text-sm ${location.isMain ? 'text-blue-100' : 'text-gray-600'}`}>
                              {location.phone}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Mail className={`w-4 h-4 ${location.isMain ? 'text-blue-200' : 'text-blue-600'}`} />
                            <span className={`text-sm ${location.isMain ? 'text-blue-100' : 'text-gray-600'}`}>
                              {location.email}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Map Placeholder */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8 bg-white p-6 rounded-2xl shadow-lg transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-700">Interactive Map</p>
                    <p className="text-sm text-gray-500">Find us on Google Maps</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common inquiries</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What services does BGAPMEA offer?",
                answer: "We offer comprehensive business solutions including consulting, international trade facilitation, partnership development, market research, HR services, and risk management."
              },
              {
                question: "How can BGAPMEA help my business expand internationally?",
                answer: "We provide market entry strategies, partner identification, compliance support, and leverage our global network to connect your business with international opportunities."
              },
              {
                question: "What industries do you work with?",
                answer: "We serve various industries including manufacturing, technology, financial services, international trade, agriculture, and more across 50+ countries."
              },
              {
                question: "How do I get started with BGAPMEA?",
                answer: "Simply contact us through this form, phone, or email. We'll schedule a consultation to understand your needs and develop a customized solution."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl shadow-lg transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <MessageSquare className="w-5 h-5 text-blue-600 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactUs;