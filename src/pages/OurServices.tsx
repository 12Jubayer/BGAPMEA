import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Globe, Handshake, TrendingUp, Users, Shield, Lightbulb, ArrowRight } from 'lucide-react';

const OurServices: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: "Business Consulting",
      description: "Strategic guidance and expert advice to help your business achieve sustainable growth and competitive advantage.",
      features: ["Strategic Planning", "Market Analysis", "Process Optimization", "Risk Management"],
      color: "from-blue-500 to-blue-700",
      link: "/learn-more/consulting"
    },
    {
      icon: Globe,
      title: "International Trade",
      description: "Comprehensive trade solutions connecting your business with global markets and international opportunities.",
      features: ["Export/Import Consulting", "Market Entry Strategy", "Compliance Management", "Supply Chain Optimization"],
      color: "from-teal-500 to-teal-700",
      link: "/learn-more/trade"
    },
    {
      icon: Handshake,
      title: "Partnership Development",
      description: "Building strategic alliances and partnerships that create mutual value and drive business expansion.",
      features: ["Partner Identification", "Due Diligence", "Contract Negotiation", "Relationship Management"],
      color: "from-purple-500 to-purple-700",
      link: "/learn-more/partnerships"
    },
    {
      icon: TrendingUp,
      title: "Market Research",
      description: "In-depth market analysis and research to inform strategic decisions and identify growth opportunities.",
      features: ["Industry Analysis", "Competitive Intelligence", "Consumer Insights", "Trend Forecasting"],
      color: "from-green-500 to-green-700",
      link: "/learn-more/research"
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Comprehensive HR solutions to optimize your workforce and enhance organizational effectiveness.",
      features: ["Talent Acquisition", "Performance Management", "Training & Development", "HR Compliance"],
      color: "from-orange-500 to-orange-700",
      link: "/learn-more/hr"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect your business interests.",
      features: ["Risk Assessment", "Compliance Auditing", "Insurance Consulting", "Crisis Management"],
      color: "from-red-500 to-red-700",
      link: "/learn-more/risk"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive consultation to understand your business needs and objectives."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Our experts develop customized strategies tailored to your specific requirements and goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We work closely with your team to implement solutions efficiently and effectively."
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description: "Continuous monitoring and ongoing support ensure sustained success and optimization."
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
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive business solutions designed to drive growth, innovation, and success across all industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert solutions tailored to meet your unique business challenges and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu group"
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
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 transform-gpu`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link to={service.link}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 group/btn`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful outcomes for every project
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full transform -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                  viewport={{ once: true }}
                  className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotateZ: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto transform-gpu"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {step.step}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white">
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
              className="w-24 h-24 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-8 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Lightbulb className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let our experts help you navigate challenges and unlock new opportunities for growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default OurServices;