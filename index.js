const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./server/routes/user.routes')


mongoose.connect(process.env.PW, { useNewUrlParser: true }, { useUnifiedTopology: true });

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/client/public'))
//no puede ser
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/views/index.html')
});

// mount routes
app.use('/', userRoutes)

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
