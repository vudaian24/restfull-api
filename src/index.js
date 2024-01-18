const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const PORT = 3000 || process.env.PORT;
const db = require('./config/db');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());

//connect database
db.connect();

app.get('/', (req, res) => {
    res.json("success");
});

//config route
const routes = require('./routes');
app.use('/api', cors({origin: '*'}), routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});