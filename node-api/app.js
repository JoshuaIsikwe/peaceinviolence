require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const cors = require('cors');

const connectDB = require('./server/config/db');

app.use(express.json());
app.use(cors());

app.use('/', require('./server/routes/main'));
connectDB();

app.listen(PORT, () => {
  console.log(`Your API is available at http://localhost:${PORT}`);
});
