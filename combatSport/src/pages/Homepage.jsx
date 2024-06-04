import React from 'react';
import Navbar from '@/components/Navbar';
import uPostIcon from '../assets/homapageUserIcon.png';
import Post from '@/components/Post';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const createPost = () => {
    navigate('/createpost');
  };

  return (
    <div className='flex flex-col items-center'>
      <Navbar />

      <div className='flex flex-col items-center ml-[11.5rem]'>
        <div className='mt-6 flex'>
          <img
            src={uPostIcon}
            alt=''
            className='h-14 w-14 rounded-[3.5rem] mr-12 border'
          />
          <input
            type='button'
            placeholder='Create a post'
            value={'Create a post'}
            className='h-[3.5rem] w-[25.625rem] bg-[#ECE6F0] py-4 pl-14 rounded-[2rem] text-left text-[#d3c2eb]'
            onClick={createPost}
          />
        </div>
        <Post />
      </div>
    </div>
  );
};

export default Homepage;
