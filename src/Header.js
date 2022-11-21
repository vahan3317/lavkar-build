import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {Link} from 'react-router-dom'
import Logo from './assets/IMAGE.jpg'
import LogoMain from './assets/logo.gif'
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
     <div className="md:w-full bg-[#F2F2F2] md:mx-auto  bgs  md:mb-2">
     <div className="md:w-[78%] md:rounded h-[229px] md:h-auto p-[21px] md:mx-auto bg-[#1C2752] text-[#FFB342]   md:flex md:justify-between ">
      <div className="text-center">
       <p className="text-[12px] md:text-[18px] md:text-auto animate-pulse">Рабочие часы:  <span className='font-[600]'> 06:00 до 20:00 </span></p>
      </div>
      <div className=" w-[40%] h-[36px] flex justify-center items-center mx-auto mt-12 md:mt-0  ">
       <img src={LogoMain} alt="" className=" lg:w-[40%]   rounded mb-2 shadowL  " />
      </div>
      <div>
      <div class="md:pl-2 flex justify-center mt-12 md:mt-0  pl-4 md:pl-0 animate-pulse ">
      <a href="#!" class="mr-6 text-gray-600">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
          class="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512">
          <path fill="#FFB342"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
          </path>
        </svg>
      </a>
      <a href="#!" class="mr-6 text-gray-600">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
          class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#FFB342"
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
          </path>
        </svg>
      </a>
      <a href="#!" class="mr-6 text-gray-600">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google"
          class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
          <path fill="#FFB342"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
          </path>
        </svg>
      </a>
      <a href="#!" class="mr-6 text-gray-600">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
          class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="#FFB342"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
          </path>
        </svg>
      </a>
      <a href="#!" class="mr-6 text-gray-600">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
          class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path fill="#FFB342"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
          </path>
        </svg>
      </a>
     
    </div>
      </div>
     </div>
     </div>
      <nav className="bg-white shadow xl:mt-2 md:mt-0   ">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16 bg-white  ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/"><img
                  className="h-8 w-8 "
                  src={Logo}
                  alt="Workflow"
                /></a>
              </div>
              <div className="hidden md:block">
              <div className='md:w-[560px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] md:flex md:justify-between p-6 md:text-[14px]  xl:text-[18px] font-[600] text-[#1C2752]'>
            <Link to={`/`} className='w-[15%] h-[40px] flex justify-center items-center hover:font-[500] hover:text-[20px] hover:text-white  hover:bg-[#1C2752] hover:border-blue-500 rounded-[4px] focus:font-[500] focus:text-[20px] focus:text-white  focus:bg-[#FFB342] focus:border-blue-500'>  Главная</Link>
            <Link to={`/продукты`} className='w-[15%] h-[40px] flex justify-center items-center hover:font-[500] hover:text-[20px] hover:text-white  hover:bg-[#1C2752] hover:border-blue-500    focus:font-[500] focus:text-[20px] focus:text-white  focus:bg-[#FFB342] focus:border-blue-500 rounded-[4px]' >  Продукция</Link>
            <Link to={`/документы`} className='w-[15%] h-[40px] flex justify-center items-center hover:font-[500] hover:text-[20px] hover:text-white  hover:bg-[#1C2752] hover:border-blue-500    focus:font-[500] focus:text-[20px] focus:text-white  focus:bg-[#FFB342] focus:border-blue-500 rounded-[4px]' >  Документы</Link>
            <Link to={`/Опредприятии`} className='w-[15%] md:w-[25%] lg:w-[15%]  h-[40px] flex justify-center items-center hover:font-[500] hover:text-[20px] hover:text-white  hover:bg-[#1C2752] hover:border-blue-500    focus:font-[500] focus:text-[20px] focus:text-white  focus:bg-[#FFB342] focus:border-blue-500 rounded-[4px]' >О предприятии </Link>
              <Link to={`/контакты`} className='w-[15%] h-[40px] flex justify-center items-center hover:font-[500] hover:text-[20px] hover:text-white  hover:bg-[#1C2752] hover:border-blue-500    focus:font-[500] focus:text-[20px] focus:text-white  focus:bg-[#FFB342] focus:border-blue-500 rounded-[4px]' >  Контакты</Link>

          </div>
             
              </div>
              <div>
          <button className='w-[180px] cursor-help md:w-[140px] xl:w-[232px] h-[48px] bg-[#1C2752]  text-[#F4F4F4]  rounded-[8px] hover:shadow-xl hover:w-[200px] hover:bg-[#FFB342] hover:text-black hover:transition-[200px] ' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Есть Вопросы?</button>

                    <div class="offcanvas w-[400px] offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div class="offcanvas-header flex items-center justify-between p-4">
                    <h5 class="offcanvas-title mb-0  text-[24px] leading-normal font-semibold" id="offcanvasRightLabel">Напишите нам и мы скоро свяжемся с Вами</h5>
                    <button type="button" class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
                  <div class="px-6 h-full text-gray-800">
    
      <div
        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class=" mb-8"
          alt="Sample image"
        />
      
      <div class="xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form>
         

        

          <div class="mb-6">
            <input
              type="number"
              class="form-control block w-[220px] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Имя"
            />
            
          </div>
          <input
              type="text"
              class=" mb-4 form-control block w-[220px] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Телефон"
            />
         
          <div class="mb-6">
            <textarea name="" id="" cols="30" rows="10" className='bg-gray-200 shadow-lg p-4 border-2 border-solid text-[18px]' placeholder='Сообщение'></textarea>
          </div>

          <div class="flex justify-between items-center mb-6">
            <div class="form-group form-check">
              
              
            </div>
            
          </div>

          <div class="text-center lg:text-left">
            <button
              type="button"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Отправить
            </button>
            
          </div>
        </form>
      </div>
    </div>
  </div>
                  </div>
                </div>
          </div>

            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1  sm:px-3">
                <a
                  href="/"
                  className="hover:bg-gray-700 hover:text-white text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Главная
                </a>

                <a
                  href="/продукты"
                  className="hover:bg-gray-700 hover:text-white text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Продукция
                </a>

                <a
                  href="/документы"
                  className="hover:bg-gray-700 hover:text-white text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Документы
                </a>

                <a
                  href="/Опредприятии"
                  className="hover:bg-gray-700 hover:text-white text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  О предприятии
                </a>

                <a
                  href="/контакты"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-mediumhover:bg-gray-700 hover:text-white text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Контакты
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
    </div>
  );
}

export default Header;