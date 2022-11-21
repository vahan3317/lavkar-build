import React  from "react";
import video1 from '../assets/videoMain.MP4'
import traktor from '../assets/traktor.jpg'
import heroIcon from '../assets/heroIcon.png'
import { motion,useInView } from "framer-motion";
import { useRef } from "react";


function Hero() {
  const ref = useRef(null);
  const refVideo = useRef(null);
  const isInViewVideo = useInView(refVideo, { once: true })
  const refMain = useRef(null);
  const isInViewMain = useInView(refMain, { once: true })
  const isInView = useInView(ref, { once: true })
  const refMain2 = useRef(null);
  const isInViewMain2 = useInView(refMain2, { once: true })

  return (
    <div className=' font-["Mulish"]'>
    
    
    
       <div className="mt-12  text-center  font-[600]  "> 
      
               <p className="text-[30px]  mx-auto mb-2 text-[#1C2752] lg:text-[40px]" ref={refMain}  style={{
          transform: isInViewMain ? "none" : "translateX(-200px)",
          opacity: isInViewMain ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>Добро пожаловать  на сайт  производителя <br /> известнякового щебня</p>
               
            
            
            
            <p className="text-black text-[27px] mb-4  " ref={refMain2}  style={{
          transform: isInViewMain2 ? "none" : "translateX(+200px)",
          opacity: isInViewMain2 ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>Мы рады приветствовать Вас <br /> на  сайт <br />  <span className="text-[#1C2752]"> "Лавский карьер". </span></p>
               
            
        
        
        <div ref={refVideo} className='w-full md:w-[50%]   mx-auto' style={{
          transform: isInViewVideo ? "none" : "translateX(-200px)",
          opacity: isInViewVideo ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
        <video src={video1}   controls="controls" autoPlay  className="mx-auto rounded  shadowLg lg:w-[95%]   " />
        </div>
      </div>
     

     
       <div className=" skew-x-12 mx-auto xl:w-[100%]  xl:h-[500px]   bg-gray-200 md:flex justify-around rounded shadowLg  items-center mt-24 mb-24 text-[#1C2752] font-[600]" ref={ref} style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
        <div className="p-12  "><img src={traktor} alt="" className=" w-full xl:w-[70%] xl:h-[80%]   rounded  " /></div>
        <div>
        
          <p className="p-6  xl:text-xl text-center">Основной продукцией АО "Лавский карьер" является щебень разных фракций, минеральная подкормка для птиц, технологический известняк для сахарной промышленности. </p>
          <div className="md:flex w-full md:justify-around xl:pr-56 ">
            <div className="w-[208px] h-[220px] mx-auto  text-center bg-gray-200    shadowLg  ">
              <p className="mt-[24px] text-[80px]  text-[#FFB342]">35</p>
              <p>лет Опыта</p>
              </div>
            <div className="mt-4 text-gray-900 font-[600] md:pl-8 md:pb-8 text-center">
            <span className=" text-[18px] font-[600]"> Предприятие оснащено` </span>
              <p className="mt-4">-  мощной горно-транспортной техники</p>
              <p className="mt-4">- дробильно-сортировочной фабрикой</p>
              <p className="mt-4">- укомплектовано высококвалифицированными специалистами</p>
              

            </div>
          </div>
        </div>
       </div>
      
    </div>
  );
}

export default Hero;