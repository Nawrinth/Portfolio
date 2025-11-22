import React, { useEffect , useState } from 'react'
import Background from '../components/Background'
import { Code, ExternalLink, Github, Layers, MoveLeft } from 'lucide-react'
import { motion } from 'motion/react'
import { BiCube } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectsList } from '../utils/Skills'

const DetailsProject = () => {
    const { id } = useParams();
  const [project, setProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProject = ProjectsList.find((proj) => proj.slug === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);
  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className='relative min-h-screen w-screen text-[#EEEEEE]' key={id}>
    <Background />
    <div className="relative w-full py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">

        <div className=" w-full flex gap-8 items-center">
            <button className='flex gap-2 bg-[#2b26526e] hover:bg-[#3a365e6e] cursor-pointer transition-all duration-200 border-1 border-gray-400/20 p-3 rounded-2xl' onClick={()=>{navigate(-1)}}>
                <MoveLeft />
                Back
            </button>
            <div className='flex gap-3 text-gray-400 text-lg'>
                Projects <span>{">"}</span> <span className='text-white' >{project.project}</span>
            </div>
        </div>
            <div className='mt-14 flex flex-col lg:flex-row gap-20'>
                {/* Left Side  */}
                <motion.div
                initial={{opacity:0 , x:-100}}
                animate = {{opacity:1 , x:0}}
                transition={{duration:0.8}}
                className='flex-1/2 gap-6 flex flex-col'>
                        {/* Project Name  */}
                        <div className='flex flex-col gap-4 w-fit'>
                            <h1 className='text-[#eccaec] text-6xl font-bold'>{project.project}</h1>
                            <div className="w-[40%] h-1 rounded-full animate-pulse bg-gradient-to-r from-purple-700 to-pink-600"></div>

                        </div>

                        {/* Description  */}
                        <div>
                            <p className='text-gray-400'>{project.desc}</p>
                        </div>

                        {/* Information  */}

                        <div className="p-4 bg-[#3a365e6e] flex flex-col md:flex-row gap-10 w-fit rounded-xl">
                            
                            <div className='min-w-60 px-4 py-2 flex gap-4 items-center bg-white/5 rounded-xl hover:scale-103 transition-all duration-200 cursor-default border-1 border-gray-400/10 hover:border-[#5844af]'>
                                <div className='p-3 bg-[#5844af88] rounded-full'>
                                    <Code />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-xl font-semibold'>{(project.techUsed).length}</p>
                                    <p className='text-sm'>Total Technology</p>
                                </div>
                                
                            </div>
                            <div className='min-w-60 px-4 py-2 flex gap-4 items-center bg-white/5 rounded-xl hover:scale-103 transition-all duration-200 cursor-default border-1 border-gray-400/10 hover:border-[#af44a1]'>
                                <div className='p-3 bg-[#af44a188] rounded-full'>
                                    <Layers />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-xl font-semibold'>{(project.keyFeatures).length}</p>
                                    <p className='text-sm'>Key Features</p>
                                </div>
                                
                            </div>


                        </div>

                        {/* Navigation Links */}
                        <div className="flex gap-6 mt-6">
                            <a href={project.liveDemo} className='flex gap-2 p-4 py-3 bg-gradient-to-l from-[#26265088] to-[#382650be] rounded-lg border-1 border-gray-300/10 hover:scale-103 transition-all duration-200 hover:border-[#6e60e9] hover:from-[#2b2bb875] hover:to-[#531e979d] text-gray-300 w-40'>
                                <ExternalLink className='text-gray-300'/>
                                Live Demo
                            </a>
                            <a href={project.github} className='flex gap-2 p-4 py-3 bg-gradient-to-r from-[#3c265088] to-[#50264ebe] rounded-lg border-1 border-gray-300/10 hover:scale-103 transition-all duration-200 hover:border-[#a722a0] hover:from-[#601d9e88] hover:to-[#a3229d7c] text-gray-300 w-40'>
                                <Github className='text-gray-300'/>
                                GitHub
                            </a>
                        </div>

                        {/* Technologies Used  */}
                        <div>
                            <h1 className='flex gap-4 mb-10 mt-6 text-2xl items-center font-medium '>
                                <Code strokeWidth={3} size={20} color='#5945c9'/>
                                Technologies Used
                            </h1>
                        
                            <div className='flex flex-wrap gap-4'>
                                {
                                    (project.techUsed).map((technology , index) => (
                                        <div key={index} className="px-3 py-2 bg-gradient-to-r from-[#2f127233] to-[#d81bd825] hover:scale-103 transition-all duration-200  flex gap-2 items-center border-1 border-gray-300/10 rounded-xl text-[#d3d3d3] cursor-default">
                                            <BiCube className='text-[#5945c9]'/>
                                            {technology}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                </motion.div>


                {/* Right Side  */}
                <motion.div
                 className='flex-1/2 gap-12 flex flex-col items-center'
                 initial={{opacity:0 , x:100}}
                 animate = {{opacity:1 , x:0}}
                 transition={{duration:0.8}}
                 >
                    <div className='group overflow-hidden rounded-2xl   border-2 border-[#4d4d4d52] hover:border-[#d24cec6c] '>
                        <img src={project.image} draggable={false} className='aspect-video group-hover:scale-102 transition-all duration-200' alt="" />
                    </div>
                    <div className='flex flex-col bg-[#2b265225] rounded-3xl w-full px-10 py-10 space-y-4 border-1 border-white/7'>
                        <h2 className='font-medium text-2xl text-purple-100 mb-8'>🌟 Key Features</h2>
                        {
                            (project.keyFeatures).map((feature , index)=>(
                                <div key={index} className='flex p-5 hover:bg-white/5 rounded-2xl border-1 border-transparent hover:border-white/12 gap-4 transition-all duration-200 '>
                                    <div className="h-2 w-2 rounded-full bg-violet-800 mt-2"></div>
                                    <p>{feature}</p>
                                </div>
                            ))
                        }
                    </div>
                
                </motion.div>
            </div>

        {/* Footer  */}
        <footer className='w-screen h-24 border-t-1 border-gray-200/20 absolute left-0 mt-30 flex items-center text-white/40 justify-center'>
            © 2025 - All Rights Reserved.
        </footer>
        </div>
</div>

  )
}

export default DetailsProject