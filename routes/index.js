var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController')



//GET all
router.get('/', booksController.all);
//GET byId
router.get('/:id', booksController.byId);
//POST
router.post('/upload', booksController.upload)
//PUT
router.put('/:id', booksController.update);
//DELETE
router.delete('/:id', booksController.erase);
//GET
router.get('/download/:id', booksController.donwload);

module.exports = router;
