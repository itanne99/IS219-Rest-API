var express = require('express');
var router = express.Router();
var mysql = require('../db/connectDB')

/* GET users listing. */
router.get('/', function(req, res, next) {

    mysql.query('SELECT * FROM random_people', function (err, rows, fields){
        if(err) throw err;
        res.json({"data": rows});
    })

    mysql.end()
});


module.exports = router;
