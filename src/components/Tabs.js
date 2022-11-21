import React from 'react'
import heroIcon from '../assets/heroIcon.png'
import sheben1 from '../assets/sheben1.jpg'
import sheben2 from '../assets/sheben2.jpg'
import sheben3 from '../assets/sheben3.png'
import { motion,useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from 'react-router-dom'

function Tabs() {
 const refTabs = useRef(null);
 
 
 
 const isInView = useInView(refTabs, { once: true })
  return (
   <>
   <p className="flex text-[#1C2752] w-1/2 h-[80px] bg-[#F4F4F4] -skew-x-12  text-[34px] rounded shadow-2xl  mx-auto    justify-center items-center  mb-4  " >  <span className="pl-2 skew-x-12 ">Продукция</span></p>

<div className='w-[82%] h-full skew-x-12 bg-[#1C2752] mx-auto rounded mb-12  shadowLg mt-12 '  ref={refTabs} style={{
          transform: isInView ? "none" : "translateX(+200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
       
       <ul class="
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
  
" id="tabs-tabJustify" role="tablist">
  <li class="nav-item flex-grow text-center " role="presentation">
    <a href="#tabs-homeJustify" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      text-[19px]
      transition duration-500 ease-in-out
      
      my-2
      hover:border-transparent  hover:text-yellow-400 hover:rounded-[8px]
      focus:border-transparent
      active
    " id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab"
      aria-controls="tabs-homeJustify" aria-selected="true"><span className='text-white hover:text-yellow-400'> Щебень известняковый фракции 40-70мм </span> </a>
  </li>
  <li class="nav-item flex-grow text-center" role="presentation">
    <a href="#tabs-profileJustify" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      text-[19px]
      hover:border-transparent hover:rounded-[8px] 
      focus:border-transparent 
    " id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-profileJustify" role="tab"
      aria-controls="tabs-profileJustify" aria-selected="false"> <span className='text-white hover:text-yellow-400'>Щебень известняковый фракции 20-40 мм </span> </a>
  </li>
  <li class="nav-item flex-grow text-center" role="presentation">
    <a href="#tabs-messagesJustify" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      text-[19px]
      font-[600]
      py-3
      my-2
      focus:border-transparent
    " id="tabs-messages-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-messagesJustify" role="tab"
      aria-controls="tabs-messagesJustify" aria-selected="false"> <span className='text-white hover:text-yellow-400'>Щебень известняковый фракции 5-20 мм  </span></a>
  </li>
</ul>
<div class="tab-content " id="tabs-tabContentJustify">
  <div class="tab-pane fade show active " id="tabs-homeJustify" role="tabpanel"
    aria-labelledby="tabs-home-tabJustify">
    <div class="flex justify-center    ">
  <div class="rounded-lg shadow-lg bg-white xl:w-[40%]  hover:skew-x-0  mb-4 text-center ">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-lg mx-auto mt-2 xl:w-[40%]" src={sheben1} alt=""/>
    </a>
    <div class="p-6 -skew-x-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Щебень известняковый фракции 40-70 мм ГОСТ 8267-93</h5>
      <p class="text-gray-700  mb-4">
      Основные характеристики данной смеси: <br />
      - Марка прочности — 600<br />
      - Марка морозостойкости — F100 <br />
      - Содержание пылевидных и глинистых частиц — 0,65% <br />
      - Содержание зерен слабых пород — 4% <br />
      - Насыпная плотность — 1230 кг/м3 <br />
    
      </p>
    </div>
  </div>
    </div>
  </div>
  <div class="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
  <div class="flex justify-center   ">
  <div class="rounded-lg  bg-white xl:w-[40%] mb-4  text-center ">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg mx-auto xl:w-[40%] xl:h-[50%] rounded  mt-2" src={sheben2} alt=""/>
    </a>
    <div class="p-6 mb-12">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Щебень известняковый фракции 40-70 мм ГОСТ 8267-93</h5>
      <p class="text-gray-700 text-base mb-4">
      Основные характеристики данной смеси: <br />
    - Марка прочности — 600 <br />
    - Марка морозостойкости — F100 <br />
    - Содержание пылевидных и глинистых частиц — 0,85% <br />
   - Содержание зерен слабых пород — 4% <br />
   - Насыпная плотность — 1300 кг/м3 br
    
      </p>
    </div>
  </div>
    </div>
  </div>
  <div class="tab-pane fade" id="tabs-messagesJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
  <div class="flex justify-center   ">
  <div class="rounded-lg bg-white xl:w-[40%] mb-4 text-center ">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg mx-auto w-[50%] rounded  mt-2" src={sheben3} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Щебень известняковый фракции 40-70 мм ГОСТ 8267-93</h5>
      <p class="text-gray-700 text-base mb-4">
      Основные характеристики данной смеси: <br />
- Марка прочности — 600 <br />
- Марка морозостойкости — F100 <br />
- Содержание пылевидных и глинистых частиц — 0,8% <br />
- Содержание зерен слабых пород — 3,5% <br />
- Насыпная плотность — 1310 кг/м3 <br />
      </p>
    </div>
  </div>
    </div>
  </div>
</div>

<div className='mb-8'>
<a href="/продукты" className='w-[320px]  flex justify-center items-center text-[22px] mx-auto h-[60px] rounded-lg text-white  hover:text-[26px] transition-[5s] mb-12 '>Все продукции </a>
</div>  
 
    </div>
  
    </>
  )
}

export default Tabs