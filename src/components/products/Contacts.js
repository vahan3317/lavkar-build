import React from 'react'

function Contacts() {
  return (
    <div className='mt-24 mb-24'>
       <p className="flex text-[#1C2752] w-1/2 h-[80px] bg-[#F4F4F4]  text-[34px] rounded shadow-2xl  mx-auto    justify-center items-center  mb-12  " >  <span className="pl-2 ">Контакты</span></p>
      <div className='w-[78%]  mx-auto'>
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-[20px] font-[600]">
  <div className='text-center w-full bg-[#1C2752] text-white rounded-xl shadow'>
   <p className='text-[#FFB342] text-[28px] pt-4 underline'>Адрес</p>
   <p className='mt-8 mb-2 md:text-[18px]'>399780 Липецкая область <br /> г. Елец <br /> ул. 1-я Речная 34</p>
  </div>
  <div className='text-center w-full bg-[#1C2752] text-white rounded-xl shadow '>
   <p className='text-[#FFB342] text-[26px] pt-4 underline'>Телефоны</p>
   <p className='mt-8 md:text-[18px]'> 8 (474-67) 94-516 - отдел сбыта</p>
   <p>8 (474-67) 94-514 - приемная</p>
   <p className='mb-2 md:text-[18px]'>Телефон:8 (474-67) 94-521 - бухгалтерия</p>
   </div>
  <div className='text-center w-full bg-[#1C2752] text-white rounded-xl shadow'>
   <p className='text-[#FFB342] text-[26px] pt-4 underline'>Электронная почта </p>
   <p className='mt-8 mb-2 md:text-[18px]'><a href="mailTo:lavcar@yelets.lipetsk.ru"> lavcar@yelets.lipetsk.ru </a></p>
  </div>
  <div className='text-center w-full bg-[#1C2752] text-white rounded-xl shadow'>
   <p className='text-[#FFB342]  text-[26px] pt-4 underline'>Реквизиты:</p>
   <p className='mt-8 md:text-[18px] md:text-[18px] '>ИНН/КПП : 4821012490/482101001</p>
   <p className='md:text-[18px]'>р/с : 40702810835000006082</p>
   <p className='md:text-[18px]'>к/с : 30101810800000000604</p>
   <p className='md:text-[18px]'>БИК : 044206604  </p>
   <p className='md:text-[18px]'>Отделение: №8593</p>
   <p className='mb-2 md:text-[18px]'>ПАО Сбербанка России г. Липецк</p>
  </div>
  <div className='text-center w-full bg-[#1C2752] text-white rounded-xl shadow'>
   <p className='text-[#FFB342] text-[26px] pt-4 underline'>Директор</p>
   <p className='md:text-[22px]'>Зуйков Эдуард Викторович </p>
   <p className='mb-2 md:text-[18px]'>Телефон: 8 (474-67) 94-514</p>
  </div>
  <div className='text-center w-full bg-[#1C2752] text-white rounded-xl shadow'>
   <p className='text-[#FFB342] text-[26px] pt-4 underline'>Главный инженер</p>
   <p className='md:text-[22px]'>Солодков Сергей Викторович </p>
   <p className='mb-2 md:text-[18px]'>Телефон: 8 (474-67) 94-521</p>
  </div>
  <div className='text-center w-full bg-[#1C2752] text-white rounded-xl shadow'>
   <p className='text-[#FFB342] text-[26px] pt-4 underline'>Начальник отдела сбыта</p>
   <p className='md:text-[22px]'>Лазарев Андрей Сергеевич</p>
   <p className='md:text-[18px]'>Телефон: 8 (474-67) 94-516</p>
   <p className='md:text-[18px]'> Телефон:8 (905) 044-24-21</p>
   <p className='mb-2 md:text-[18px]'>Почта: <a href="mailTo:andrey.lavkar@mail.ru"> andrey.lavkar@mail.ru </a></p>
  </div>
  <div className='text-center w-full bg-[#1C2752] text-white rounded-xl shadow'>
   <p className='text-[#FFB342] text-[26px] pt-4 underline'>Главный бухгалтер</p>
   <p className='md:text-[22px]'>Федюшина Наталья Алексеевна</p>
   <p className='mb-2 md:text-[18px]'>Телефон: 8 (474-67) 94-523</p>
  </div>
</div>
      </div>
    </div>
  )
}

export default Contacts