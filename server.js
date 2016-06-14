var express = require('express');
var app = express();
var calcRouter = require(__dirname + '/routes/calculator_routes');

app.use('/api', calcRouter);

app.use(express.static(__dirname + '/build'));

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('server running and listening on port ' + port);
});
