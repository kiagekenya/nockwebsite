import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Play, Download, Filter } from 'lucide-react';

const GalleryPage = () => {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const heroInView = useInView(heroRef, { once: true });
  const galleryInView = useInView(galleryRef, { once: true });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxItem, setLightboxItem] = useState<any>(null);

  const categories = ['all', 'exploration', 'facilities', 'community', 'events', 'leadership'];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'exploration',
      title: 'SONATRACH PARTNERSHIP',
      description: 'SONATRACH and National Oil Company of Kenya (NOC Kenya) sign Memorandum of Understanding',
      image: 'https://sonatrach.com/wp-content/uploads/2025/09/A7402140-1024x575.jpg',
      featured: true,
    },
    {
      id: 2,
      type: 'image',
      category: 'facilities',
      title: 'Nairobi Headquarters',
      description: 'NOCK headquarters at KAWI Complex, Popo lane',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJq0M81KQdzERmzra25z1A3r4-ofHykGjXqw&s',
    },
    {
      id: 3,
      type: 'video',
      category: 'exploration',
     
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8FjuyH6-5e5gkk2pOhHYofwxUcLOZljE3g&s',
      duration: '12:34',
    },
    {
      id: 4,
      type: 'image',
      category: 'community',
      title: 'Community Engagement',
      description: 'Local community leaders meeting with NOCK officials',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JsumgCTTacyBr-nS08iZfhEsKCLM5Q4nuA&s',
    },
    {
      id: 5,
      type: 'image',
      category: 'facilities',
      title: 'Retail Network',
      description: 'Modern NOCK service station in Mombasa',
      image: 'https://www.arcsafrica.com/wp-content/uploads/2020/10/national-oil-small2.jpg',
    },
    {
      id: 6,
      type: 'image',
      category: 'events',
      title: 'Energy Summit 2024',
      description: 'Kenya Energy Summit with regional stakeholders',
      image: 'https://pbs.twimg.com/media/GQbObdjWYAAVOQQ?format=jpg&name=4096x4096',
    },
    {
      id: 7,
      type: 'video',
      category: 'facilities',
      title: 'Pipeline Infrastructure Tour',
      description: 'Virtual tour of Kenya\'s petroleum pipeline network',
      image: 'https://images.pexels.com/photos/3844783/pexels-photo-3844783.jpeg',
      duration: '8:45',
    },
    {
      id: 8,
      type: 'image',
      category: 'leadership',
      title: 'Executive Team',
      description: 'NOCK leadership team at strategic planning session',
      image: 'http://nationaloil.co.ke/wp-content/uploads/2022/01/GDC-1.jpg',
    },
    {
      id: 9,
      type: 'image',
      category: 'exploration',
      title: 'Environmental Monitoring',
      description: 'Environmental impact assessment in exploration areas',
      image: 'https://nationaloil.co.ke/wp-content/uploads/2018/05/p6.jpg',
    },
    {
      id: 10,
      type: 'image',
      category: 'community',
      title: 'Youth Training Program',
      description: 'Technical skills development for local youth',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    },
    {
      id: 11,
      type: 'video',
      category: 'events',
      title: 'Sustainability Initiative Launch',
      description: 'Launch of NOCK\'s carbon capture program',
      image: 'https://images.pexels.com/photos/3844783/pexels-photo-3844783.jpeg',
      duration: '15:20',
    },
    {
      id: 12,
      type: 'image',
      category: 'facilities',
      title: 'Storage Terminal',
      description: 'Modern petroleum storage facilities in Mombasa',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: any) => {
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
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
      backgroundImage: "url('src/assets/NOCK-CSR-2.jpeg')", // Update path as needed
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/80 via-[#2c3e50]/80 to-black/50"></div>
  
 

  <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={heroInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Visualizing Our
        <span className="block text-[#94d500]">Impact</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
        Explore our operations, facilities, and community initiatives through 
        an immersive visual journey across Kenya's energy landscape.
      </p>
      
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
        {[
          { number: '500+', label: 'Photos' },
          { number: '50+', label: 'Videos' },
          { number: '12', label: 'Categories' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-[#94d500]">{stat.number}</div>
            <div className="text-gray-200">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* Gallery Section */}
      <section
        ref={galleryRef}
        className="snap-section min-h-screen bg-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Media Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our comprehensive collection of images and videos
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#e74c3c] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Item */}
          {selectedCategory === 'all' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              {galleryItems.filter(item => item.featured).map(item => (
                <div key={item.id} className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openLightbox(item)}
                    className="aspect-[21/9] bg-gradient-to-r from-[#e74c3c]/20 to-[#94d500]/20"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block px-3 py-1 bg-[#e74c3c] rounded-full text-sm font-medium mb-3">
                        Featured
                      </span>
                      <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                      <p className="text-lg opacity-90">{item.description}</p>
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredItems.filter(item => !item.featured || selectedCategory !== 'all').map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  onClick={() => openLightbox(item)}
                >
                  <div className="aspect-square">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Type Indicator */}
                    <div className="absolute top-3 left-3">
                      {item.type === 'video' ? (
                        <div className="flex items-center space-x-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                          <Play size={12} />
                          <span>{item.duration}</span>
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ZoomIn className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-sm mb-1 line-clamp-2">{item.title}</h3>
                      <p className="text-xs opacity-90 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={galleryInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#e74c3c] text-white rounded-lg font-semibold hover:bg-[#c0392b] transition-colors shadow-lg"
            >
              Load More Images
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeLightbox}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              >
                <X size={24} />
              </motion.button>

              {/* Media */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                {lightboxItem.type === 'video' ? (
                  <div className="aspect-video bg-black flex items-center justify-center">
                    <div className="text-white text-center">
                      <Play size={64} className="mx-auto mb-4 opacity-60" />
                      <p>Video Player Placeholder</p>
                      <p className="text-sm opacity-60">Duration: {lightboxItem.duration}</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    className="w-full max-h-[60vh] object-contain"
                  />
                )}
                
                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{lightboxItem.title}</h3>
                      <p className="text-gray-600">{lightboxItem.description}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-[#94d500] text-white rounded-lg hover:bg-[#7ab600] transition-colors"
                    >
                      <Download size={20} />
                    </motion.button>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="capitalize">{lightboxItem.category}</span>
                    <span>•</span>
                    <span>{lightboxItem.type === 'video' ? 'Video' : 'Image'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GalleryPage;