
const router = require('express').Router();
const db = require('../models');

router.get('/', ((req, res) => {
    console.log(req.user);
     db.User.findOne({_id: req.user._id})
     .populate('todo')
     .populate('holiday')
     .then(user => {
       res.send(user);
     })
     .catch(err => {
       console.log(err);
     })
}))

router.post('/', (req, res) => {
  db.User.findOne({_id: req.user._id})
  .then(user => {
    if (user){
      db.Todo.create()
    }
  })
  
  
})

module.exports = router;