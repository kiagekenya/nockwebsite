import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Download, Upload, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const ProcurementPage = () => {
  const heroRef = useRef(null);
  const processRef = useRef(null);
  const tendersRef = useRef(null);
  const registrationRef = useRef(null);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const heroInView = useInView(heroRef, { once: true });
  const processInView = useInView(processRef, { once: true });
  const tendersInView = useInView(tendersRef, { once: true });
  const registrationInView = useInView(registrationRef, { once: true });

  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    category: '',
  });

  const processSteps = [
    {
      title: 'Supplier Registration',
      description: 'Register your company in our supplier database',
      icon: Upload,
      status: 'active',
    },
    {
      title: 'Tender Publication',
      description: 'Opportunities published on our portal',
      icon: FileText,
      status: 'pending',
    },
    {
      title: 'Bid Submission',
      description: 'Submit your competitive proposals',
      icon: CheckCircle,
      status: 'upcoming',
    },
    {
      title: 'Evaluation Process',
      description: 'Technical and financial assessment',
      icon: Clock,
      status: 'upcoming',
    },
  ];

  const tenders = [
    {
      title: 'Supply of Heavy Fuel Oil',
      reference: 'NOCK/HFO/2025/001',
      category: 'Petroleum Products',
      deadline: '2025-03-15',
      status: 'active',
      amount: 'KSh 2.5B',
    },
    {
      title: 'Drilling Equipment Maintenance',
      reference: 'NOCK/DEM/2025/002',
      category: 'Technical Services',
      deadline: '2025-02-28',
      status: 'active',
      amount: 'KSh 150M',
    },
    {
      title: 'Environmental Impact Assessment',
      reference: 'NOCK/EIA/2025/003',
      category: 'Consultancy',
      deadline: '2025-04-10',
      status: 'upcoming',
      amount: 'KSh 50M',
    },
    {
      title: 'Pipeline Integrity Testing',
      reference: 'NOCK/PIT/2025/004',
      category: 'Technical Services',
      deadline: '2025-01-20',
      status: 'closed',
      amount: 'KSh 85M',
    },
  ];

  const categories = [
    'Petroleum Products',
    'Technical Services',
    'Consultancy',
    'Equipment Supply',
    'Construction',
    'IT Services',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {/* Hero Section */}
<section
  ref={heroRef}
  className="snap-section min-h-screen flex items-center relative overflow-hidden py-20"
  style={{ scrollSnapAlign: 'start' }}
>
  {/* Background Image with Gradient Overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('src/assets/procure.jpg')", // Update path as needed
    }}
  />
  <div className="absolute inset-0 bg-black opacity-60"></div>
  
  
  

  <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={heroInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
      <span className="block text-[#c0392b]"> Transparent</span>
        <span className="block text-[#94d500]">Partnerships</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
        Operating under the Public Procurement and Asset Disposal Act, 
        we ensure fair, transparent, and competitive procurement processes.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-[#e74c3c] text-white rounded-lg font-semibold text-lg hover:bg-[#c0392b] transition-all duration-300 shadow-lg"
      >
        Register as Supplier
      </motion.button>
    </motion.div>
  </div>
</section>

      {/* Process Section */}
      <section
        ref={processRef}
        className="snap-section min-h-screen flex items-center bg-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Procurement Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamlined procedures ensuring compliance with national procurement guidelines
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 left-0 h-1 bg-[#94d500] transform -translate-y-1/2 w-1/4"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white shadow-lg relative z-10 ${
                      step.status === 'active' ? 'bg-[#94d500]' :
                      step.status === 'pending' ? 'bg-[#e74c3c]' :
                      'bg-gray-400'
                    }`}
                  >
                    <step.icon size={32} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  <div className={`mt-4 inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    step.status === 'active' ? 'bg-[#94d500] text-white' :
                    step.status === 'pending' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {step.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Policy Downloads */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Policy Documents</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Procurement Policy',
                'Supplier Code of Conduct',
                'Evaluation Criteria',
                'Terms and Conditions',
              ].map((doc, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Download size={20} className="mr-2" />
                  {doc}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tenders Section */}
      <section
        ref={tendersRef}
        className="snap-section min-h-screen flex items-center  bg-gradient-to-br from-gray-900 via-gray-800 to-[#94d500] text-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={tendersInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white-900 mb-4">
              Current Tenders
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore current and upcoming procurement opportunities
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {['All', 'Active', 'Upcoming', 'Closed'].map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-white text-[#e74c3c] shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tenders.map((tender, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={tendersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{tender.title}</h3>
                    <p className="text-gray-600">{tender.reference}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
                    tender.status === 'active' ? 'bg-[#94d500] text-white' :
                    tender.status === 'upcoming' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {tender.status === 'active' && <CheckCircle size={14} className="mr-1" />}
                    {tender.status === 'upcoming' && <Clock size={14} className="mr-1" />}
                    {tender.status === 'closed' && <AlertCircle size={14} className="mr-1" />}
                    {tender.status}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{tender.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Value:</span>
                    <span className="font-medium text-[#e74c3c]">{tender.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deadline:</span>
                    <span className="font-medium">{tender.deadline}</span>
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-[#e74c3c] text-white rounded-lg hover:bg-[#c0392b] transition-colors"
                    disabled={tender.status === 'closed'}
                  >
                    {tender.status === 'closed' ? 'Closed' : 'Download Tender'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section
        ref={registrationRef}
        className="snap-section min-h-screen flex items-center bg-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-4xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={registrationInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Supplier Registration
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our network of trusted suppliers and partners
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={registrationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74c3c] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74c3c] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74c3c] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74c3c] focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-6">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-[#e74c3c] text-white rounded-lg font-semibold text-lg hover:bg-[#c0392b] transition-all duration-300 shadow-lg"
                >
                  Submit Registration
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProcurementPage;