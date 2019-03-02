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

router.post('/', (req,res) => {
    console.log(req.body.feeling)
    console.log(req.body)
    pool.query('INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);', [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then( () => {
        res.send(201)
    }).catch(( error => {
        res.sendStatus(500);
        console.log('error in post, error: ' + error);
    }))
})

module.exports = router;