
const router = require('express').Router();
const db = require('../models');


router.get('/', ((req, res) => {
     db.User.findOne({user: req.user})
     .then(response => {
       res.send(response);
     })
     .catch(err => {
       console.log(err);
     })
    
}))

module.exports = router;