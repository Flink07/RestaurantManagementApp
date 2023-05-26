require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

require('./config/mongoose.config');

app.use(cors(), express.json(), express.urlencoded({ extend: true }));
require('./routes/foods.routes')(app);

app.listen(port, () => console.log('Express server fired up on port', port));
