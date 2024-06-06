// import React, { useState } from 'react';
// import axios from 'axios';

// const CreatePost = () => {
//   const [author, setAuthor] = useState(''); // Added author state
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handlePost = (e) => {
//     e.preventDefault();

//     const post = { author, title, description };
//     axios
//       .post('http://localhost:3000/createpost', e)
//       .then((res) => {
//         if (res.status === 200) alert('Student succesfully created!');
//         else Promise.reject();
//       })
//       .catch((err) => alert('Something went wrong'));
//   };

//   return (
//     <div className='flex flex-col items-center'>
//       <form onSubmit={handlePost}>
//         <div className='w-[36.375rem] h-[41rem] pt-8 pb-10 px-8 bg-[#FEF7FF] rounded-xl border border-[#CAC4D0] my-[1rem]'>
//           <input
//             type='text'
//             value={author}
//             className='w-full mb-6 px-4 py-4 h-14 bg-[#E6E0E9] text-[#49454F]'
//             placeholder='Author' // Added input for author
//             onChange={(e) => setAuthor(e.target.value)}
//           />
//           <input
//             type='text'
//             className='w-full mb-6 px-4 py-4 h-14 bg-[#E6E0E9] text-[#49454F]'
//             value={title}
//             placeholder='Title'
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <textarea
//             name='description'
//             id='description'
//             value={description}
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
import axios from 'axios';

const CreatePost = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = (e) => {
    e.preventDefault();

    const post = { author, title, description };
    axios
      .post('http://localhost:3000/createpost', post) // Corrected here
      .then((res) => {
        if (res.status === 201) alert('Post successfully created!');
        else Promise.reject();
      })
      .catch((err) => alert('Something went wrong'));
  };

  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={handlePost}>
        <div className='w-[36.375rem] h-[41rem] pt-8 pb-10 px-8 bg-[#FEF7FF] rounded-xl border border-[#CAC4D0] my-[1rem]'>
          <input
            type='text'
            value={author}
            className='w-full mb-6 px-4 py-4 h-14 bg-[#E6E0E9] text-[#49454F]'
            placeholder='Author'
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type='text'
            className='w-full mb-6 px-4 py-4 h-14 bg-[#E6E0E9] text-[#49454F]'
            value={title}
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name='description'
            id='description'
            value={description}
            className='w-full h-[29.8125rem] bg-[#E6E0E9] px-4 py-4 text-[#49454F]'
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
