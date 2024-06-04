const express = require('express');
const router = express.Router();
const model = require('../models/post');
// const users = require('../models/user');

//Routes
router.get('', (req, res) => {
  res.send('Hello World');
});

router.post('/api/post', async (req, res) => {
  try {
    const { author, title, description } = req.body;

    const newPost = {
      userName: author,
      title: title,
      description: description,
    };

    const insertdata = await model.insertMany([newPost]);

    res.status(201).json({
      message: 'Your database has been stored on mongo',
      data: insertdata,
    });
  } catch (error) {
    console.log(`Error storing Database: ${error}`);
    res.status(500).send({ message: 'Error storing Database', error });
  }
});

module.exports = router;
