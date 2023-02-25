const express = require('express');
const app = express();
const cors = require('cors')
const LBcities = require('./LBcities.json');


app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

app.get('/LBcities', function (req, res) {
  res.send(LBcities)
})


app.listen(3000)