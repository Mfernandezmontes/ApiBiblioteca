var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var methodOverride = require('method-override');
var multer = require('multer');

var app = express();


// uncomment after placing your favicon in /public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//middleware post con multipart/form-data
app.use(multer({
    dest: '../BookLibrary',
    limits: {
        fieldNameSize: 500,
        files: 2,
        fields: 5
    },
    rename: function (fieldname, filename) {
        return fieldname + filename + Date.now();
    },
    onFileUploadStart: function (file) {
        console.log('Upload starting for filename: ' + file.originalname);
    },
    onFileUploadData: function (file, data) {
        console.log(data.length + ' of ' + file.fieldname + ' arrived')
    },
    onParseStart: function () {
        console.log('Form parsing started at: ', new Date())
    },
    onParseEnd: function (req, next) {
        console.log('Form parsing completed at: ', new Date());
        next();
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
    },
    onFileSizeLimit: function (file) {
        console.log('Failed: ', file.originalname)
        fs.unlink('./' + file.path) // delete the partially written file
    },
    onFilesLimit: function () {
        console.log('Crossed file limit!')
    },
    onFieldsLimit: function () {
        console.log('Crossed fields limit!')
    },
    onPartsLimit: function () {
        console.log('Crossed parts limit!')
    },
    onError: function(error, next) {
        console.log("Error occurred while uploading the file!!");
        next(error);
    }
}));


app.use('/api', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    .send('error', {
      message: err.message,
      error: err
    });
  });
}


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .send('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
