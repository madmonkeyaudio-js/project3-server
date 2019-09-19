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
           console.log('These are my todos!', todos)
          todos.forEach(todo => {
            let hId = todo.holiday
            let idx = holidays.findIndex(h => {
              return h._id === hId
            })
            holidays[idx].todos = [];
            holidays[idx].todos.push(todo);
          })
          let userCopy = {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            profileUrl: user.profileUrl,
            holidays: holidays,
            //todos
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

  
router.delete('/:id', (req, res) => {
  
  db.Holiday.findByIdAndDelete({
    _id: req.params.id
  })
  .then(() => {
    console.log('deleted');
    res.send({message: 'delete successful'})
  })
  .catch(err => {
    console.log(err)
  })

})



module.exports = router;
