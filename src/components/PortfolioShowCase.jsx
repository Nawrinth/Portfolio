import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Award, BadgeCheck, Code } from 'lucide-react';
import Project from './Project';
import Skills from './Skills';
import Certificates from './Certificates';

const PortfolioShowCase = () => {
    const [onPortfolio , setOnPortfolio] = useState(1);
    const activeBg = "text-white bg-gradient-to-l from-[#a54dbb60] to-[#ff00ea40]";
  return (
    
    <div
    id='portfolio'
    className='flex-col md:mt-40 mt-30 w-screen px-8 md:px-16 lg:px-32 flex items-center gap-14  justify-center'>
        {/* Heading  */}
        <motion.div
        initial={{
            opacity:0,
            y:-100,
        }}
        whileInView={{opacity:1,y:0}}
        transition={{
            duration:1.2
        }}
        className='flex flex-col gap-4 items-center justify-center'
         >
            <h1 className='text-center bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-4xl md:text-5xl overflow-hidden font-bold'>Portfolio Showcase</h1>
            <p className='w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-center text-gray-400'>Discover my journey through projects, certifications, and technical skills — each reflecting a step in my continuous learning and development.</p>
        </motion.div>
        <div className='w-full  h-26 rounded-xl bg-purple-950/5 border-1 p-[10px] px-4 border-gray-800 mb-20 flex gap-2 md:gap-4'>
            <button className={`flex flex-col gap-2 items-center justify-center w-1/3 group  rounded-xl transition-all duration-200 ${onPortfolio == 1 ? activeBg : "hover:bg-gradient-to-r from-[#a54dbb10] to-[#ff00ea10]"} hover:-translate-y-[2px]`}
            onClick={()=>{
                setOnPortfolio(1);
            }}
            >
                <Code strokeWidth={2.5} size={26} className={` group-hover:text-gray-100 transition-all duration-200 ${onPortfolio == 1 ? "" : "text-gray-400" }`}/>
                <p className={`font-medium text-lg  group-hover:text-gray-100 transition-all duration-200 ${onPortfolio == 1 ? "" : "text-gray-400" }`}>
                    Projects
                </p>
            </button>
            <button className={`flex flex-col gap-2 items-center justify-center w-1/3 group  rounded-xl transition-all duration-200 ${onPortfolio == 2 ? activeBg : "hover:bg-gradient-to-r from-[#a54dbb10] to-[#ff00ea10]"} hover:-translate-y-[2px]`}
            onClick={()=>{
                setOnPortfolio(2);
            }}
            >
                <Award strokeWidth={2.5} size={26} className={` group-hover:text-gray-100 transition-all duration-200 ${onPortfolio == 2 ? "" : "text-gray-400" }`}/>
                <p className={`font-medium text-lg  group-hover:text-gray-100 transition-all duration-200 ${onPortfolio == 2 ? "" : "text-gray-400" }`}>
                    Certificate
                </p>
            </button>
            <button className={`flex flex-col gap-2 items-center justify-center w-1/3 group  rounded-xl transition-all duration-200 ${onPortfolio == 3 ? activeBg : "hover:bg-gradient-to-r from-[#a54dbb10] to-[#ff00ea10]"} hover:-translate-y-[2px]`}
            onClick={()=>{
                setOnPortfolio(3);
            }}
            >
                <BadgeCheck strokeWidth={2.5} size={26} className={` group-hover:text-gray-100 transition-all duration-200 ${onPortfolio == 3 ? "" : "text-gray-400" }`}/>
                <p className={`font-medium text-lg group-hover:text-gray-100 transition-all duration-200 ${onPortfolio == 3 ? "" : "text-gray-400" }`}>
                    Skills
                </p>
            </button>


        </div>

        {onPortfolio == 1 && <Project/>}
        {onPortfolio == 2 && <Certificates/>}
        {onPortfolio == 3 && <Skills/>}
    </div>
  )
}

export default PortfolioShowCase