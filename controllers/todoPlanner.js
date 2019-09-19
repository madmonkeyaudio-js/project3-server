const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
    res.send('hello friend')
})

router.post('/', (req, res) => {
    res.send('Did you just try to post me you silly')
})

module.exports = router;
