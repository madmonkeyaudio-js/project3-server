const router = require('express').Router();
const db = require('../models');


//GET ROUTE
router.get('/', ((req, res) => {

    db.User.findOne({
        _id: req.user._id
      })
      .then(user => {
       db.Holiday.find({
         user: req.user._id
       })
       .then(holidays => {
         db.Todo.find({
          user: req.user._id
         })
         .then(todos => { 

          let userCopy = {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            profileUrl: user.profileUrl,
            holidays: holidays,
            todos
          }  
          res.send(userCopy)
         })
       
       })
       .catch(err => {
         console.log(err);
     })
   })
}))

//POST ROUTE
router.post('/', (req, res) => {
  console.log(req.body);
    db.Todo.create({
      holiday: req.body.holidayId,
      user: req.user._id,
      todoItem: req.body.item
    })
    .then(todo => {
      res.send(todo);
    }) // end todo then
    .catch(err => {
      res.send(err);
    })
  })

    



module.exports = router;
