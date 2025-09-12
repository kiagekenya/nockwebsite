import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="w-28 h-28 border-4 border-gray-200 border-t-[#94d500] rounded-full mx-auto mb-6 relative" // Increased from w-16 h-16 to w-24 h-24
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          {/* Logo in the center of the spinner */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="src/assets/nock_j-removebg-preview.png" // Update path to your logo
              alt="NOCK Logo" 
              className="w-20 h-20" // Increased from w-10 h-10 to w-16 h-16
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-600 mt-2" // Changed from text-sm to text-lg
        >
          
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner;