import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { MapPin, BarChart3, Users, Zap } from 'lucide-react';

const UpstreamPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);


   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const heroRef = useRef(null);
  const explorationsRef = useRef(null);
  const partnershipsRef = useRef(null);
  const dataRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const explorationsInView = useInView(explorationsRef, { once: true });
  const partnershipsInView = useInView(partnershipsRef, { once: true });
  const dataInView = useInView(dataRef, { once: true });

  const explorationAreas = [
    { name: 'Lokichar Basin', status: 'Active', reserves: '750M barrels', coordinates: { x: 35, y: 25 } },
    { name: 'Anza Basin', status: 'Exploration', reserves: 'TBD', coordinates: { x: 55, y: 40 } },
    { name: 'Mandera Basin', status: 'Survey', reserves: 'Potential', coordinates: { x: 70, y: 20 } },
    { name: 'Lamu Basin', status: 'Assessment', reserves: '200M barrels', coordinates: { x: 85, y: 60 } },
  ];

  const partnerships = [
    { company: 'Tullow Oil', role: 'Joint Venture Partner', focus: 'Turkana Operations' },
    { company: 'Africa Oil Corp', role: 'Strategic Partner', focus: 'Basin Assessment' },
    { company: 'Total Energies', role: 'Technical Advisor', focus: 'Offshore Exploration' },
  ];

  const reserveData = [
    { basin: 'Turkana', proven: 750, probable: 200, possible: 300 },
    { basin: 'Lamu', proven: 150, probable: 100, possible: 200 },
    { basin: 'Mandera', proven: 0, probable: 50, possible: 150 },
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
              <motion.img
         style={{ y }}
         src="src/assets/upstream 2.jpg"
         alt="Background"
         className="absolute inset-0 w-full h-full object-cover"
       />

        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Animated Seismic Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-[#94d500] opacity-60"
              style={{
                left: '0%',
                right: '0%',
                top: `${10 + i * 12}%`,
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#94d500]">
              Pioneering Exploration
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Unlocking Kenya's hydrocarbon potential through advanced seismic surveys, 
              strategic partnerships, and cutting-edge drilling technologies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#e74c3c] text-white rounded-lg font-semibold text-lg hover:bg-[#c0392b] transition-all duration-300"
            >
              Explore Our Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section
        ref={explorationsRef}
        className="snap-section min-h-screen flex items-center bg-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={explorationsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Exploration Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic locations across Kenya with proven and potential hydrocarbon reserves
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Kenya Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={explorationsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 aspect-square"
            >
              <div className="relative w-full h-full">
                {/* Simplified Kenya outline */}
                <div className="absolute inset-4 border-4 border-gray-400 rounded-lg bg-gradient-to-br from-green-100 to-blue-100">
                  {explorationAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={explorationsInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="absolute group cursor-pointer"
                      style={{ 
                        left: `${area.coordinates.x}%`, 
                        top: `${area.coordinates.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-4 h-4 bg-[#e74c3c] rounded-full shadow-lg relative"
                      >
                        <div className="absolute inset-0 bg-[#e74c3c] rounded-full animate-ping opacity-75"></div>
                      </motion.div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-lg shadow-xl p-3 text-sm min-w-32 text-center z-10">
                        <div className="font-semibold text-gray-900">{area.name}</div>
                        <div className="text-[#94d500]">{area.status}</div>
                        <div className="text-gray-600">{area.reserves}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Exploration Details */}
            <div className="space-y-6">
              {explorationAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={explorationsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#94d500]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{area.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      area.status === 'Active' ? 'bg-[#94d500] text-white' :
                      area.status === 'Exploration' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {area.status}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium">Estimated Reserves:</span> {area.reserves}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section
        ref={partnershipsRef}
        className="snap-section min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={partnershipsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Collaborating with global leaders to maximize exploration efficiency and technology transfer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={partnershipsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-6 bg-[#e74c3c] rounded-full flex items-center justify-center text-white group-hover:bg-[#94d500] transition-colors duration-300"
                >
                  <Users size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{partner.company}</h3>
                <p className="text-[#94d500] font-semibold mb-2">{partner.role}</p>
                <p className="text-gray-600">{partner.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section
        ref={dataRef}
        className="snap-section min-h-screen flex items-center bg-[#2c3e50] py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={dataInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Reserve Potential
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven, probable, and possible reserves across Kenya's major basins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {reserveData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={dataInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#94d500] mb-6 text-center">{data.basin} Basin</h3>
                
                <div className="space-y-4">
                  <ReserveBar label="Proven" value={data.proven} max={800} color="#94d500" />
                  <ReserveBar label="Probable" value={data.probable} max={800} color="#e74c3c" />
                  <ReserveBar label="Possible" value={data.possible} max={800} color="#f39c12" />
                </div>

                <div className="mt-6 text-center">
                  <div className="text-3xl font-bold text-white">
                    {data.proven + data.probable + data.possible}M
                  </div>
                  <div className="text-gray-300">Total Potential Barrels</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ReserveBar = ({ label, value, max, color }: { 
  label: string; 
  value: number; 
  max: number; 
  color: string; 
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-300">{label}</span>
        <span className="text-white font-semibold">{value}M barrels</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <motion.div
          className="h-3 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default UpstreamPage;