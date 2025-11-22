import React, { useState } from 'react'
import { motion } from 'motion/react'
import { MdEmail } from 'react-icons/md'
import { Github, Instagram, Linkedin, MessageSquare, Send, User } from 'lucide-react'
import emailjs from 'emailjs-com';
import { toast, Zoom } from 'react-toastify';
import { div } from 'motion/react-client';
import { SocialMediaLinks } from '../utils/Skills';

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const [loading , setLoading] = useState(false);


    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    setLoading(true)
    e.preventDefault();
    if (formData.user_name == '' || formData.user_email == '' || formData.message == ''){
        setLoading(false);
        return toast.warn('All the fields are required', {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
            });
    }
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_KEY,     // replace with your actual service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,    // replace with your template ID
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,    // replace with your template ID
           // replace with your EmailJS public key
    ).then((result) => {
        setLoading(false);
        toast.success('Email delivered successfully', {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
            });
      setFormData({ user_name: '', user_email: '', message: '' });
    }, (error) => {
        setLoading(false);
        toast.error('Something went wrong', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        });
    });
  };


  return (
    <div
    id='contact'
    className='flex-col md:mt-40 mt-30 w-screen px-8 md:px-16 lg:px-32 flex items-center gap-14  justify-center mb-30'>
        <motion.div
        initial={{
            opacity:0,
            y:100,
        }}
        whileInView={{opacity:1,y:0}}
        transition={{
            duration:1.2
        }}
        className='flex flex-col gap-4 items-center justify-center w-full'
         >
            <h1 className='text-center bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-4xl md:text-5xl overflow-hidden font-bold'>Contact Me</h1>
            <p className='w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-center text-gray-400'>Got a question? Send me a message, and I'll get back to you soon.</p>
        </motion.div>

        <div className='max-w-[700px]  bg-white/2 flex flex-col items-center  p-2 md:p-8 rounded-2xl'>
            <motion.div
             className='bg-white/3 w-full  rounded-2xl flex flex-col p-6 space-y-2'
             initial={{
                opacity:0,
                x:-150,
             }}
                whileInView={{opacity:1,x:0}}
                transition={{
                duration:0.75
            }}
             >
                
                <h2 className='text-4xl font-bold bg-gradient-to-l from-purple-600 to-purple-400 bg-clip-text text-transparent'>Get In Touch</h2>
                
                <p className='text-gray-400 '>Have a question or opportunity? Send me a message — I’m all ears.</p>

                <form onSubmit={sendEmail} className='mt-8 w-full space-y-10'>
                    {/* ENTER NAME  */}
                    <motion.div 
                    className='group  flex gap-4 px-4 py-4 items-center w-full text-lg border-1 border-gray-400 rounded-2xl bg-white/10'
                    initial={{
                        opacity:0,
                        y:100,
                    }}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                        duration:0.4,
                        delay:0.80
                    }}
                    >
                        <User />
                        <input
                         type="text"
                         className='w-full outline-none border-none' placeholder='Enter your Name'
                         
                        name="user_name"
                        value={formData.user_name}
                        autoComplete="off"
                        onChange={handleChange} />
                    </motion.div>

                    {/* ENTER EMAIL  */}
                    <motion.div className='group  flex gap-4 px-4 py-4 items-center w-full text-lg border-1 border-gray-400 rounded-2xl bg-white/10'
                    initial={{
                        opacity:0,
                        y:100,
                    }}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                        duration:0.4,
                        delay:0.90
                    }}
                    >
                        <MdEmail />
                        <input 
                        type="text" 
                        className='w-full outline-none border-none' 
                        placeholder='Enter your Email' 
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        autoComplete="off"
                        />
                    </motion.div>

                    {/* ENTER DESCRIPTION  */}
                    <motion.div className='group flex gap-4 px-4 py-4  w-full text-lg border-1 border-gray-400 rounded-2xl bg-white/10'
                    initial={{
                        opacity:0,
                        y:100,
                    }}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                        duration:0.4,
                        delay:1
                    }}
                    >
                        <MessageSquare size={16} className='mt-2' />
                        <textarea rows="4"
                        className="w-full resize-none bg-transparent text-white outline-none border-none placeholder:text-gray-400" placeholder='Description'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        />
                    </motion.div>
                    
                    {/* SUBMIT BUTTON  */}
                    <motion.button 
                    className={`w-full p-4 bg-gradient-to-l from-purple-600 to-pink-600 rounded-xl font-medium text-xl cursor-pointer hover:scale-103 transition-all duration-200 flex gap-2 justify-center items-center disabled:opacity-40 disabled:cursor-not-allowed`}
                    initial={{
                        opacity:0,
                        y:100,
                    }}
                    disabled={loading}
                    type='submit'
                    whileInView={{opacity:1,y:0}}
                    transition={{
                        duration:0.4,
                        delay:1.10
                    }}
                    >
                        {
                            loading ? <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                            :(
                                <div className="flex gap-3 items-center">
                                    <Send size={20} />
                                    <p>Send Message</p>
                                </div>
                            )
                        }
                       
                    </motion.button>
                </form>
            </motion.div>
            <div className='h-[1px] w-full m-20 bg-gray-500'></div>
            <div className='bg-white/3 w-full  rounded-2xl flex flex-col p-6 space-y-6'>
                <h1 className='text-2xl w-fit font-semibold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent'>Get Connected</h1>
                <div className='space-y-4'>
                    {/* LinkedIn  */}
                    <a href={SocialMediaLinks.linkedin} target='_blank' className='flex gap-4 group hover:bg-[#1e1e38a9] p-3 rounded-xl bg-white/4 transition-all duration-200 hover:scale-101'>
                        <div className='p-3 group-hover:bg-blue-600/20 rounded-xl transition-all duration-200'>
                          <Linkedin  className='text-[#1c72f3]'/>
                        </div>
                        <div>
                            <p className='font-medium text-lg'>LinkedIn</p>
                            <p className='font-extralight'>@nawrinth</p>
                        </div>
                    </a>

                    {/* Instagram  */}
                    <a href={SocialMediaLinks.instagram} target='_blank' className='flex gap-4 group hover:bg-[#e40f921c] p-3 rounded-xl bg-white/4 transition-all duration-200 hover:scale-101'>
                        <div className='p-3 bg-[#e40f923d] rounded-xl transition-all duration-200'>
                          <Instagram  className='text-[#e40f92] mt-[2px]'/>
                        </div>
                        <div>
                            <p className='font-medium text-lg'>Instagram</p>
                            <p className='font-extralight'>@nawrinth</p>
                        </div>
                    </a>

                    {/* LinkedIn  */}
                    <a href={SocialMediaLinks.github} target='_blank' className='flex gap-4 group hover:bg-[#46464669] p-3 rounded-xl bg-white/4 transition-all duration-200 hover:scale-101'>
                        <div className='p-3 bg-[#747474] rounded-xl transition-all duration-200'>
                          <Github  className='text-[#dddddd] mt-[1px]'/>
                        </div>
                        <div>
                            <p className='font-medium text-lg'>Github</p>
                            <p className='font-extralight'>@Nawrinth</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact