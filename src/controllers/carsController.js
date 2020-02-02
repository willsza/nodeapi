const express = require('express');

const Car = require('../models/car');

const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        const car = await Car.create(req.body);

        return res.send({ car });
    } catch(err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

module.exports = app => app.use('/cars', router);