const jsonServer = require('json-server');
const express = require('express');
const app = express();
const cors = require('cors');
const router = jsonServer.router('cities.json');

app.use(cors());
app.use('/', router);

app.listen(process.env.PORT || 3000, () => console.log(`Server is running on port ${process.env.PORT}`));
