import React, { useState } from 'react'
import { Frame, Fullscreen, X } from 'lucide-react';
import { motion } from 'motion/react';
import { BiFullscreen } from 'react-icons/bi';

const CertificateItem = ({ certificate }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">

      <button onClick={() => setIsOpen(true)} className='w-full h-full cursor-pointer group  p-4 hover:scale-101  bg-[#4942816e]  border-1 border-gray-900 hover:border-purple-900 transition-all duration-200  rounded'>



        <div className='relative'>
          <div className=' w-full h-full group-hover:bg-black/40 z-100 text-white-600 hidden group-hover:flex absolute  flex-col items-center justify-center gap-2'>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BiFullscreen size={34} strokeWidth={0.5} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className='text-white text-2xl font-medium'>View Certificate</motion.p>
          </div>
          <img src={certificate} draggable={false} alt="" className='aspect-video bg-cover rounded' />
        </div>
      </button>
      {/* FullScreen Certificate  */}
      {isOpen && (
        <div className="fixed inset-0 h-screen w-screen p-20 bg-black/70 flex items-center justify-center z-1000">
          <div className="relative">

            <img
              src={certificate}
              alt="Certificate"
              className="rounded-lg shadow-lg h-[90vh] object-contain"
            />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 bg-gray-500/40 hover:bg-gray-500/60 
                   transition-all duration-150 p-3 rounded-full text-white text-xl"
            >
              <X />
            </button>

          </div>
        </div>
      )}

    </div>
  )
}

export default CertificateItem