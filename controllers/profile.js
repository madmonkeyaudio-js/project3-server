
const router = require('express').Router();
const db = require('../models');

router.get('/', ((req, res) => {
    db.profile.find()
    .then(results => {
        res.send(results)})
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;