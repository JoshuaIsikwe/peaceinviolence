import React from 'react';
import { useState } from 'react';

const CreatePost = () => {
  const handlepost = async () => {};

  return (
    <div className='flex flex-col items-center'>
      <div className='w-[36.375rem] h-[39.3125rem] pt-8 pb-10 px-8 bg-[#FEF7FF] rounded-xl border border-[#CAC4D0] my-[1rem]'>
        <input
          type='text'
          className='w-full mb-6 px-4 py-4 h-14 bg-[#E6E0E9] text-[#49454F]'
          placeholder='Title'
        />
        <textarea
          name='description'
          id='description'
          className='w-full h-[29.8125rem] bg-[#E6E0E9] px-4 py-4 text-white'
          placeholder='Description'
        ></textarea>
        <button>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
