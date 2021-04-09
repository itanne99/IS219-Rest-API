var sql = require('mysql');

function getMySQLConnection (){
    var sqlConfig = {
        host: 'pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: '3306',
        user: 'xuvwzq6wygw6t2gv',
        password: 'znabbsq170mffx5r',
        database: 'hprxc6b8d6lbq5gf'
    }

    return sql.createConnection(sqlConfig);
}

module.exports = getMySQLConnection()