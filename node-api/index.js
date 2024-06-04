// const express = require('express');
// const app = express();
// const PORT = 8080;

// app.use(express.json());

// app.get('/post', (req, res) => {
//   res.status(200).send({
//     title: 'My first Post',
//     description: 'Why is your API not working? Ohh it is resting🤣',
//   });
// });

// app.post('/post/:uname', (req, res) => {
//   const { uname } = req.params;
//   const { mypost } = req.body;

//   if (!mypost) {
//     res.status(418).send({ message: 'You need info in your post' });
//   }
//   res.send({ feeback: `This is your post ${mypost} user ${uname}` });
// });

// app.listen(PORT, () =>
//   console.log(`Your API is available here: http://localhost:${PORT}`)
// );
