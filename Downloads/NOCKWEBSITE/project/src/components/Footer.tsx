import React from 'react';
import { ArrowUp, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2c3e50] text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold mb-4 relative">
              National Oil Corporation of Kenya
              <div className="absolute inset-0 bg-[#94d500] opacity-20 blur-lg rounded-lg"></div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Empowering Kenya's energy future through sustainable petroleum innovation, 
              upstream exploration, and downstream excellence since 1981.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-2 bg-[#94d500] rounded-full hover:bg-[#7ab600] transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-2 bg-[#94d500] rounded-full hover:bg-[#7ab600] transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-2 bg-[#94d500] rounded-full hover:bg-[#7ab600] transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#94d500]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/upstream" className="text-gray-300 hover:text-white transition-colors">Upstream</a></li>
              <li><a href="/downstream" className="text-gray-300 hover:text-white transition-colors">Downstream</a></li>
              <li><a href="/procurement" className="text-gray-300 hover:text-white transition-colors">Procurement</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#94d500]">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>KAWI Complex, Popo lane</p>
              <p>Nairobi, Kenya</p>
              <p>+254 20 695 2000</p>
              <p>info@nock.co.ke</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2025 National Oil Corporation of Kenya. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Ministry of Energy and Petroleum
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 bg-[#e74c3c] text-white rounded-full shadow-lg hover:bg-[#c0392b] transition-colors"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;