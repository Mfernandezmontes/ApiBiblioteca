/**
 * Created by adminlocal on 17/07/15.
 */
var mongoose = require('mongoose');

//Nos conectamos a la base de datos
mongoose.connect('mongodb://localhost/Library', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});


//Exportamos el modelo Units
exports.Books = require('./books');