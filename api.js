const express = require('express');
const app = express();
const cors = require('cors')
const LBcities = require('./LBcitiesmodified.json');
const PORT = process.env.PORT || 3030;

 app.use(cors({
   origin: 'https://tareklb1.github.io'
 }));

app.get('/LBcities', function (req, res) {
  res.send(LBcities)
})


app.listen(PORT)