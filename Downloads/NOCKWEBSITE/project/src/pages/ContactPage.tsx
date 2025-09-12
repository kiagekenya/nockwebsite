import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Calendar } from 'lucide-react';

const ContactPage = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true });
  const mapInView = useInView(mapRef, { once: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['KAWI Complex, Kenyatta Popo lane', 'P.O. Box 58567 - 00200', 'Nairobi, Kenya'],
      color: 'text-[#e74c3c]',
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+254 20 695 2000', '+254 709 335 000', 'Emergency: +254 722 000 000'],
      color: 'text-[#94d500]',
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@nock.go.ke', 'procurement@nock.go.ke', 'media@nock.go.ke'],
      color: 'text-blue-600',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
      color: 'text-orange-600',
    },
  ];

  const offices = [
    { name: 'Nairobi HQ', address: 'KAWI Complex, Kenyatta Avenue', coordinates: { lat: -1.2921, lng: 36.8219 } },
    { name: 'Mombasa Office', address: 'Moi Avenue, Mombasa', coordinates: { lat: -4.0435, lng: 39.6682 } },
    { name: 'Kisumu Office', address: 'Oginga Odinga Street, Kisumu', coordinates: { lat: -0.0917, lng: 34.7680 } },
    { name: 'Eldoret Office', address: 'Uganda Road, Eldoret', coordinates: { lat: 0.5143, lng: 35.2697 } },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
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
        className="snap-section min-h-screen flex items-center bg-gradient-to-br from-[#2c3e50] via-gray-700 to-gray-800 text-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Connect
              <span className="block text-[#94d500]">With Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              We're here to answer your questions, discuss partnerships, and explore opportunities 
              in Kenya's energy sector together.
            </p>
            
            {/* Quick Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+254206952000"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#e74c3c] text-white rounded-lg font-semibold hover:bg-[#c0392b] transition-colors flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </motion.a>
              <motion.a
                href="mailto:info@nock.go.ke"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-[#94d500] text-[#94d500] rounded-lg font-semibold hover:bg-[#94d500] hover:text-white transition-all flex items-center justify-center"
              >
                <Mail size={20} className="mr-2" />
                Send Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for all your energy sector inquiries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    info.color.includes('e74c3c') ? 'bg-[#e74c3c]' :
                    info.color.includes('94d500') ? 'bg-[#94d500]' :
                    info.color.includes('blue') ? 'bg-blue-600' :
                    'bg-orange-600'
                  } text-white`}
                >
                  <info.icon size={28} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        ref={formRef}
        className="snap-section min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-4xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Send us a Message
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a specific inquiry? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74c3c] focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74c3c] focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="procurement">Procurement Question</option>
                    <option value="media">Media Request</option>
                    <option value="careers">Career Information</option>
                    <option value="technical">Technical Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74c3c] focus:border-transparent transition-all resize-none"
                  placeholder="Please provide details about your inquiry..."
                  required
                />
              </div>

              <div className="flex items-center space-x-3">
                <input type="checkbox" id="consent" required className="rounded" />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I consent to NOCK processing my personal data for this inquiry *
                </label>
              </div>

              <div className="pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#e74c3c] hover:bg-[#c0392b] text-white shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map & Office Locations */}
<section
  ref={mapRef}
  className="snap-section min-h-screen flex items-center relative py-20"
  style={{ scrollSnapAlign: 'start' }}
>
  {/* Background Image with Overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('src/assets/offices.jpg')", // Update path as needed
    }}
  />
  <div className="absolute inset-0 bg-white/50"></div>
  
  <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={mapInView ? { opacity: 1, y: 0 } : {}}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Visit Our Offices
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        NOCK offices across Kenya are ready to serve you
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Interactive Map Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={mapInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 aspect-square relative overflow-hidden border-2 border-white shadow-xl"
      >
        <div className="absolute inset-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl border border-gray-200">
          {/* Kenya Map Outline */}
          <div className="relative w-full h-full">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={mapInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="absolute group cursor-pointer"
                style={{ 
                  left: `${20 + index * 20}%`, 
                  top: `${30 + Math.sin(index) * 20}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="w-6 h-6 bg-[#e74c3c] rounded-full shadow-lg relative z-10 border-2 border-white"
                >
                  <div className="absolute inset-0 bg-[#e74c3c] rounded-full animate-ping opacity-75"></div>
                </motion.div>
                
                {/* Tooltip */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-lg shadow-xl p-3 text-sm min-w-32 text-center z-20 border border-gray-200">
                  <div className="font-semibold text-gray-900">{office.name}</div>
                  <div className="text-gray-600 text-xs">{office.address}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-sm border border-gray-200 shadow-sm">
          <div className="font-semibold text-gray-900">Interactive Map</div>
          <div className="text-gray-600">Hover over pins for details</div>
        </div>
      </motion.div>

      {/* Office Details */}
      <div className="space-y-6">
        {offices.map((office, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={mapInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 backdrop-blur-sm bg-white/90"
          >
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-[#e74c3c] rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{office.name}</h3>
                <p className="text-gray-700 mb-4">{office.address}</p>
                
                <div className="flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-[#94d500] text-white rounded-lg text-sm hover:bg-[#7ab600] transition-colors shadow-sm"
                  >
                    Get Directions
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center shadow-sm"
                  >
                    <Calendar size={16} className="mr-1" />
                    Book Visit
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
    </motion.div>
  );
};

export default ContactPage;