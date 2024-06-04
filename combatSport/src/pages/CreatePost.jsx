// import React from 'react';
// import { useState } from 'react';

// const CreatePost = () => {
//   const handlepost = async (e) => {
//     e.preventDefault();

//     const post = { author, title, description };

//     await fetch('http://localhost:3000/api/post', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(post),
//     });
//   };

//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   return (
//     <div className='flex flex-col items-center'>
//       <form onSubmit={handlepost}>
//         <div className='w-[36.375rem] h-[41rem] pt-8 pb-10 px-8 bg-[#FEF7FF] rounded-xl border border-[#CAC4D0] my-[1rem]'>
//           <input
//             type='text'
//             className='w-full mb-6 px-4 py-4 h-14 bg-[#E6E0E9] text-[#49454F]'
//             placeholder='Title'
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <textarea
//             name='description'
//             id='description'
//             className='w-full h-[29.8125rem] bg-[#E6E0E9] px-4 py-4 text-white'
//             placeholder='Description'
//             onChange={(e) => setDescription(e.target.value)}
//           ></textarea>
//           <button
//             type='submit'
//             className='border-[.0625rem] h-10 bg-[#18181B] text-white px-[1rem] py-[.5rem] rounded-[.5rem] text-sm font-medium mt-2'
//           >
//             Post
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;

import React, { useState } from 'react';

const CreatePost = () => {
  const [author, setAuthor] = useState(''); // Added author state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = async (e) => {
    e.preventDefault();

    const post = { author, title, description };

    await fetch('http://localhost:3000/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
  };

  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={handlePost}>
        <div className='w-[36.375rem] h-[41rem] pt-8 pb-10 px-8 bg-[#FEF7FF] rounded-xl border border-[#CAC4D0] my-[1rem]'>
          <input
            type='text'
            className='w-full mb-6 px-4 py-4 h-14 bg-[#E6E0E9] text-[#49454F]'
            placeholder='Author' // Added input for author
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type='text'
            className='w-full mb-6 px-4 py-4 h-14 bg-[#E6E0E9] text-[#49454F]'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name='description'
            id='description'
            className='w-full h-[29.8125rem] bg-[#E6E0E9] px-4 py-4 text-white'
            placeholder='Description'
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            type='submit'
            className='border-[.0625rem] h-10 bg-[#18181B] text-white px-[1rem] py-[.5rem] rounded-[.5rem] text-sm font-medium mt-2'
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
