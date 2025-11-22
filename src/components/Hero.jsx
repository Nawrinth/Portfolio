import { ExternalLink, Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import { MdEmail } from 'react-icons/md'
import userImg from "../assets/user-1.png"
import { motion } from 'motion/react'


const Hero = () => {
  return (
    <div
    id='home'
    className=" pt-50 md:pt-[64px] gap-10 md:gap-4  flex-col md:flex-row min-h-[calc(100vh-64px)] w-screen px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center ">
      <div className="flex-1/2 space-y-8">
        <div className='py-2 flex gap-2 bg-white/5 px-4 rounded-full border-gray-600 border-1 w-fit shadow-xs shadow-violet-500  '>
            <p className=''>⚡</p>
            <span className='bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent'>  Crafting Ideas into Impact</span>
        </div>  
        <div className='space-y-6'>

            <h1 className='text-6xl w-fit overflow-hidden font-bold bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Nawrinth S</h1>
            <p className='text-xl lg:text-[24px] font-light'>Computer Science & Engg. Student</p>
        </div>

        {/* Description  */}
        <motion.div
            initial={{
            opacity:0,
            y:100,
            }}
            animate={{opacity:1,y:0}}
            transition={{
                duration:1
            }}
        >
            <p className='text-[20px] text-white/60 max-w-[95%]'>
                Crafting seamless digital journeys that scale beautifully and leave a lasting impression.
            </p>
        </motion.div>

        {/* Key Skills  */}
        <motion.div className='flex-wrap flex gap-4'
            initial={{
                opacity:0,
                y:100,
            }}
            animate={{opacity:1,y:0}}
            transition={{
                duration:1,
                delay:0.20
            }}
        >
            {[
                "React" , "Machine Learning" , "MongoDB" , "Node.js"
            ].map((skill , index) =>(
                <div key={index} className="py-2 px-4 bg-[#202020] hover:bg-[#303030] border-1 border-gray-500 w-fit rounded-full cursor-text">
                    {skill}
                </div>  
            ))
            }
        </motion.div>

        {/* Navigation Tab  */}
        <motion.div className='flex gap-10'
            initial={{
                opacity:0,
                y:100,
            }}
            animate={{opacity:1,y:0}}
            transition={{
                duration:1,
                delay:0.40,
            }}
        >
            <a href="#portfolio" className='group shadow hover:shadow-lg transition-shadow duration-300 shadow-violet-900 flex items-center justify-center gap-4 border-1 border-[#4d4d4d] px-4 py-2 rounded-lg bg-[#180b2e] '>
                <p>Projects</p>
                <ExternalLink className='transition-all duration-200 group-hover:translate-x-2' size={16}/>
            </a>
            <a href="#contact" className='group shadow hover:shadow-lg transition-shadow duration-300 shadow-violet-900 flex items-center justify-center gap-4 border-1 border-[#4d4d4d] px-4 py-2 rounded-lg bg-[#180b2e]'>
                <p>Contact</p>
                <MdEmail className='transition-all duration-200 group-hover:translate-x-2' size={16}/>
            </a>
        </motion.div>
        
        {/* Follow Us Tab  */}
        <motion.div className='flex gap-6'
            initial={{
                opacity:0,
                y:100,
            }}
            animate={{opacity:1,y:0}}
            transition={{
                duration:1,
                delay:0.60,
            }}
        >
            <a href='' className='group rounded-lg p-3 shadow hover:shadow-lg transition-shadow duration-300 shadow-violet-900 border-1 border-[#4d4d4d] bg-[#180b2e]'>
                <Linkedin size={18} className='group-hover:rotate-30 transition-all duration-300' color='#CCCCCC'/>
            </a>

            <a href='' className='group rounded-lg p-3 shadow hover:shadow-lg transition-shadow duration-300 shadow-violet-900 border-1 border-[#4d4d4d] bg-[#180b2e]'>
                <Github size={18} className='group-hover:rotate-30 transition-all duration-300'  color='#CCCCCC'/>
            </a>

            <a href='' className='group rounded-lg p-3 shadow hover:shadow-lg transition-shadow duration-300 shadow-violet-900 border-1 border-[#4d4d4d] bg-[#180b2e]'>
                <Instagram size={18} className='group-hover:rotate-30 transition-all duration-300'  color='#CCCCCC'/>
            </a>
        </motion.div>

      </div>
      <div className='md:flex-1/2'>
            <div className='rounded-full flex items-center justify-center'>
                <img draggable={false} src={userImg} className='h-100 md:h-150 cover' alt="user" />
            </div>
      </div>
    </div>
  )
}

export default Hero
