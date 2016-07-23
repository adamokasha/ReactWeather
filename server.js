var express = require('express');

// Create our App
var app = express();

// Tell which folder to serve
app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Express server is up on port 3000')
});
