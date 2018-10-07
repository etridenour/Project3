var express = require('express');
var app = express();
var bodyParser = require('body-parser')
db = require('./models');


var drumTable = db.drum.findAll()
    .then((results) => {
        return results;
    })

var playListTable = db.playlist.findAll()
    .then((results) => {
        return results
    })

var exerciseTable = db.drum.findAll()
    .then((results) => {
        return results
    })


app.get('/dbDrum', function(req, res) {

    res.json({
        data: drumTable,
        playList: playListTable,
        exercises: exerciseTable
    })

})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



app.post('/update', function(req,res){

    db.playlist.destroy({
        where: {},
        truncate: true
    })
    .then(() => {
        const playList = req.body.data;
        db.playlist.bulkCreate(playList);
    })
})

var port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
