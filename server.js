const jsonServer = require('json-server');
const express = require('express');
const app = express();
const cors = require('cors');
const router = jsonServer.router('cities.json');

app.use(cors());
app.use('/', router);

const PORT = 9000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
