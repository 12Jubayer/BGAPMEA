import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Users, Globe, TrendingUp, Calendar, MapPin, Phone } from 'lucide-react';

const CompanyProfile: React.FC = () => {
  const milestones = [
    { year: "2009", event: "Company Founded", description: "Started as a small business consultancy in Chittagong" },
    { year: "2012", event: "First International Partnership", description: "Established our first B2B partnership with European markets" },
    { year: "2015", event: "Regional Expansion", description: "Expanded operations across Bangladesh and South Asia" },
    { year: "2018", event: "Digital Transformation", description: "Launched digital services and online platforms" },
    { year: "2021", event: "Global Recognition", description: "Received international business excellence award" },
    { year: "2025", event: "Market Leadership", description: "Became a leading B2B solutions provider in the region" }
  ];

  const leadership = [
    {
      name: "Mohammed Rahman",
      position: "Chief Executive Officer",
      experience: "15+ years",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Sarah Ahmed",
      position: "Chief Operations Officer",
      experience: "12+ years",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "David Chen",
      position: "Chief Technology Officer",
      experience: "10+ years",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", type: "Quality Management" },
    { name: "ISO 27001:2013", type: "Information Security" },
    { name: "CMMI Level 3", type: "Process Maturity" },
    { name: "GDPR Compliance", type: "Data Protection" }
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
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Company Profile</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Discover BGAPMEA's journey, leadership, and commitment to excellence in business solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">BGAPMEA (Bangladesh Apparel & Textile Manufacturers and Exporters Association)</strong> 
                  is a premier business solutions provider specializing in connecting local enterprises with global markets. 
                  Founded in 2009, we have evolved into a comprehensive B2B solutions company serving clients across 50+ countries.
                </p>
                <p>
                  Our expertise spans across various industries including textiles, manufacturing, technology, and international trade. 
                  We pride ourselves on being the bridge between Bangladesh's growing economy and international business opportunities.
                </p>
                <p>
                  With headquarters in Chandpur, Chittagong, Bangladesh, and a network of international partners, 
                  BGAPMEA continues to drive innovation and excellence in business consulting, trade facilitation, 
                  and strategic partnership development.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700"><strong>Founded:</strong> 2009</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700"><strong>Location:</strong> Chandpur, Chittagong</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700"><strong>Employees:</strong> 250+</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700"><strong>Countries:</strong> 50+</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700"><strong>Phone:</strong> +8801305223310</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped our company</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-teal-600 rounded-full" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </motion.div>
                </div>
                
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotateZ: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center z-10 transform-gpu"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="w-4 h-4 bg-white rounded-full" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries driving our success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
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
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg transform-gpu"
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">{leader.position}</p>
                <p className="text-gray-600">Experience: {leader.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Standards</h2>
            <p className="text-xl text-blue-100">Our commitment to quality and compliance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-500 transform-gpu"
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
                  className="w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4 transform-gpu"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-blue-100 text-sm">{cert.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CompanyProfile;