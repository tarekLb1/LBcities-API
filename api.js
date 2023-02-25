const express = require('express');
const app = express();
const cors = require('cors')
const LBcities = require('./LBcities.json');
const PORT = process.env.PORT || 3030;

 app.use(cors({
   origin: 'https://github.com/tarekLb1/All-LBcities-Info-Weather-.git'
 }));

app.get('/LBcities', function (req, res) {
  res.send(LBcities)
})


app.listen(PORT)