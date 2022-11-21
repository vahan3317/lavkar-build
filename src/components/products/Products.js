import React from 'react'
import heroIcon from '../../assets/heroIcon.png'
import sheben1 from '../../assets/sheben1.jpg'
import sheben2 from '../../assets/sheben2.jpg'
import sheben3 from '../../assets/sheben3.png'
import {useState,useRef}  from 'react'
import { motion,useInView } from "framer-motion";

function Products() {
 const [showMore, setShowMore] = useState(false);
 const [showMore2, setShowMore2] = useState(false);
 const [showMore3, setShowMore3] = useState(false);
 const [showMore4, setShowMore4] = useState(false);
 const [showMore5, setShowMore5] = useState(false);
 const refCard = useRef(null);
 const isInViewCard = useInView(refCard, { once: true })

 const refCard2 = useRef(null);
 const isInViewCard2 = useInView(refCard2, { once: true })

 const refCard3 = useRef(null);
 const isInViewCard3 = useInView(refCard3, { once: true })
 
 const refCard4 = useRef(null);
 const isInViewCard4 = useInView(refCard4, { once: true })

 const refCard5 = useRef(null);
 const isInViewCard5 = useInView(refCard5, { once: true })



 const text = 'Щебень известняковый фракции 40-70 мм  для строительных работ  по показателям: зерновой состав, содержание зерен слабых пород, пылевидных и глинистых частиц, глины в комках, посторонних  засоряющих и вредных примесей, устойчивости структуры против всех видов распадов соответствует  требованиям ГОСТ 8267-93.'
 const text2 = "Щебень известняковый фракции 20-40 мм  для строительных работ  по показателям: зерновой состав, содержание зерен слабых пород, пылевидных и глинистых частиц, глины в комках, посторонних  засоряющих и вредных примесей, устойчивости структуры против всех видов распадов соответствует  требованиям ГОСТ 8267-93."
 const text3 = "Щебень известняковый фракции 5-20 мм  для строительных работ  по показателям: зерновой состав, содержание зерен слабых пород, пылевидных и глинистых частиц, глины в комках, посторонних  засоряющих и вредных примесей, устойчивости структуры против всех видов распадов соответствует  требованиям ГОСТ 8267-93."
 const text4 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dolore soluta placeat et dolorum temporibus inventore autem rerum suscipit magnam. Laboriosam corrupti dolorem eum exercitationem ipsum, tempora magnam labore fuga."
 const text5 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dolore soluta placeat et dolorum temporibus inventore autem rerum suscipit magnam. Laboriosam corrupti dolorem eum exercitationem ipsum, tempora magnam labore fuga."
 
 return (
    <div className='mt-24 mb-12'>
     <motion.p
                animate={{ x: [50, 100, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.25,
                    delay: 0.9,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5, }}
                className='mr-24 lg:mr-24 '
            >
                      
                      <p className="flex text-[#1C2752] -skew-x-12 w-1/2 h-[80px] bg-[#F4F4F4]  text-[34px] rounded shadow-lg  mx-auto   justify-center items-center  mb-4  " >  <span className="pl-2 skew-x-12">Наша продукция</span></p>
               
            </motion.p>
            
            <motion.p
                animate={{ y: [100, 100, 5], opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.25,
                    delay: 1,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 1.5, }}
                className='text-center md:mr-42    '
            >
                  <p className='w-[100%] mx-auto -skew-x-12 md:w-[100%] lg:w-[90%] xl:w-[50%]  mb-8 md:text-[16px] xl:text-[22px]  mx-auto text-[#1C2752] font-[600]'>Вся выпускаемая продукция строго контролируется лабораторией.  Щебень добываемый в АО  "Лавский карьер" соответствует экологическим  нормам и безопасен для здоровья, что подтверждено надлежащими документами.</p>

               
            </motion.p>
     <div class="w-[78%] mx-auto grid gap-4 grid-cols-1  md:gap-12 lg:gap-24 grid-x-12  md:grid-cols-2    lg:grid-cols-3">
     <div class="flex justify-center">
  <div class="rounded-lg shadowLg  max-w-full bg-[#1C2752] text-white " ref={refCard} style={{
          transform: isInViewCard ? "none" : "translateX(-300px)",
          opacity: isInViewCard ? 1 : 0,
          transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}>
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src={sheben1} alt=""/>
    </a>
    <div class="p-6">
      <h5 class=" lg:text-[18px] font-[700] mb-2  text-[#FFB342]">Щебень известняковый фракции 40-70 мм <br /> ГОСТ 8267-93</h5>
      <ul>
       <li>Основные характеристики данной смеси:</li>
       <li>- Марка прочности — 600</li>
       <li>- Марка морозостойкости — F100</li>
       <li> - Содержание пылевидных и глинистых частиц — 0,65%</li>
       <li>- Содержание зерен слабых пород — 4%</li>
       <li>- Насыпная плотность — 1230 кг/м3</li>

      </ul>
      <p>{showMore ? text : `${text.slice(0, 0)+ "..."}`}</p>
      <button className=" mt-4 bg-white text-black w-[35%] h-[40px] flex justify-center items-center rounded hover:shadow hover:bg-[#FFB342]" onClick={() => setShowMore(!showMore)}>{showMore ? "Закрыть" : " Подробнее"}</button>
      
    </div>
  </div>
</div>

<div class="flex justify-center ">
  <div class="rounded-lg shadowLg   max-w-full bg-[#1C2752] text-white" ref={refCard2} style={{
          transform: isInViewCard2 ? "none" : "translateY(+300px)",
          opacity: isInViewCard2 ? 1 : 0,
          transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}>
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src={sheben1} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-[#FFB342] font-[700] lg:text-[18px] font-medium mb-2">Щебень известняковый фракции 20-40 мм <br /> ГОСТ 8267-93</h5>
      <ul>
       <li>Основные характеристики данной смеси:</li>
       <li>- Марка прочности — 600</li>
       <li>- Марка морозостойкости — F100</li>
       <li> - Содержание пылевидных и глинистых частиц — 0,85%</li>
       <li>- Содержание зерен слабых пород — 4%</li>
       <li>- Насыпная плотность — 1300 кг/м3</li>

      </ul>
      <p>{showMore2 ? text2 : `${text2.slice(0, 0)+ "..."}`}</p>
      <button className=" mt-4 bg-white text-black w-[35%] h-[40px] flex justify-center items-center rounded hover:shadow hover:bg-[#FFB342]" onClick={() => setShowMore2(!showMore2)}>{showMore2 ? "Закрыть" : " Подробнее"}</button>
      
    </div>
  </div>
</div>



      
<div class="flex justify-center  ">
  <div class="rounded-lg shadowLg bg-[#1C2752] text-white max-w-full" ref={refCard3} style={{
          transform: isInViewCard3 ? "none" : "translateX(+300px)",
          opacity: isInViewCard3 ? 1 : 0,
          transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}>
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src={sheben1} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-[#FFB342] font-[700]  lg:text-[18px]  mb-2">Щебень известняковый фракции 5-20 мм <br /> ГОСТ 8267-93</h5>
      <ul>
       <li>Основные характеристики данной смеси:</li>
       <li>- Марка прочности — 600</li>
       <li>- Марка морозостойкости — F100</li>
       <li> - Содержание пылевидных и глинистых частиц — 0,65%</li>
       <li>- Содержание зерен слабых пород — 4%</li>
       <li>- Содержание зерен слабых пород — 4%</li>

      </ul>
      <p>{showMore3 ? text3 : `${text3.slice(0, 0)+ "..."}`}</p>
      <button className=" mt-4 bg-white text-black w-[35%] h-[40px] flex justify-center items-center rounded hover:shadow hover:bg-[#FFB342]" onClick={() => setShowMore3(!showMore3)}>{showMore3 ? "Закрыть" : " Подробнее"}</button>
      
    </div>
  </div>
</div>

<div class="flex justify-center ">
  <div class="rounded-lg shadowLg bg-[#1C2752] text-white max-w-full" ref={refCard4} style={{
          transform: isInViewCard4 ? "none" : "translateX(-300px)",
          opacity: isInViewCard4 ? 1 : 0,
          transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}>
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src={sheben1} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-[#FFB342] font-[700]  lg:text-[18px]  mb-2">Щебень известняковый фракции 40-70 мм <br /> ГОСТ 8267-93</h5>
      <ul>
       <li>Основные характеристики данной смеси:</li>
       <li>- Марка прочности — 600</li>
       <li>- Марка морозостойкости — F100</li>
       <li> - Содержание пылевидных и глинистых частиц — 0,65%</li>
       <li>- Содержание зерен слабых пород — 4%</li>
       <li>- Содержание зерен слабых пород — 4%</li>

      </ul>
      <p>{showMore4 ? text4 : `${text4.slice(0, 0)+ "..."}`}</p>
      <button className=" mt-4 bg-white text-black w-[35%] h-[40px] flex justify-center items-center rounded hover:shadow hover:bg-[#FFB342]" onClick={() => setShowMore4(!showMore4)}>{showMore4 ? "Закрыть" : " Подробнее"}</button>
      
    </div>
  </div>
</div>



<div class="flex justify-center">
  <div class="rounded-lg shadowLg bg-[#1C2752] text-white max-w-full" ref={refCard5} style={{
          transform: isInViewCard5 ? "none" : "translateX(+600px)",
          opacity: isInViewCard5 ? 1 : 0,
          transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}>
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src={sheben1} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-[#FFB342] font-[700] lg:text-[18px]  mb-2">Щебень известняковый фракции 40-70 мм <br /> ГОСТ 8267-93</h5>
      <ul>
       <li>Основные характеристики данной смеси:</li>
       <li>- Марка прочности — 600</li>
       <li>- Марка морозостойкости — F100</li>
       <li> - Содержание пылевидных и глинистых частиц — 0,65%</li>
       <li>- Содержание зерен слабых пород — 4%</li>
       <li>- Содержание зерен слабых пород — 4%</li>

      </ul>
      <p>{showMore5 ? text5 : `${text5.slice(0, 0)+ "..."}`}</p>
      <button className=" mt-4 bg-white text-black w-[35%] h-[40px] flex justify-center items-center rounded hover:shadow hover:bg-[#FFB342]" onClick={() => setShowMore5(!showMore5)}>{showMore5 ? "Закрыть" : " Подробнее"}</button>
      
    </div>
  </div>
</div>



      
     </div>
    </div>
  )
}

export default Products