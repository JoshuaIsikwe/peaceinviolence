// const express = require('express');
// const router = express.Router();
// const postSchema = require('../models/post');

// // const users = require('../models/user');

// //Routes
// router.get('', (req, res) => {
//   res.send('Hello World');
// });

// router.post('/createpost', async (req, res) => {
//   try {
//     const { author, title, description } = req.body;
//     const newPost = new Post({
//       author, // Use 'author' instead of 'userName'
//       title,
//       description,
//     });

//     const savedPost = await newPost.save();
//     res.status(201).json({
//       message: 'Your post has been saved to the database',
//       data: savedPost,
//     });
//   } catch (error) {
//     console.log(`Error storing Database: ${error}`);
//     res.status(500).send({ message: 'Error storing Database', error });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const postModel = require('../models/post');

//Routes
router.get('', (req, res) => {
  res.send('Hello World');
});
router.get('/posts', (req, res)=>{
  postModel.find()
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

router.post('/createpost', async (req, res) => {
  try {
    const { author, title, description } = req.body;
    const newPost = new Post({
      author, // Use 'author' instead of 'userName'
      title,
      description,
    });

    const savedPost = await newPost.save();
    res.status(201).json({
      message: 'Your post has been saved to the database',
      data: savedPost,
    });
  } catch (error) {
    console.log(`Error storing Database: ${error}`);
    res.status(500).send({ message: 'Error storing Database', error });
  }
});

module.exports = router;
