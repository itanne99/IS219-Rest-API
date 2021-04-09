var express = require('express');
var mysql = require('../db/connectDB');
var router = express.Router();
var getJSON = require('../db/getJSON');

/* GET home page. */
router.get('/', function(req, res, next) {
    var personList = []
    getJSON('http://localhost:3000/table', function (err, people){
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            let peopleRecord = people.data;
            peopleRecord.forEach(person => function (){
                let ppl = {
                    'first_name':person.first_name,
                    'last_name':person.last_name,
                    'email':person.email,
                    'phone':person.phone,
                    'street_address':person.street_address,
                    'city':person.city,
                    'state':person.state
                }
                personList.push(ppl);
            })
        }
    });
    res.render('viewTable', { title: 'Table View', 'personList':personList});
    mysql.end();
});

module.exports = router;
