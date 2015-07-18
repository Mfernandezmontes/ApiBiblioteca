/**
 * Created by adminlocal on 17/07/15.
 */
var mongoose = require('mongoose');
Schema = mongoose.Schema;

//Esquema de la coleccion
var booksShema = new Schema({
    name :      {type : String },
    author :    {type : String } ,
    category :  {type : Array  } ,
    pub_year :  {type : Number },
    genere :    {type : String } ,
    pages :     {type : Number } ,
    createdAt : {type : Date , default: Date.now  },
    updateaAT:  {type : Date , default: Date.now },
    path:       {type : String}
});


/*

{
    "name" : "The Lightning Thief",
    "author" : "Rick Riordan",
    "category" : ["book","hardcover"],
    "pub_year" : 1234
    "genere" : "fantasy",
    "pages" : 384,
    "createdAt" : timestamo
    "updateaAT"
    "path": "c:/mypc/..."
}

*/

module.exports = mongoose.model('books', booksShema);