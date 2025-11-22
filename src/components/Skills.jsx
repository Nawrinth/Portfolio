import React, { useEffect, useState } from 'react'
import  {SkillList}  from '../utils/Skills';
import { AnimatePresence, motion } from 'motion/react';

const Skills = () => {
  const [skillType , setSkillType] = useState(1);
  const [skills , setSkills] = useState(SkillList.language);

  const skillMap = {
    1: SkillList.language,
    2: SkillList.framework,
    3: SkillList.ml
  };

  useEffect(() => {
    setSkills(skillMap[skillType]);
  }, [skillType]);


  return (
    <div className='flex flex-col min-h-[250px] items-center  gap-8 w-full'>
      <motion.div
       class="p-2 flex gap-4 bg-[#2b26526e] rounded-xl"
       initial={{opacity:0 , y:-100}}
       whileInView={{opacity:1 , y:0}}
       transition={{duration:0.6}}
       >
        <button 
        className={`p-2 text-gray-300 rounded-xl cursor-pointer ${skillType == 1 ? "bg-[#e2e2e228]" : ""}`}
        onClick={()=>setSkillType(1)}
        >
            Languages
        </button>
        <button
         className={`p-2 text-gray-300 rounded-xl cursor-pointer ${skillType == 2 ? "bg-[#e2e2e228]" : ""}`}
         onClick={()=>setSkillType(2)}
         >
            Framework/Library
        </button>
        <button
         className={`p-2 text-gray-300 rounded-xl cursor-pointer ${skillType == 3 ? "bg-[#e2e2e228]" : ""}`}
         onClick={()=>setSkillType(3)}
         >
            ML/Data
        </button>
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={skills.join()} // ensures animation runs on change
          className="bg-[#2b26526e] shadow-xl shadow-[#9a0fbd57] flex flex-wrap gap-4 px-4 p-3 rounded-2xl max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4 }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-2 px-4 bg-[#66666621] border border-[#a5a5a536] hover:bg-[#66666654] transition-all duration-200 rounded-full flex gap-2"
            >
              <img src={skill[1]} className="h-6 w-6" alt="" />
              {skill[0]}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

    </div>
  )
}

export default Skills