var express = require('express');
var router = express.Router();
var sql = require('mysql'); //

var sqlConfig = {
    host: 'pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'xuvwzq6wygw6t2gv',
    password: 'znabbsq170mffx5r',
    database: 'hprxc6b8d6lbq5gf'
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
