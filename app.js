var express = require('express');
var app = express();

app.get('/test', function(req, res) {

    res.json({data: 'the shiznit'})

})


app.listen(3001);