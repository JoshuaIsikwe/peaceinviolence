import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Post = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(posts => setPosts(posts.data))
      .catch(err => console.log(err))
    }, []);
    console.log(posts)
      // if (!posts){
      //   return (<p>No available posts</p>)
      // }

  return (
    <div>
      {
        posts.map( post =>{
          <div className='w-[36.375rem] min-h-[20rem] bg-[#FEF7FF] rounded-xl border border-[#CAC4D0] my-[1rem]'>
            <div className='flex gap-5' ><h1>{post.title}</h1><span className='flex justify-end'>6th June 2024</span></div>
            <p>{post.description}</p>
            <span>{post._id}</span>
          </div>
        })
      }
    </div>
  );
};

export default Post;
