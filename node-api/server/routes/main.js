const express = require('express');
const router = express.Router();
const model = require('../models/post');
// const users = require('../models/user');

//Routes
router.get('', (req, res) => {
  res.send('Hello World');
});

// router.post('', async (req, res) => {
//   try {
//     const insertdata = await model.insertMany([
//       {
//         userName: '#user355',
//         title: 'My first post',
//         desc: "I'm excited this is a trial code",
//       },
//       {
//         userName: '#user355',
//         title: 'My first post',
//         desc: "I'm excited this is a trial code",
//       },
//       {
//         userName: '#user355',
//         title: 'My first post',
//         desc: "I'm excited this is a trial code",
//       },
//       {
//         userName: '#user355',
//         title: 'My first post',
//         desc: "I'm excited this is a trial code",
//       },
//     ]);
//     res.status(201).json({
//       message: 'Your database has been stored on mongo',
//       data: insertdata,
//     });
//   } catch (error) {
//     console.log(`Error storing Database: ${error}`);
//     res.status(500).send({ message: 'Error storing Database', error });
//   }
// });

// router.post((/api/login), (req, res)=> {
//   res.json({"message": "Your form has been submitted"})
// })

module.exports = router;
