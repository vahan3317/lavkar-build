import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Tabs from '../components/Tabs';
import AboutCompany from '../components/AboutCompany';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import Header from '../Header';
function Main() {
 const item = {
  hidden: { y: 150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 2
    },
   
  }
};
  return (
    <div className='bg   ' >
      <button
  type="button"
  data-mdb-ripple="true"
  data-mdb-ripple-color="light"
  class="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out hidden bottom-5 right-5 fixed"
  id="btn-back-to-top"
>
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    class="w-4 h-4"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
    ></path>
  </svg>
</button>

  <motion.div
    className=" mx-auto "
    variants={item}
    initial="hidden"
    animate="visible"
    
  
  >
    
      
    
     <Hero />
     <Tabs />
     <AboutCompany />
     <a href="/Опредприятии"> <button className='w-[400px] shadow flex justify-center items-center text-[22px] mx-auto h-[60px] rounded-lg text-white bg-[#1C2752] mb-12 hover:bg-[#FFB342] transition duration-500 ease-in-out '>Узнать больше</button></a>
     <Certifications />
     
    </motion.div>



    </div>
  )
}

export default Main