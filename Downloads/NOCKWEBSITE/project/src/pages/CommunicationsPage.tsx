import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Download, Mail, Play, ExternalLink, MessageCircle } from 'lucide-react';

const CommunicationsPage = () => {
  const heroRef = useRef(null);
  const newsRef = useRef(null);
  const mediaRef = useRef(null);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const heroInView = useInView(heroRef, { once: true });
  const newsInView = useInView(newsRef, { once: true });
  const mediaInView = useInView(mediaRef, { once: true });

  const newsItems = [
    {
      title: 'NOCK Strengthens Partnership with Rubis Energy Kenya',
      excerpt: 'Strategic collaboration aims to revitalize downstream operations and expand retail network across Kenya.',
      date: '2025-01-15',
      category: 'Partnership',
      image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://kenyanwallstreet.com/wp-content/uploads/2025/03/IMAGE-2-1_11zon-750x375.jpg',
      featured: true,
    },
    {
      title: 'Carbon Capture Technology Trials Begin in Turkana',
      excerpt: 'Pioneering green initiatives mark NOCK\'s commitment to sustainable exploration practices.',
      date: '2025-01-10',
      category: 'Innovation',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUINuqDekMskdy5Ky62lOfiAjBnn3HMcSbMJTDRfVgcBSAOuah6av4Nzj_kr-qCNmXus&usqp=CAU',
    },
    {
      title: 'Q4 2024 Production Report Released',
      excerpt: 'Strong performance indicators show continued growth in upstream operations and exploration activities.',
      date: '2025-01-05',
      category: 'Operations',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    },
    {
      title: 'New Retail Outlets Launched in Western Kenya',
      excerpt: 'Expansion continues with 12 new service stations operational, improving fuel access in rural areas.',
      date: '2024-12-28',
      category: 'Expansion',
      image: 'https://nationaloil.co.ke/image/downstream.jpg',
    },
    {
      title: 'NOCK Receives ISO 14001 Environmental Certification',
      excerpt: 'International recognition for environmental management systems reinforces sustainability commitment.',
      date: '2024-12-20',
      category: 'Sustainability',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBOsN_X8GsauNoPEcpW8zTMKBDyOFpPaXGQ&s',
    },
    {
      title: 'Youth Development Program Graduates 200 Engineers',
      excerpt: 'Technical training initiative strengthens local capacity building in petroleum sector.',
      date: '2024-12-15',
      category: 'Community',
      image: 'data:image/jpeg;base64,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',
    },
  ];

  const mediaKit = [
    { name: 'Company Logo Pack', size: '2.3 MB', type: 'ZIP' },
    { name: 'Executive Photos', size: '15.7 MB', type: 'ZIP' },
    { name: 'Facility Images', size: '45.2 MB', type: 'ZIP' },
    { name: 'Brand Guidelines', size: '8.9 MB', type: 'PDF' },
    { name: 'Press Release Template', size: '1.2 MB', type: 'DOC' },
  ];

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
        className="snap-section min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-[#2c3e50] text-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              News &
              <span className="block text-[#94d500]">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Stay informed with the latest developments, partnerships, and innovations 
              driving Kenya's energy sector forward.
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 mb-8">
              {['Twitter', 'LinkedIn', 'YouTube'].map((platform, index) => (
                <motion.button
                  key={platform}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  {platform}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#e74c3c] text-white rounded-lg font-semibold text-lg hover:bg-[#c0392b] transition-all duration-300"
            >
              Subscribe to Updates
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* News Feed Section */}
      <section
        ref={newsRef}
        className="snap-section min-h-screen flex items-center bg-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={newsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Breaking news, announcements, and insights from NOCK operations
            </p>
          </motion.div>

          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={newsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {newsItems.filter(item => item.featured).map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-[#e74c3c]/10 to-[#94d500]/10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-[#e74c3c] text-white rounded-full text-sm font-medium mr-3">
                        Featured
                      </span>
                      <span className="text-gray-600">{item.date}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{item.excerpt}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-[#e74c3c] text-white rounded-lg hover:bg-[#c0392b] transition-colors flex items-center"
                    >
                      Read Full Story
                      <ExternalLink size={16} className="ml-2" />
                    </motion.button>
                  </div>
                  <div className="h-64 lg:h-96">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.filter(item => !item.featured).map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={newsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-[#94d500]/20 text-[#94d500] rounded text-sm font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#e74c3c] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-[#e74c3c] font-semibold flex items-center hover:text-[#c0392b] transition-colors"
                  >
                    Read More
                    <ExternalLink size={16} className="ml-1" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit & Newsletter Section */}
      <section
        ref={mediaRef}
        className="snap-section min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mediaInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Media Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access our media kit and stay connected with regular updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Media Kit */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={mediaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Download className="w-8 h-8 text-[#94d500] mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Media Kit</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Download official NOCK logos, images, and brand guidelines for media use.
              </p>
              
              <div className="space-y-4">
                {mediaKit.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={mediaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#e74c3c] rounded-lg flex items-center justify-center text-white font-bold mr-3">
                        {item.type}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.name}</div>
                        <div className="text-gray-500 text-sm">{item.size}</div>
                      </div>
                    </div>
                    <Download size={20} className="text-gray-400 group-hover:text-[#94d500] transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={mediaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#94d500] to-green-600 rounded-3xl p-8 text-white shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Stay Connected</h3>
              </div>
              
              <p className="mb-8 opacity-90">
                Subscribe to our newsletter for the latest news, insights, and updates 
                from Kenya's energy sector.
              </p>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="updates" className="rounded" />
                  <label htmlFor="updates" className="text-sm opacity-90">
                    I agree to receive updates and newsletters
                  </label>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-white text-[#94d500] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </motion.button>
              </form>
              
              {/* Social Stats */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">5.2K</div>
                    <div className="text-sm opacity-80">Followers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1.8K</div>
                    <div className="text-sm opacity-80">Subscribers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">350</div>
                    <div className="text-sm opacity-80">Updates</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Podcast/Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mediaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Energy Insights Podcast</h3>
              <p className="text-gray-600">
                Tune in to our monthly podcast featuring industry leaders and energy sector insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Future of Oil in East Africa', duration: '45 min', plays: '2.3K' },
                { title: 'Sustainable Energy Transition', duration: '38 min', plays: '1.8K' },
                { title: 'Local Content Development', duration: '52 min', plays: '3.1K' },
              ].map((episode, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 mx-auto mb-4 bg-[#e74c3c] rounded-full flex items-center justify-center text-white cursor-pointer"
                  >
                    <Play size={28} />
                  </motion.div>
                  <h4 className="font-bold text-gray-900 mb-2">{episode.title}</h4>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{episode.duration}</span>
                    <span>{episode.plays} plays</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CommunicationsPage;