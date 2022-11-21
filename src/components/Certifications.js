import React from 'react'
import certificate1 from '../assets/certificate1.jpg'
import certificate2 from '../assets/certificate2jpg.jpg'
import certificate3 from '../assets/certificate3.jpg'
import {useState} from 'react'
// import history from '../assets/history.jpg'
import { motion,useInView } from "framer-motion";
import { useRef } from "react";
function Certifications() {
 const refImages = useRef(null);
 const isInViewImages = useInView(refImages, { once: true })
  return (
    <div className=' xl:w-[100%] mx-auto mb-24 mt-20'>
       <p className="flex text-[#1C2752] w-1/2 h-[80px] bg-[#F4F4F4] -skew-x-12 text-[34px] rounded shadow-lg  mx-auto   justify-center items-center mt-12  mb-12  " >  <span className="pl-2 skew-x-12">Сертификаты</span></p>
     
          <div className='lg:w-[100%] xl:h-[600px] p-20  items-center shadowLg bg-gray-200 mx-auto lg:flex lg:justify-between' ref={refImages} style={{
   transform: isInViewImages ? "none" : "translateY(-200px)",
   opacity: isInViewImages ? 1 : 0,
   transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
 }}>
           <div data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen" className='mt-8 lg:px-4 xl:px-0  border-2 border-solid  flex justify-center h-600px   ' ><img src={certificate1}  alt="" className='w-[320px] md:w-[320px] rounded-lg shadow cursor-grab ' /></div>
           <div data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen2" className='mt-8 lg:px-4 xl:px-0 border-2 border-solid  flex justify-center h-600px'><img src={certificate2} alt="" className='w-[320px] md:w-[320px]  rounded-lg shadow cursor-grab  ' /></div>
           <div data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen3" className='mt-8 lg:px-4 xl:px-0 border-2 border-solid  flex justify-center h-600px'><img src={certificate3} alt="" className='w-[320px] md:w-[320px] rounded-lg shadow  cursor-grab ' /></div>
          



<div class="modal fade fixed top-0 left-0 hidden w-full  h-[800px] rounded-lg outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true"  >
  <div class="modal-dialog modal-fullscreen relative w-auto rounded-lg pointer-events-none">
    <div
      class="modal-content border-none shadow-lg rounded-lg relative flex flex-col w-full pointer-events-auto bg-gray-300 bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center rounded-lg justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium rounded-lg leading-normal text-gray-800" id="exampleModalFullscreenLabel">
          Сертификат Соответствия
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4"><img src={certificate1}  alt="" className='w-[320px] md:w-[550px] rounded-lg shadow hover:cursor-grab hover:w-[770px]' /></div>
    
    </div>
  </div>
</div>

<div class="modal fade fixed top-0 left-0 hidden w-full  h-[800px] outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModalFullscreen2" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel2" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen relative rounded-lg w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-gray-300 bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalFullscreenLabel">
          Сертификат Соответствия
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4"><img src={certificate2}  alt="" className='w-[320px] md:w-[550px] rounded-lg shadow hover:cursor-grab hover:w-[770px]' /></div>
    
    </div>
  </div>
</div>
<div class="modal fade fixed top-0 left-0 hidden w-full  h-[800px] outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModalFullscreen3" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel2" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-gray-300 bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalFullscreenLabel">
          Сертификат Соответствия
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4"><img src={certificate3}  alt="" className='w-[320px] md:w-[550px] rounded-lg shadow hover:cursor-grab hover:w-[770px]' /></div>
    
    </div>
  </div>
</div>

          </div>
<button className='w-[400px] shadow flex justify-center items-center text-[22px] mx-auto h-[60px] rounded-lg text-black bg-gray-200 mb-12 hover:bg-[#FFB342] hover:text-white transition duration-500 ease-in-out font-[500] mt-12'><a href="http://lavkar.ru/images/stories/GO2021.pdf">Посмотреть годовой отчет за 2021 г.</a></button>
        
        

    </div>
  )
}

export default Certifications