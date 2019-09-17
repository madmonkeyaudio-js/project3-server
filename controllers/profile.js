
const router = require('express').Router();
const db = require('../models');

router.get('/', ((req, res) => {
    if(user) {
        db.Holiday.find()
        .populate('user')
        .populate('todos')
        .then(results => {
            res.send(results)})
        .catch(err => {
            console.log(err);
        })
    }
}))

module.exports = router;