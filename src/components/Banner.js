import React from 'react';

import Image from '../assets/img/banner2.jpg';
import Search from '../components/Search';

const Banner = () => {
  return (
    <div className='bg-violet-400'>
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 mt-10'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-light-700'>Rent</span> and enjoy your live.
          </h1>
          <p className='max-w-[480px] mb-8'>
            We make your live easy.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' width ="500px" margin = "10px" className= "rounded-tl-[90px] rounded-br-[90px] mt-3"/>
        </div>
      </div>
      <Search />
    </section>
    </div>
  );
};

export default Banner;
