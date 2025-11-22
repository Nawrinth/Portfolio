import React, { useEffect, useState } from 'react'
import Navbar from './components/NavBar'
import Background from './components/Background'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import PortfolioShowCase from './components/PortfolioShowCase'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastContainer, Zoom } from 'react-toastify'



const App = () => {
  
    const [openMobileMenu , setOpenMobileMenu] = useState(false);
  useEffect(()=>{
    if (openMobileMenu){
      document.body.classList.add("overflow-hidden")
    }
    else{
      document.body.classList.remove("overflow-hidden")
    }
  })

  return (
    <div className={`relative min-h-screen w-screen  text-[#EEEEEE] `}>
      {/* Background layer (should stay at bottom) */}
      <Background />
      
      {/* Content layer */}
      <div className="relative z-10">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
        <Navbar openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
        <Hero />
        <AboutMe />
        <PortfolioShowCase />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App