
const router = require('express').Router();
const db = require('../models');

router.get('/', ((req, res) => {
  
     db.User.findOne({
       _id: req.user._id
     })
     .then(user => {
      db.Holiday.find({
        user: req.user._id
      })
      .then(holiday => {
        user.holidays = holiday
        console.log(user)
        res.json(user);
      })
      .catch(err => {
        console.log(err);
    })
  })
}))

router.post('/', (req, res) => {
  console.log(req.body.result)
  res.send({message: 'it worked foo'})
  //db.User.findOne({_id: req.user._id})
  // .then(user => {
  //   if (user){
  //     db.Todo.create({item: req.body.name})
  //     .then(res => {
  //       res.send('hello, you just saved an item to the todo database')
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  //   }
  // })
  
  
})

module.exports = router;