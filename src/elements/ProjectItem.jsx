import React from 'react'
import neuroScan from "../assets/neuroscan.png"
import { MoveRight, SendIcon, } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ProjectItem = ({children , project }) => {
    const navigate = useNavigate();
    const navigateDetails = ()=>{
        
        navigate(`/projects/${project.slug}`)
    }
  return (
    <div className='flex flex-col justify-between gap-10 hover:scale-101  bg-[#2b26526e] hover:bg-[#3a365e6e] border-1 border-gray-900 hover:border-purple-900 transition-all duration-200  rounded-xl p-4'>
        <div className='flex flex-col gap-3'>
            <img src={project.image} className='rounded-xl transition-all duration-200  aspect-video bg-contain' alt="" />
            <h1 className='text-xl mt-1 font-bold text-purple-200'>{project.project}</h1>
            <p>{project.desc}</p>
        </div>

        <div className='flex flex-row-reverse justify-between'>
            <button type="button" onClick={navigateDetails} className='flex items-center gap-2 px-4 py-2 bg-[#2b26526e] hover:bg-[#3a365e6e] rounded-xl cursor-pointer'>
                <p>Details</p>
                <MoveRight size={16} />
            </button>
                {
                    project.liveDemo && 
                <div className='flex items-center group '>
                    <a href={project.liveDemo} className='px-4 py-2 rounded-xl text-[#f56bde] group-hover:text-[#f549d8] transition-all duration-200'>Live Demo</a>
                    <SendIcon size={14} className='text-[#f56bde] mt-[3px] -ml-1 group-hover:text-[#f549d8] group-hover:-translate-y-[2px] transition-all duration-200' />
                </div>
                }
        </div>

    </div>
  )
}

export default ProjectItem