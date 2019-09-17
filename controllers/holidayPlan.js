require('dotenv').config();
const router = require('express').Router();
const axios = require('axios');

router.get('/', (req, res) => {
 
    axios.get(`https://calendarific.com/api/v2/holidays?api_key=${process.env.apiKey}&country=US&year=2019`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => {
        console.log(err);
    })
})

router.post('/', (req, res) => {
  res.send('hello');
})

module.exports = router;