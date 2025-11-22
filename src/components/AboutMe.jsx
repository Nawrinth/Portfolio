import { Award, Code, Globe, MoveUpRight, ScrollText, Share } from 'lucide-react'
import React from 'react'
import { motion } from 'motion/react'
import { CertificatesList, ProjectsList } from '../utils/Skills';

const AboutMe = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            staggerChildren: 0.3,
            duration: 0.8,
            ease: "easeInOut"
            }
        }
        };

        const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            duration: 0.8,
            ease: "easeInOut"
            }
        }
        };
  return (
    <div 
    id='about'
    className='gap-12 flex-col md:mt-20 mt-30 w-screen px-8 md:px-16 lg:px-32 flex items-center justify-center'>
        <motion.div
        initial={{
            opacity:0,
            y:100,
        }}
        whileInView={{opacity:1,y:0}}
        transition={{
            duration:0.75
        }}
         className='bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-4xl md:text-5xl overflow-hidden font-bold'>
            About Me
        </motion.div>
        <motion.p
         className='w-[90%] md:w-[75%] lg:w-[55%] text-[18px] font-light text-center leading-8 text-gray-300'
         initial={{
            opacity:0,
            x:-100,
        }}
        whileInView={{opacity:1,x:0}}
        transition={{
            duration:0.75
        }}
        >
            Hello, I’m{"  "}<span className='text-violet-100'>Nawrinth S</span>— a 3rd-year college student and passionate MERN stack developer with a growing interest in machine learning. I enjoy building smart, scalable web and mobile applications that deliver smooth digital experiences. Having completed a full-stack development course, I’m constantly exploring new technologies to enhance my skills. With a strong focus on lifelong learning, my goal is to step into the IT industry by 2027 and eventually dive deep into AI and data science.
        </motion.p>

        {/* NAvigation Section */}

        <motion.div className='flex space-x-10'
            initial={{
                opacity:0,
                y:100,
            }}
            whileInView={{opacity:1,y:0}}
            transition={{
                duration:0.9
            }}
        >
            <a
             href="https://ik.imagekit.io/lle8t0qjk/resume.pdf?updatedAt=1754595422839"
             download={true}
              className='flex gap-2 items-center rounded-lg px-8 py-2 bg-gradient-to-l from-violet-500 to-pink-500 h transition-all duration-300 hover:scale-105'
              >
                <ScrollText size={16}/>
                <p>Resume</p>
            </a>
            <a href="#portfolio" className='flex gap-2 items-center rounded-lg px-4 py-2 border-1 bg-purple-600/10 border-purple-600 transition-all duration-300 hover:scale-105'>

                <Code size={16} />
                <p>View Projects</p>
            </a>
        </motion.div>

        {/* Informations  */}

        <motion.div className="flex flex-col md:flex-row mt-10  w-full gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} 
        >
            {/* Projects  */}
            <motion.div 
            className="w-full md:w-1/3 gap-4 flex flex-col group p-8  bg-[#2b26526e] hover:bg-[#3a365e6e] hover:scale-103 rounded-2xl transition-all duration-200"
            variants={cardVariants}
            >
                <div className='flex items-center justify-between w-full'>
                    <div className='p-3 rounded-full bg-gray-500/40'>
                        <Code size={32} strokeWidth={2} className='group-hover:rotate-10  transition-all duration-200'/>
                    </div>
                    <p className='text-4xl'>{ProjectsList.length}</p>
                </div>
                <div className='w-full flex justify-between'>
                    <div className='space-y-2'>
                        <p className='font-light'>TOTAL PROJECTS</p>
                        <p className='text-sm tracking-wide font-extralight '>Built With Code Passion</p>
                    </div>
                    <a href='#portfolio'>
                        <MoveUpRight size={16} color='#888888'/>
                    </a>
                </div>
            </motion.div>

            {/* Award  */}

            <motion.div
             className="w-full md:w-1/3 gap-4 flex flex-col group p-8   bg-[#2b26526e] hover:bg-[#3a365e6e] hover:scale-103 rounded-2xl transition-all duration-200"
             variants={cardVariants}
             >
                <div className='flex items-center justify-between w-full'>
                    <div className='p-3 rounded-full bg-gray-500/40'>
                        <Award size={32} strokeWidth={2} className='group-hover:rotate-10  transition-all duration-200'/>
                    </div>
                    <p className='text-4xl'>{CertificatesList.length}</p>
                </div>
                <div className='w-full flex justify-between'>
                    <div className='space-y-2'>
                        <p className='font-light'>CERTIFICATES</p>
                        <p className='text-sm tracking-wide font-extralight '>Courses Completed With Certification</p>
                    </div>
                    <a href='#portfolio'>
                        <MoveUpRight size={16} color='#888888'/>
                    </a>
                </div>
            </motion.div>

            {/* Experience  */}
            <motion.div
             className="w-full md:w-1/3 gap-4 flex flex-col group p-8  bg-[#2b26526e] hover:bg-[#3a365e6e] hover:scale-103 rounded-2xl transition-all duration-200"
             variants={cardVariants}
             >
                <div className='flex items-center justify-between w-full'>
                    <div className='p-3 rounded-full bg-gray-500/40'>
                        <Globe size={32} strokeWidth={2} className='group-hover:rotate-10  transition-all duration-200'/>
                    </div>
                    <p className='text-4xl'>1+</p>
                </div>
                <div className='w-full flex justify-between'>
                    <div className='space-y-2'>
                        <p className='font-light uppercase'>Self Taught Experience</p>
                        <p className='text-sm tracking-wide font-extralight '>Practical Learning Through Real Projects</p>
                    </div>
                    <a href=''>
                        <MoveUpRight size={16} color='#888888'/>
                    </a>
                </div>
            </motion.div>
            
            
        </motion.div>
    </div>
  )
}

export default AboutMe