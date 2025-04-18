import React from 'react';
import { motion } from 'framer-motion';
import gova from './Members/GOVA.jpg';
import rakesh from './Members/rakesh.jpg';
import hari from './Members/hari.jpg';
import santhosh from './Members/santhosh.jpg';
import thejas from './Members/thejas.jpg';

interface Developer {
  name: string;
  linkedinUrl: string;
  imageUrl?: string;
}

const developers: Developer[] = [
  {
    name: "Hariharan K",
    linkedinUrl: "https://www.linkedin.com/in/hariharan-kannan-9a160b2a2/",
    imageUrl: hari
    },
  {
    name: "Govarthan V",
    linkedinUrl: "https://www.linkedin.com/in/govarthan-v",
    imageUrl: gova
  },
    
  {
    name: "Santhosh",
    linkedinUrl: "https://www.linkedin.com/in/santhosh-srinivasan",
    imageUrl: santhosh
  },
  {
    name: "Rakesh R",
    linkedinUrl: "https://www.linkedin.com/in/rakesh-r-91a324274",
    imageUrl: rakesh
   },
  {
    name: "Thejas",
    linkedinUrl: "https://www.linkedin.com/in/thejas-r-6a0543295",
    imageUrl: thejas
  }
];

const DevelopersCredit = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="bg-gradient-to-b from-gray-50 to-white py-16 dark:from-gray-900 dark:to-gray-800 transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Developed By
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {developers.map((developer, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6 flex flex-col items-center relative">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 flex items-center justify-center ring-4 ring-blue-500/20 dark:ring-blue-400/20 group-hover:ring-blue-500/40 dark:group-hover:ring-blue-400/40 transition-all duration-300">
                  {developer.imageUrl ? (
                    <img 
                      src={developer.imageUrl} 
                      alt={developer.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to first letter if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('span');
                          fallback.className = 'text-2xl text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500 w-full h-full flex items-center justify-center';
                          fallback.textContent = developer.name.charAt(0);
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-2xl text-white font-bold">
                        {developer.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {developer.name}
                </h3>
                <motion.a 
                  href={developer.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DevelopersCredit; 