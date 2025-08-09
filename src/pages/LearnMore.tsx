import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Star, Users, TrendingUp, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearnMore: React.FC = () => {
  const { section } = useParams<{ section: string }>();

  const sectionData = {
    consulting: {
      title: "Business Consulting Excellence",
      subtitle: "Strategic guidance for sustainable growth",
      hero: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1920",
      description: "Our business consulting services provide strategic guidance and expert advice to help your organization achieve sustainable growth and competitive advantage in today's dynamic business environment.",
      features: [
        "Strategic Planning & Development",
        "Market Analysis & Research",
        "Process Optimization",
        "Risk Management",
        "Performance Improvement",
        "Change Management",
        "Financial Advisory",
        "Digital Transformation"
      ],
      benefits: [
        {
          title: "Increased Efficiency",
          description: "Streamline operations and eliminate bottlenecks for maximum productivity"
        },
        {
          title: "Strategic Growth",
          description: "Develop and execute strategies that drive sustainable business expansion"
        },
        {
          title: "Risk Mitigation",
          description: "Identify and address potential risks before they impact your business"
        },
        {
          title: "Competitive Advantage",
          description: "Gain insights and strategies that set you apart from competitors"
        }
      ],
      process: [
        "Initial consultation and needs assessment",
        "Comprehensive business analysis",
        "Strategy development and planning",
        "Implementation support and guidance",
        "Performance monitoring and optimization"
      ]
    },
    trade: {
      title: "International Trade Solutions",
      subtitle: "Connecting businesses with global opportunities",
      hero: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1920",
      description: "Our international trade services facilitate global business connections, helping companies expand their reach and access new markets through comprehensive trade solutions and expert guidance.",
      features: [
        "Export/Import Consulting",
        "Market Entry Strategy",
        "Compliance Management",
        "Supply Chain Optimization",
        "Trade Finance Solutions",
        "Documentation Support",
        "Customs Clearance",
        "International Logistics"
      ],
      benefits: [
        {
          title: "Global Market Access",
          description: "Enter new international markets with confidence and strategic support"
        },
        {
          title: "Compliance Assurance",
          description: "Navigate complex international regulations with expert guidance"
        },
        {
          title: "Cost Optimization",
          description: "Reduce costs through efficient supply chain and logistics solutions"
        },
        {
          title: "Risk Management",
          description: "Minimize international trade risks through proper planning and execution"
        }
      ],
      process: [
        "Market research and opportunity analysis",
        "Regulatory compliance assessment",
        "Partner identification and vetting",
        "Documentation and logistics setup",
        "Ongoing support and optimization"
      ]
    },
    partnerships: {
      title: "Partnership Development",
      subtitle: "Building strategic alliances for mutual success",
      hero: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920",
      description: "We specialize in identifying, developing, and managing strategic partnerships that create mutual value and drive business expansion through collaborative relationships.",
      features: [
        "Partner Identification & Screening",
        "Due Diligence Services",
        "Contract Negotiation",
        "Relationship Management",
        "Joint Venture Development",
        "Strategic Alliance Formation",
        "Partnership Optimization",
        "Performance Monitoring"
      ],
      benefits: [
        {
          title: "Accelerated Growth",
          description: "Leverage partnerships to accelerate business growth and market expansion"
        },
        {
          title: "Resource Sharing",
          description: "Access complementary resources and capabilities through strategic partnerships"
        },
        {
          title: "Risk Mitigation",
          description: "Share risks and costs while maximizing opportunities for success"
        },
        {
          title: "Market Expansion",
          description: "Enter new markets more effectively through local partnerships"
        }
      ],
      process: [
        "Partnership strategy development",
        "Partner identification and evaluation",
        "Negotiation and agreement structuring",
        "Implementation and integration",
        "Ongoing relationship management"
      ]
    },
    research: {
      title: "Market Research & Analysis",
      subtitle: "Data-driven insights for informed decisions",
      hero: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920",
      description: "Our comprehensive market research services provide in-depth analysis and insights to inform strategic decisions and identify growth opportunities in your target markets.",
      features: [
        "Industry Analysis",
        "Competitive Intelligence",
        "Consumer Behavior Research",
        "Market Size & Trends",
        "SWOT Analysis",
        "Brand Positioning Research",
        "Product Development Insights",
        "Market Entry Assessment"
      ],
      benefits: [
        {
          title: "Informed Decision Making",
          description: "Make strategic decisions based on comprehensive market data and analysis"
        },
        {
          title: "Opportunity Identification",
          description: "Discover new market opportunities and growth areas for your business"
        },
        {
          title: "Competitive Advantage",
          description: "Understand your competitive landscape and develop winning strategies"
        },
        {
          title: "Risk Reduction",
          description: "Minimize business risks through thorough market understanding"
        }
      ],
      process: [
        "Research objective definition",
        "Methodology design and planning",
        "Data collection and analysis",
        "Insight generation and reporting",
        "Strategic recommendations and action plans"
      ]
    },
    hr: {
      title: "Human Resources Solutions",
      subtitle: "Optimizing your most valuable asset",
      hero: "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=1920",
      description: "Our HR solutions help organizations optimize their workforce, enhance employee engagement, and build strong organizational cultures that drive business success.",
      features: [
        "Talent Acquisition & Recruitment",
        "Performance Management Systems",
        "Employee Training & Development",
        "Compensation & Benefits Design",
        "HR Policy Development",
        "Employee Engagement Programs",
        "Succession Planning",
        "HR Compliance & Legal Support"
      ],
      benefits: [
        {
          title: "Talent Optimization",
          description: "Attract, retain, and develop top talent for your organization"
        },
        {
          title: "Productivity Enhancement",
          description: "Improve employee performance and organizational productivity"
        },
        {
          title: "Compliance Assurance",
          description: "Ensure full compliance with employment laws and regulations"
        },
        {
          title: "Cultural Development",
          description: "Build strong organizational culture that supports business goals"
        }
      ],
      process: [
        "HR assessment and gap analysis",
        "Strategy development and planning",
        "System implementation and training",
        "Performance monitoring and adjustment",
        "Continuous improvement and optimization"
      ]
    },
    risk: {
      title: "Risk Management Services",
      subtitle: "Protecting your business interests",
      hero: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
      description: "Our comprehensive risk management services help businesses identify, assess, and mitigate potential risks to protect their interests and ensure sustainable operations.",
      features: [
        "Risk Assessment & Analysis",
        "Business Continuity Planning",
        "Insurance Consulting",
        "Compliance Auditing",
        "Crisis Management",
        "Financial Risk Management",
        "Operational Risk Assessment",
        "Regulatory Compliance"
      ],
      benefits: [
        {
          title: "Risk Mitigation",
          description: "Identify and address potential risks before they impact your business"
        },
        {
          title: "Business Continuity",
          description: "Ensure your business can continue operating during challenging times"
        },
        {
          title: "Compliance Assurance",
          description: "Stay compliant with all relevant regulations and requirements"
        },
        {
          title: "Cost Reduction",
          description: "Reduce costs associated with risk exposure and incidents"
        }
      ],
      process: [
        "Risk identification and assessment",
        "Risk analysis and prioritization",
        "Mitigation strategy development",
        "Implementation and monitoring",
        "Regular review and updates"
      ]
    }
  };

  const currentSection = sectionData[section as keyof typeof sectionData];

  if (!currentSection) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Section Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/services">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Services</span>
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${currentSection.hero})` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{currentSection.title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {currentSection.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {currentSection.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl">
                  <Star className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.05, rotateY: 5 }}
                src={currentSection.hero}
                alt={currentSection.title}
                className="rounded-2xl shadow-2xl w-full transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions tailored to your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentSection.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Benefits</h2>
            <p className="text-xl text-gray-600">How our services drive your success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentSection.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-blue-100">A proven methodology for success</p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full transform -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {currentSection.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  viewport={{ once: true }}
                  className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-500 transform-gpu"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotateZ: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto transform-gpu"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>
                  
                  <p className="text-blue-100 leading-relaxed">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Globe className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let our experts help you achieve your business goals with our {currentSection.title.toLowerCase()} services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Contact Us Today
                </motion.button>
              </Link>
              
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default LearnMore;