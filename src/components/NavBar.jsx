import { Menu, X } from 'lucide-react'
import { div } from 'motion/react-client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const Navbar = ({openMobileMenu , setOpenMobileMenu}) => {
  return (
    <div className="w-screen ">
        <div className={`z-100 fixed w-full bg-black/20  px-8 md:px-16 lg:px-32 h-[64px]  flex items-center justify-between  ${openMobileMenu ? "bg-[#14061b]" : "backdrop-blur-xs"}`}>
            <div>
                <h1 className=' font-bold text-2xl bg-gradient-to-r from-violet-600  to-pink-600 bg-clip-text text-transparent'>Nawrinth S</h1>
            </div>

            {/* Mobile Menu Button  */}
            <div>
                <button onClick={()=>setOpenMobileMenu(!openMobileMenu)}>
                    {
                        !openMobileMenu ? 
                        <Menu className='text-violet-500 md:hidden cursor-pointer'/>:""
                    }
                </button>
            </div>

            {/* Desktop View  */}
            <div className='hidden md:flex space-x-10 text-white font-medium tracking-wide'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>

            </div>

        </div>
        <AnimatePresence mode="wait">       {/* Mobile Menu   */}
        {
            openMobileMenu && (
                <motion.div
                 className={`fixed right-0 top-0 h-screen w-[80%] font-medium  z-120 flex flex-col space-y-10 text-white py-4 px-4 items-center justify-center bg-[#14061b]  transform transition-all duration-300 `}
                 initial={{ x: "100%" }}
                animate={{ x: 0, transition: { duration: 0.4, ease: "easeOut" } }}
                exit={{ x: "100%", transition: { duration: 0.1, ease: "easeIn" } }} 
                 >
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                    <button className='absolute top-6 left-6'  onClick={()=>setOpenMobileMenu(!openMobileMenu)}>
                        <X className='text-violet-500 md:hidden cursor-pointer'/>
                     </button>
                </motion.div>
            )
        }

        </AnimatePresence>
 
    </div>
  )
}

export default Navbar