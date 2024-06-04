require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

const connectDB = require('./server/config/db');

app.use(express.json());

app.use('/', require('./server/routes/main'));
connectDB();

app.listen(PORT, () => {
  console.log(`Your API is available at http://localhost:${PORT}`);
});
