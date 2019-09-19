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
          //  console.log('These are my todos!', todos)
          //  console.log('These are my holidays foo!', holidays)
          todos.forEach(todo => {
          //  let holidayIdx = holidays.findIndex(h => {
          //    return h._id === todo.holiday
          //  })
          //  console.log(holidayIdx)
          //  console.dir(holidays[holidayIdx])
          //  if(holidays[holidayIdx].todos === undefined){
          //   holidays[holidayIdx].todos = []
          //  };
          //  holidays[holidayIdx].todos.push(todo);
          })
          holidays.forEach(holiday => {
            console.log('A holidays id:', holiday.id)
          })
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
