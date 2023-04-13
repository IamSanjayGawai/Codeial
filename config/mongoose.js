const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codial_development');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting mongo db in config'))
;


db.once('open', function(){
    console.log('Connecte to Database')
});


module.exports = db;