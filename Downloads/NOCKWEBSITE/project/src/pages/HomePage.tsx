import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronDown, Zap, Globe, Leaf, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const timelineInView = useInView(timelineRef, { once: true });

  useEffect(() => {
    const sections = document.querySelectorAll('.snap-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '40+', label: 'Years of Excellence', icon: TrendingUp },
    { number: '100+', label: 'Retail Outlets', icon: Globe },
    { number: '1981', label: 'Established', icon: Zap },
    { number: '2025', label: 'Sustainability Goals', icon: Leaf },
  ];

  const timeline = [
    { year: '1981', title: 'NOCK Founded', description: 'Established under the Companies Act' },
    { year: '2012', title: 'Turkana Discovery', description: 'Major oil discoveries in Turkana Basin' },
    { year: '2024', title: 'Rubis Partnership', description: 'Strategic partnership for downstream revival' },
    { year: '2025', title: 'Green Future', description: 'Carbon capture and renewable initiatives' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="snap-section min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ scrollSnapAlign: 'start' }}
      >
        <motion.img
  style={{ y }}
  src="/src/assets/nock pet 3.jpg"
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover"
/>

  <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Particle Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#94d500] rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Empowering Kenya's
            <span className="block text-[#94d500] relative">
              Energy Future
              <motion.div
                className="absolute inset-0 bg-[#94d500] blur-2xl opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed"
          >
            Established in 1981, NOCK drives sustainable petroleum innovation 
            for national prosperity through upstream exploration and downstream excellence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#e74c3c] text-white rounded-lg font-semibold text-lg hover:bg-[#c0392b] transition-all duration-300 shadow-lg"
            >
              Discover Our Operations
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#94d500] text-[#94d500] rounded-lg font-semibold text-lg hover:bg-[#94d500] hover:text-white transition-all duration-300"
            >
              View Sustainability Report
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>



      {/* Timeline Section */}
      <section
        ref={timelineRef}
        className="snap-section min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones in Kenya's energy transformation
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[#94d500]"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-2xl font-bold text-[#e74c3c] mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#e74c3c] rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
<section
  ref={statsRef}
  className="snap-section min-h-screen flex items-center relative py-20"
  style={{ scrollSnapAlign: 'start' }}
>
  {/* Background Image with Overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('src/assets/nock trucks.jpg')", // Update path as needed
    }}
  />
  <div className="absolute inset-0 bg-black opacity-30"></div>
  
  <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={statsInView ? { opacity: 1, y: 0 } : {}}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Driving Energy Excellence
      </h2>
      <p className="text-xl text-gray-200 max-w-2xl mx-auto">
        Four decades of commitment to Kenya's energy independence and sustainable development
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center p-8 rounded-2xl bg-white bg-opacity-90 shadow-xl hover:shadow-2xl transition-all duration-300 group backdrop-blur-sm"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 mx-auto mb-4 bg-[#94d500] rounded-full flex items-center justify-center text-white group-hover:bg-[#e74c3c] transition-colors duration-300"
          >
            <stat.icon size={28} />
          </motion.div>
          <CountUpNumber target={stat.number} />
          <p className="text-gray-700 font-medium mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </motion.div>
  );
};

const CountUpNumber = ({ target }: { target: string }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (inView) {
      const numericTarget = parseInt(target.replace(/\D/g, ''));
      if (!isNaN(numericTarget)) {
        let current = 0;
        const increment = numericTarget / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= numericTarget) {
            setCount(numericTarget);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 30);
      }
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="text-4xl font-bold text-gray-900 mb-2">
      {target.includes('+') ? `${count}+` : count.toString()}
    </div>
  );
};

export default HomePage;