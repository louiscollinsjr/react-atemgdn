import React from 'react';

import BigCookiePNG from '../assets/a_happy_woman_holding_cookie.png';
import SatchelPeopleWalking from '../assets/people_walking_around_the_city_shopping.png';


const AtemProjects: React.FC = () => {
  return (
    <section className=' w-full flex flex-col content-center items-center min-h-[42.5rem]   bg-zinc-50 px-12  py-48 -my-2'>
    <div className="max-w-screen-2xl">
    <p className="text-lg font-bold tracking-wide text-black uppercase p-6 md:p-0">Coders at Heart</p>
    
    <div className="grid grid-cols-1  gap-6 content-center ~mx-6/0 my-6" >
      
      
      <div className="lg:pb-24 lg:pr-24 mb-24">

      <div className="max-w-screen-xl"> 
      <h2 className="~text-5xl/7xl col-span-2 text-left font-semibold text-black tracking-tight">
        We are seriously in the business of starting new things.
      </h2>
      <p className="text-left text-2xl font-bold tracking-wide pt-8 text-gray-500">
        At Atem,<span className="text-black">innovation is at our core.</span>
        Alongside our commitment to starting new ventures, we're thrilled to
        introduce atem.Labs, our incubator for groundbreaking initiatives like 
        <span className="text-black"> Satchel</span>, our AR Advertising
        platform. Furthermore, we're excited to expand our expertise in AI,
        design, and e-commerce, driving forward our pursuit of excellence in
        every domain.
      </p></div>
      </div>
      
      <div className="">
      <img src={BigCookiePNG} alt="" className='object-cover'/>
      </div>

      <div className=" ">
      <img src={SatchelPeopleWalking} alt="" className='object-cover size-auto'/>
        <p></p>
      </div>
    
    
    </div>  
    </div>
    
    </section>
  );
};

export default AtemProjects;