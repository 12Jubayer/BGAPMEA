import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Building2 className="w-5 h-5 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold">BGAPMEA</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading the way in business excellence and innovation across Bangladesh and international markets.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:aljubayer92@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  aljubayer92@gmail.com
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Phone className="w-5 h-5 text-teal-400" />
                <a href="tel:+8801305223310" className="text-gray-300 hover:text-white transition-colors">
                  +8801305223310
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Chandpur, Chittagong, Bangladesh</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['About Us', 'Services', 'Clients', 'B2B Partners', 'Contact'].map((link, index) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="block"
                >
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Developer Credit */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Developed By</h4>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 p-4 rounded-lg border border-blue-500/30"
            >
              <a 
                href="https://devs-marketting.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-300 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Devs Marketing</span>
              </a>
              <p className="text-xs text-gray-400 mt-2">
                Professional Web Development & Digital Marketing Solutions
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 BGAPMEA. All rights reserved. Developed with ❤️ by{' '}
            <a 
              href="https://devs-marketting.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition-colors"
            >
              Devs Marketing
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;