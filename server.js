const jsonServer = require('json-server');
const express = require('express');
const app = express();
const router = jsonServer.router('cities.json');
const cors = require('cors');

app.use(cors()); 
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
