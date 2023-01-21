const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const request = require('request');
const dotenv = require('dotenv');
dotenv.config({path:'config.env'});
const PORT = process.env.PORT 
const app = express();
const APIKEY = process.env.APIKEY

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
router.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
});
router.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.weatherstack.com/current?access_key=${APIKEY}&query=${city}`;
  request(url, function (err, response, body) {
    if(err){
      return res.render('index', {weather: null, error: 'Error, please try again'});
    }
    let weather = JSON.parse(body);
    if(weather.current == undefined){
      return res.render('index', {weather: null, error: 'error, please try again'});
    }

  let weatherText = `Its temperature = ${weather.current.temperature} degrees celcius,
   humidity = ${weather.current.humidity}HA, 
   cloud cover = ${weather.current.cloudcover}%, 
   wind_speed = ${weather.current.wind_speed} km/h,
  ${weather.current.is_day === "yes" ? 'Day time' : 'Night time'} in ${weather.location.name}, ${weather.location.country}!`;
  res.render('index', {weather: weatherText, error: null});
  });
});
app.use('/', router);
app.listen(PORT, () =>  {
  console.log(`Server is listening on http://localhost:${PORT}!`);
});

