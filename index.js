// set up express.
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://bry:abc123@ds020208.mlab.com:20208/crud123',
  { useNewUrlParser: true }
);

// set up bodyParser middleware.
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static('public'));

// define express route(s).

const router = require('./router.js');
router(app);

// start the server.
app.listen(3000, () => {
  console.log('You are listening to port 3000');
});
