
const router = require('express').Router();
const db = require('../models');

router.get('/', ((req, res) => {
        db.User.find()
        .then((user) => {
            res.send(user)})
        .catch(err => {
            console.log(err);
        })
    
}))

module.exports = router;