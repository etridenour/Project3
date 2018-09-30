var express = require('express');
var app = express();
db = require('./models');

var drumTable = db.drum.findAll()
    .then((results) => {
        return results;
    })


app.get('/test', function(req, res) {

    res.json({data: drumTable})

})


app.listen(3001);