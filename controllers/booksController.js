/**
 * Created by adminlocal on 17/07/15.
 */

var models = require('../models/models');


exports.all = function(req,res){
    models.Books.find(function(err, books) {
        if(err) res.status(500).send(err.message);;

        console.log('GET /all Books')
        res.status(200).jsonp(books);
    })
}

exports.byId = function(req,res){
    models.Books.findById( req.params.id , function(err, books) {
        if(err) res.status(500).send(err.message);;

        console.log(books)

        if(books === 0){
            res.status(404)
        } else {
            console.log('GET /units/' + req.params.id)
            res.status(200).jsonp(books)
        }
    })
}

exports.upload = function(req,res){

    console.log('POST' + req.body);



/*

    var book = new models.Books({
        name :      req.body.name,
        author :    req.body.author,
        category :  req.body.category,
        pub_year :  req.body.pub_year,
        genere :    req.body.genere,
        pages :     req.body.pages
    });

    book.save(function(err, unit) {
        if(err) return res.status(500).send(err.message);
        res.status(200).jsonp(unit);
    });
*/

}

exports.update = function(req,res){

}

exports.erase = function(req,res){

}


exports.donwload = function(req,res){

}