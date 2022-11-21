import React from 'react'
import prod1 from '../../assets/prod1.jpg'
import prod2 from '../../assets/prod2.jpg'
import prod3 from '../../assets/prod3.jpeg'
import prod4 from '../../assets/prod4.jpeg'
import prod7 from '../../assets/prod7.jpeg'
import prod5 from '../../assets/prod5.jpeg'
import moyka from '../../assets/moyka.jpeg'
import shema from '../../assets/shema.jpeg'
import history from '../../assets/history.jpg'
import { useRef } from "react";
import { useInView } from "framer-motion";
import AboutCompany from '../AboutCompany'

function Production() {
 const ref = useRef(null);
 const ref2 = useRef(null);
 const isInView = useInView(ref, { once: true });
 const isInView2 = useInView(ref2, { once: true });
  return (
    <div className='mt-24 mb-24'>
          <p className="  text-[#1C2752] w-[60%] h-[80px] bg-[#F4F4F4]  -skew-x-12 text-[34px] rounded shadow-2xl flex  mx-auto    justify-center items-center  mb-12  " >  <span className="pl-2 skew-x-6 ">О предприятии</span></p>
          <p className='w-[100%] mx-auto  text-center   md:w-[100%] lg:w-[90%] xl:w-[50%]  mb-8 md:text-[16px] xl:text-[22px]  mx-auto text-[#1C2752] font-[600]'>Основной продукцией карьера является щебень разных фракций, минеральная подкормка для птиц, технологический известняк для сахарной промышленности.    Большая часть продукции используется для строительства и ремонта автодорог в Московской области отправляемая железнодорожным вагонами. Хорошие связи у карьера с Рязанским заводом ЖБИ-2, ООО «Елецжелезобетон», ОАО «Елецкое ДСУ-3», Елецким сахарным заводом.</p>
         
          <div id="carouselExampleCaptions" class="carousel slide relative md:w-1/2  rounded-lg mx-auto shadowLg" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden rounded-lg">
    <div class="carousel-item active relative float-left w-full rounded-lg">
      <img
        src={prod1}
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
      
      </div>
    </div>
    <div class="carousel-item relative float-left w-full rounded-lg">
      <img
        src={prod2}
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        
        
      </div>
    </div>
    <div class="carousel-item relative float-left w-full rounded-lg">
      <img
        src={prod3}
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center rounded-lg">
        
        
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev   absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon bg-gray-800   inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next  absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-gray-800   bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden ">Next</span>
  </button>
</div>



    <AboutCompany />
    
   
    <div className='mt-12 w-[90%] skew-x-12 lg:flex lg:justify-between bg-[#1C2752]  items-center mx-auto p-20 mb-12 ' ref={ref2}>

    <div className='w-full  lg:w-[40%]   font-[600] text-white  ' style={{
          transform: isInView2 ? "none" : "translateX(-200px)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} > <p className='text-[14px] lg:text-[20px] -skew-x-12'>Наибольшее развитие «Лавский карьер» получил в конце 80-х годов когда, было получено новое современное горное и транспортное оборудование, позволившее значительно увеличить выпуск необходимой для ремонта дорог продукции. За это время на дробильно-сортировочной фабрике (ДСФ) был смонтирован узел с корытными мойками К-14  для промывки щебня, позволивший улучшить качество щебня и  переработать большое количество ранее складированных отходов и получить дополнительно несколько миллионов м3 щебня. </p></div>

     <div className=''> <img src={moyka} alt="" className=' mt-4 w-[320px] md:w-[480px] lg:w-[700px]  -skew-x-12 shadowc   rounded' /></div>


    </div>
    
    <div className='w-[90%] lg:h-[600px] -skew-x-12 lg:flex lg:justify-around items-center p-20 rounded shadowLg mx-auto mb-24 bg-gray-100 ' ref={ref}>

     <div> <img src={prod7} alt="" className='shadowLg lg:w-[80%]    rounded  skew-x-6 ' /></div>
     <div className='   text-[#1C2752] lg:w-1/2 font-[600] ' style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}> <p className=' mt-4 md:mt-8 md:text-[16px] lg:text-[20px] skew-x-12'> За это же время изменились и бытовые условия для работающих. Были построены  АБК (административно-бытовой корпус) с гаражом для технологического автотранспорта, столовой, спортзалом, сауной с бассейном, медпунктом, стоматологическим кабинетом, котельная, диспетчерская, депо. За это время из каменоломни в которой весь труд был ручным, получился современный карьер по производству щебня для строительства, где весь труд механизирован. Сейчас на предприятии применяются  экскаваторы ЭКГ-5А, мощные автосамосвалы БелАЗ -7540,  и другая высокопроизводительная техника. Для бурения скважин применяются буровые станки СБР-160.</p></div>

    </div>


   <div>
   <p className="  text-[#1C2752] w-[60%] h-[80px] bg-[#F4F4F4]  -skew-x-12 text-[34px] rounded shadow-2xl flex  mx-auto    justify-center items-center  mb-12  " >  <span className="pl-2 skew-x-6 "> Схема проезда</span></p>
        <img src={shema} alt="" className='w-[42%] mx-auto rounded-lg shadowLg' />

   </div>






    
    </div>
  )
}

export default Production