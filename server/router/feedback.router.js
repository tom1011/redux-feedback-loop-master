const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    // Find all orders and return them
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedback', error);
        res.sendStatus(500);  
    });
})

