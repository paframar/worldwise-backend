const jsonServer = require('json-server');
const express = require('express');
const app = express();
const router = jsonServer.router('cities.json');
const cors = require('cors');

app.use(cors({
    origin: 'https://paframar-worldwise.netlify.app'
  }));
app.use('/api', router);

const PORT = 9000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
