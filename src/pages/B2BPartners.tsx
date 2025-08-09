import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Handshake, TrendingUp, Users, Building2, Award, ArrowRight, MapPin } from 'lucide-react';

const B2BPartners: React.FC = () => {
  const partners = [
    {
      name: "European Trade Alliance",
      region: "Europe",
      flag: "🇪🇺",
      specialization: "Manufacturing & Export",
      established: "2015",
      description: "Leading trade consortium covering 15+ European countries with focus on textile and manufacturing exports.",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Asia Pacific Business Network",
      region: "Asia Pacific",
      flag: "🌏",
      specialization: "Technology & Innovation",
      established: "2018",
      description: "Dynamic network of tech companies and startups across APAC region driving digital transformation.",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "North American Solutions Group",
      region: "North America",
      flag: "🇺🇸",
      specialization: "Logistics & Supply Chain",
      established: "2016",
      description: "Comprehensive supply chain and logistics solutions provider serving US and Canadian markets.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Middle East Trade Hub",
      region: "Middle East",
      flag: "🕌",
      specialization: "Energy & Infrastructure",
      established: "2019",
      description: "Strategic partnership network focusing on energy, infrastructure, and construction projects.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "African Development Partners",
      region: "Africa",
      flag: "🌍",
      specialization: "Agriculture & Mining",
      established: "2020",
      description: "Emerging markets focus on agricultural development and natural resources management.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Latin America Business Collective",
      region: "Latin America",
      flag: "🌎",
      specialization: "Finance & Investment",
      established: "2017",
      description: "Financial services and investment opportunities across Central and South American markets.",
      image: "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const partnershipBenefits = [
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Expand your reach to international markets through our extensive partner network"
    },
    {
      icon: Handshake,
      title: "Strategic Alliances",
      description: "Form meaningful partnerships that create mutual value and long-term growth"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Accelerate your business expansion with proven partnership strategies"
    },
    {
      icon: Users,
      title: "Expert Networks",
      description: "Connect with industry experts and thought leaders across different sectors"
    }
  ];

  const stats = [
    { number: "200+", label: "Global Partners" },
    { number: "50+", label: "Countries" },
    { number: "15+", label: "Industry Sectors" },
    { number: "95%", label: "Success Rate" }
  ];

  const regions = [
    { name: "Europe", partners: 45, color: "from-blue-500 to-blue-700" },
    { name: "Asia Pacific", partners: 38, color: "from-teal-500 to-teal-700" },
    { name: "North America", partners: 32, color: "from-purple-500 to-purple-700" },
    { name: "Middle East", partners: 28, color: "from-green-500 to-green-700" },
    { name: "Africa", partners: 25, color: "from-orange-500 to-orange-700" },
    { name: "Latin America", partners: 22, color: "from-red-500 to-red-700" }
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
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">B2B Partners</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Building strategic partnerships across continents to create global business opportunities and drive mutual success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                viewport={{ once: true }}
                className="text-center transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotateZ: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.5
                  }}
                  className="text-4xl md:text-6xl font-bold text-blue-600 mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Distribution */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Global Reach</h2>
            <p className="text-xl text-gray-600">Our partners span across all continents</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotateY: [0, 360]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.5
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${region.color} rounded-2xl flex items-center justify-center mb-6 transform-gpu`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <MapPin className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{region.name}</h3>
                <p className="text-3xl font-bold text-blue-600">{region.partners} Partners</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our key strategic partners from around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform-gpu group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 text-3xl">{partner.flag}</div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{partner.region}</p>
                    <p className="text-xs opacity-90">Since {partner.established}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm rounded-full mb-3">
                    {partner.specialization}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-xl text-blue-100">Why businesses choose to partner with us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-500 transform-gpu"
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
                  className="w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6 transform-gpu"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotateY: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity
              }}
              className="w-24 h-24 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-8 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Handshake className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our global network of partners and unlock new opportunities for your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Apply for Partnership
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Partnership Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default B2BPartners;