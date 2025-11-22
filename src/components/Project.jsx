import React from 'react'
import ProjectItem from '../elements/ProjectItem'
import { ProjectsList } from '../utils/Skills'

const Project = () => {
  return (
    <div className='grid grid-cols-1 p-4 md:p-0 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full'>
        {
          ProjectsList.map((project , index) => (
            <ProjectItem project={project} key = {index} />
          ))
        }
    </div>
  )
}

export default Project