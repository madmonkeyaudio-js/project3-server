require('dotenv').config();
const router = require('express').Router();
const axios = require('axios');
const db = require('../models');

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
   console.log(req.user._id);
  //db.User.findOne({_id: req.user._id})
  console.log(req.body);
  
    db.Holiday.create({
      name: req.body.name,
      place: req.body.place,
      date: req.body.date,
      user: req.user._id,
      description: req.body.selectedHoliday.description
    })
    .then(newHoliday => {
      res.send(newHoliday);
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router;