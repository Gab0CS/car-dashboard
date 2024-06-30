import React from 'react';
import Image from 'next/image';
import logo from '../../public/FFicon.png'
import support from '../../public/Vector.png'
import { IoIosArrowDown } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='w-100 flex justify-between h-16 items-center' style={{ background: '#404041', color: '#fff'}}>
      <div className='flex-start px-[30px] flex items-center'>
        <Image 
            src={logo}
            width={40}
            height={40}
            className='mx-2'
            alt='Fountain forward logo'
        />
        <h1 className='text-lg'>
          Admin Console
        </h1>
        <p className='mx-2.5 text-xs px-4 py-1 rounded-3xl'
        style={{background: '#ffffff', color: '#000000'}}>
          ADMIN VIEW
        </p>
      </div>
      <div 
      className='flex px-[30px] items-center'>
        <div className=''>

        </div>
        <Image 
          src={support}
          width={20}
          height={20}
          alt='support vector icon'
          className='mx-2'
        />

        <p>Support</p>

        <div style={{ background: '#242424'}}
          className='mx-4 py-3 rounded-md flex items-center justify-items-end'>
          <FaCircle 
          className='mx-3'
          size={30}
          style={{ color: '#D9D9D9' }}
          />
          Jane
          <IoIosArrowDown 
          className='mt-1 mx-3' 
          style={{ color: 'orange' }}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
