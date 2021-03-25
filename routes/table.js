var express = require('express');
var router = express.Router();
var sql = require('mysql'); //

var sqlConfig = {
    host: 'localhost',
    port: '32000',
    user: 'root',
    password: 'root',
    database: 'database'
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    const connection = sql.createConnection(sqlConfig);
    connection.connect()

    connection.query('SELECT * FROM random_people', function (err, rows, fields){
        if(err) throw err;
        res.json({"data": rows});
    })

    connection.end()
});


module.exports = router;
