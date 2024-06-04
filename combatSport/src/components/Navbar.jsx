import React from 'react';
import logoImage from '../assets/logoTransparent.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';

const Navbar = () => {
  return (
    <div className='w-[89rem] h-[4.5rem] flex items-center justify-between border-b-2 border-[#CAC4D0] mx-auto'>
      <div className='flex items-center'>
        <img src={logoImage} className='h-[4.5rem] w-[4.5rem]' />
        <h1 className='text-[2rem] font-bold text-[#49454F]'>
          Peace in Violence
        </h1>
      </div>

      <div>
        <input
          type='search'
          name='search'
          placeholder='Search post'
          className='h-[3.5rem] w-[29rem] bg-[#ECE6F0] py-4 pl-14 rounded-[2rem] text-[#49454F]'
        />
      </div>

      <div className='mr-12'>
        <NotificationsNoneIcon className='text-[#49454F] text-[2rem]' />
        <PersonOutlineSharpIcon className='text-[#49454F] text-[2rem]' />
      </div>
    </div>
  );
};

export default Navbar;
