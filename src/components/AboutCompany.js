import React from 'react'
import geo from '../assets/geology.jpg'
import history from '../assets/history.jpg'
import { useRef } from "react";
import { useInView } from "framer-motion";
import heroIcon from '../assets/heroIcon.png'
function AboutCompany() {
 const ref = useRef(null);
 const ref2 = useRef(null);
 const isInView = useInView(ref, { once: true });
 const isInView2 = useInView(ref2, { once: true });
  return (
   <>
 <p className="flex text-[#1C2752] w-1/2 h-[80px] bg-[#F4F4F4] text-[34px] rounded shadow-2xl  mx-auto   justify-center items-center mt-12  mb-12 -skew-x-12   " >  <span className="pl-2 skew-x-12 xl:text-center ">Геологическая съемка</span></p>

    <div className='lg:w-[95%] lg:h-[600px] skew-x-6  lg:flex lg:justify-around items-center p-20 rounded shadowLg mx-auto mb-24 bg-gray-100 ' ref={ref}>

     <div> <img src={geo} alt="" className='shadowLg  md:w-[80%] rounded -skew-x-6   ' /></div>
     <div className='   text-[#1C2752] lg:w-[70%]  xl:w-1/2  font-[600] ' style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}> <p className='text-[18px] -skew-x-6  xl:text-[20px] pt-12 xl:pt-0'> Геологическая съемка Лавского месторождения известняков в пределах восточной части 59 листа десятиверстной карты была произведена геологом , профессором Б.Н. Семихатовым написавшим в 1931 году отчет иллюстрируемый картой М 1: 420000 ( рукопись Фондов Московского геологического управления). <br />Первые  документально сохранившиеся упоминания о основании в 1929 году  «Лавского карьера» были в геологическом отчете о разведке Лавского месторождения известняков за 1946 года. Более ранних источников не обнаружено.</p></div>

    </div>
    <p className="flex text-[#1C2752] w-1/2 h-[80px] bg-[#F4F4F4]  text-[34px] rounded shadow-2xl  mx-auto   justify-center items-center mt-12  mb-12 -skew-x-12  " >  <span className="pl-2 skew-x-12">История</span></p>
    <p className='mt-4 mb-12 text-center text-[34px] text-[#1C2752]' ></p>
   
    <div className='w-[95%] lg:w-[91%] lg:flex lg:justify-between -skew-x-12 shadowLg  bg-[#1C2752]  items-center mx-auto p-20 mb-12 ' ref={ref2}>

    <div className=' lg:w-[40%] xl:w-[60%]   font-[600] text-white  ' style={{
          transform: isInView2 ? "none" : "translateX(-200px)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} > <p className='text-[16px] xl:text-[20px] skew-x-12 rounded '>За годы существования карьера менялись и его названия: вначале это был трест «Сахкамень», затем Лавский завод «Сахкамень» потом Елецкое карьероуправление Лавские рудники, а 21 августа 1974 года приказом по Московскому областному управлению ремонта и строительства городских дорог и объектов благоустройства было организовано Лавское карьероуправление  выделенное из состава треста «Россахпромтехизвестняк». Нынешнее название АО «Лавский карьер» получил в 2000 году. </p></div>

     <div className='w-[320px] md:w-full '> <img src={history} alt="" className='mt-4 md:mt-4 md:w-[800px] skew-x-12   lg:mt-0   lg:w-[500px] xl:w-[800px]  lg:mx-auto  rounded' /></div>


    </div>
    
   










    </>
  )
}

export default AboutCompany