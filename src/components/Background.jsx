import React from 'react'

const Background = () => {
  return (
    <div className='fixed  w-screen h-screen overflow-hidden z-[-100px] bg-[#100616]'>
      <div className='bg-[#ff2897] blur-3xl absolute top-20 left-20  opacity-20 transform rounded-full h-[300px] w-[300px]'></div>
      <div className='bg-[#5811ff] blur-3xl absolute top-20 right-20  opacity-20 transform rounded-full h-[300px] w-[300px]'></div>
      <div className='bg-[#1fffdd] blur-3xl absolute bottom-20 left-20  opacity-20 transform rounded-full h-[300px] w-[300px]'></div>
        <div className='absolute inset-0 z-0 rotate-bg opacity-30'>

            <div className="bg-[#5811ff] blur-3xl motion-box-1  absolute top-[50%] left-[50%] h-[290px] w-[240px] transform -translate-x-1/2  -translate-y-1/2 rounded-full"></div>
            <div className="bg-[#1fffdd] blur-3xl  motion-box-2 absolute top-[50%] left-[50%] h-[290px] w-[240px] transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="bg-[#ff2897] blur-3xl  motion-box-3 absolute top-[50%] left-[50%] h-[290px] w-[240px] transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none backdrop-blur-2xl bg-[#12121218] bg-[length:60px_60px] bg-[linear-gradient(to_right,#33333315,transparent_2px),linear-gradient(to_bottom,#33333315_1px,transparent_2px)]"></div>


    </div>
  )
}

export default Background