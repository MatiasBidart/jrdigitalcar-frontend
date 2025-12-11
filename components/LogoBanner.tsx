// import { img } from 'framer-motion/client';
import { motion, easeInOut } from 'motion/react';

export function LogoBanner() {
  const floatVariants = {
    float1: {
      x: [0, 15, 0, -15, 0],
      y: [0, -20, -10, 10, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
    float2: {
      x: [0, -20, 0, 20, 0],
      y: [0, 15, -15, 5, 0],
      rotate: [0, -5, 0, 5, 0],
      transition: {
        duration: 9,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
    float3: {
      x: [0, 10, -10, 0, 0],
      y: [0, -15, 0, 20, 0],
      rotate: [0, 3, -3, 0, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
    float4: {
      x: [0, -15, 10, 0, 0],
      y: [0, 20, -10, -15, 0],
      rotate: [0, -4, 4, 0, 0],
      transition: {
        duration: 7.5,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const logoPositions = [
    { top: '20%', right: '20%', variant: 'float1', size: 'w-12 h-12 md:w-16 md:h-16', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1024px-BMW.svg.png' },
    { top: '25%', left: '18%', variant: 'float2', size: 'w-12 h-12 md:w-16 md:h-16', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png' },
    { bottom: '25%', right: '22%', variant: 'float3', size: 'w-12 h-12 md:w-16 md:h-16 z-20', img:'https://i.postimg.cc/bvG1yzhF/abarth.png' },
    { bottom: '20%', left: '20%', variant: 'float4', size: 'w-12 h-12 md:w-16 md:h-16', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Volkswagen_-_Logo.svg/2048px-Volkswagen_-_Logo.svg.png' },
    { top: '35%', left: '28%', variant: 'float2', size: 'w-12 md:w-16', img:'https://upload.wikimedia.org/wikipedia/fr/6/61/Rover_logo_1979.png' },
    { top: '45%', right: '8%', variant: 'float2', size: 'w-12 h-12 md:w-16 md:h-16 z-0', img:'https://upload.wikimedia.org/wikipedia/commons/b/b7/Renault_2021_Text.svg' },
    { bottom: '50%', left: '8%', variant: 'float2', size: 'h-6 md:h-7', img:'https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png' },
  ];

  return (
    <div className="relative bg-gray-100 overflow-hidden h-[50vh] md:h-[60vh] min-h-[300px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gray-700/20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: easeInOut,
          }}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <img
              src="/jrdigitalcar-logo.png"
              alt="floating-logo"
              className="w-full h-full object-contain rounded-xl pointer-events-none select-none"
            />
          </div>
        </motion.div>
      </div>

      {logoPositions.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
          }}
          variants={floatVariants}
          animate={item.variant}
        >
          <img className={`${item.size}`} src={item.img}/>
        </motion.div>
      ))}

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
