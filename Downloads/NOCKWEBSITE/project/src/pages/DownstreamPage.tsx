import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { MapPin, Truck, Droplets, Leaf, TrendingUp, Gauge } from 'lucide-react';

const DownstreamPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const heroRef = useRef(null);
  const networkRef = useRef(null);
  const productsRef = useRef(null);
  const sustainabilityRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const networkInView = useInView(networkRef, { once: true });
  const productsInView = useInView(productsRef, { once: true });
  const sustainabilityInView = useInView(sustainabilityRef, { once: true });

  const products = [
    {
      name: 'Premium Gasoline',
      icon: Gauge,
      description: 'High-octane fuel for superior performance',
      specs: ['95+ Octane Rating', 'Low Sulfur Content', 'Advanced Additives'],
    },
    {
      name: 'Diesel Fuel',
      icon: Truck,
      description: 'Reliable power for commercial vehicles',
      specs: ['Ultra-Low Sulfur', 'Enhanced Lubricity', 'Cold Weather Performance'],
    },
    {
      name: 'LPG Products',
      icon: Droplets,
      description: 'Clean cooking and heating solutions',
      specs: ['13kg & 6kg Cylinders', 'Industrial Grade Available', 'Safety Certified'],
    },
    {
      name: 'Lubricants',
      icon: TrendingUp,
      description: 'Industrial and automotive lubricants',
      specs: ['Synthetic Blends', 'Extended Life', 'Multi-Grade Options'],
    },
  ];

  const outlets = [
    { region: 'Nairobi', count: 25, growth: '+15%' },
    { region: 'Mombasa', count: 18, growth: '+12%' },
    { region: 'Kisumu', count: 15, growth: '+20%' },
    { region: 'Nakuru', count: 12, growth: '+18%' },
    { region: 'Eldoret', count: 10, growth: '+22%' },
    { region: 'Other Regions', count: 25, growth: '+14%' },
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
  className="snap-section min-h-screen flex items-center relative overflow-hidden"
  style={{ scrollSnapAlign: 'start' }}
>
  {/* Background Image with Overlays */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('src/assets/nock lube 1.jpg')", // Update path as needed
    }}
  />
  <div className="absolute inset-0 bg-black opacity-40"></div>
  
  <div className="absolute inset-0">
    {/* Animated Pipeline */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
      <defs>
        <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e74c3c" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#c0392b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#e74c3c" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      
      <motion.path
        d="M-100 400 Q 300 200, 600 400 T 1300 400"
        stroke="url(#pipelineGradient)"
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M-100 500 Q 400 300, 800 500 T 1300 500"
        stroke="url(#pipelineGradient)"
        strokeWidth="6"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
      />
    </svg>
    
    {/* Flow Particles */}
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-[#e74c3c] rounded-full opacity-70"
          style={{
            left: `${-10 + (i * 10)}%`,
            top: `${45 + Math.sin(i) * 10}%`,
          }}
          animate={{
            x: [0, window.innerWidth + 100],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={heroInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
        Reliable Distribution
        <span className="block text-[#e74c3c]">Nationwide</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
        From refineries to retail, we ensure seamless petroleum product distribution 
        across Kenya through our extensive network and strategic partnerships.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-[#e74c3c] text-white rounded-lg font-semibold text-lg hover:bg-[#c0392b] transition-all duration-300 shadow-lg"
      >
        Find Nearest Outlet
      </motion.button>
    </motion.div>
  </div>
</section>

      {/* Network Overview Section */}
      <section
        ref={networkRef}
        className="snap-section min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={networkInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Network
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Over 100+ retail outlets strategically located across Kenya's major cities and towns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Kenya Map Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={networkInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative bg-gradient-to-br from-[#94d500]/20 to-[#e74c3c]/20 rounded-3xl p-8 aspect-square"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-4 border-2 border-[#94d500] rounded-lg bg-gradient-to-br from-green-50 to-blue-50">
                  {/* Major Cities */}
                  {[
                    { name: 'Nairobi', x: 45, y: 70, size: 'large' },
                    { name: 'Mombasa', x: 85, y: 85, size: 'large' },
                    { name: 'Kisumu', x: 15, y: 60, size: 'medium' },
                    { name: 'Nakuru', x: 35, y: 55, size: 'medium' },
                    { name: 'Eldoret', x: 25, y: 40, size: 'medium' },
                  ].map((city, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={networkInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="absolute group cursor-pointer"
                      style={{ 
                        left: `${city.x}%`, 
                        top: `${city.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={`${
                          city.size === 'large' ? 'w-6 h-6' : 'w-4 h-4'
                        } bg-[#e74c3c] rounded-full shadow-lg relative`}
                      >
                        <div className="absolute inset-0 bg-[#e74c3c] rounded-full animate-ping opacity-75"></div>
                      </motion.div>
                      
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-lg shadow-xl p-2 text-xs font-semibold text-center min-w-16 z-10">
                        {city.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Regional Statistics */}
            <div className="space-y-6">
              {outlets.map((outlet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={networkInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-[#e74c3c] rounded-full"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{outlet.region}</h3>
                        <p className="text-gray-600">{outlet.count} outlets</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#94d500] font-bold text-lg">{outlet.growth}</div>
                      <div className="text-gray-500 text-sm">YoY Growth</div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-[#e74c3c] h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(outlet.count / 25) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Products Section */}
<section
  ref={productsRef}
  className="snap-section min-h-screen flex items-center relative py-20"
  style={{ scrollSnapAlign: 'start' }}
>
  {/* Background Image with Overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
    style={{
      backgroundImage: "url('src/assets/nock fuel card.jpg')", // Update path as needed
    }}
  />
  <div className="absolute inset-0 bg-black opacity-40"></div>
  
  <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={productsInView ? { opacity: 1, y: 0 } : {}}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Quality Products
      </h2>
      <p className="text-xl text-gray-200 max-w-2xl mx-auto">
        Premium petroleum products meeting international standards for all your energy needs
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={productsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group backdrop-blur-sm bg-opacity-90"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 mx-auto mb-6 bg-[#e74c3c] rounded-full flex items-center justify-center text-white group-hover:bg-[#94d500] transition-colors duration-300"
          >
            <product.icon size={28} />
          </motion.div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{product.name}</h3>
          <p className="text-gray-600 mb-6 text-center">{product.description}</p>
          
          <div className="space-y-2">
            {product.specs.map((spec, specIndex) => (
              <div key={specIndex} className="flex items-center text-sm text-gray-700">
                <div className="w-2 h-2 bg-[#94d500] rounded-full mr-3"></div>
                {spec}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Sustainability Section */}
      <section
        ref={sustainabilityRef}
        className="snap-section min-h-screen flex items-center bg-gradient-to-br from-[#94d500]/20 to-green-50 py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sustainabilityInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sustainable Future
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading Kenya's transition to cleaner energy through biofuels and renewable integration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={sustainabilityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 text-[#94d500] mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Biofuel Integration</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Blending locally-sourced biofuels to reduce carbon footprint and support local farmers.
                </p>
                <div className="space-y-3">
                  <ProgressBar label="Ethanol Blend (E10)" progress={75} />
                  <ProgressBar label="Biodiesel (B5)" progress={60} />
                  <ProgressBar label="Carbon Reduction Target" progress={85} />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2025 Sustainability Goals</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#94d500] rounded-full mr-3"></div>
                    30% reduction in operational emissions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#94d500] rounded-full mr-3"></div>
                    100% renewable energy at headquarters
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#94d500] rounded-full mr-3"></div>
                    Zero waste to landfill initiative
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={sustainabilityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#94d500] to-green-600 rounded-3xl p-12 text-white text-center shadow-2xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <Leaf size={48} />
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-4">Clean Energy Vision</h3>
                <p className="text-xl mb-8 opacity-90">
                  Pioneering sustainable petroleum solutions for a greener Kenya
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#94d500] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Sustainability Report
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ProgressBar = ({ label, progress }: { label: string; progress: number }) => (
  <div>
    <div className="flex justify-between text-sm mb-2">
      <span className="text-gray-700">{label}</span>
      <span className="font-semibold text-gray-900">{progress}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <motion.div
        className="bg-[#94d500] h-3 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  </div>
);

export default DownstreamPage;