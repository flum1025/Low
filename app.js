var path = require('path'),
  express = require('express'),
  serveStatic = require('serve-static'),
  wol = require('wake_on_lan'),
  app = express();

app.use(serveStatic(__dirname + '/dist'));

const MACHINES = JSON.parse(process.env.MACHINES);
const ADDRESS = process.env.ADDRESS;

app.get('/api/machines', function(req, res, next) {
  res.json(MACHINES);
});

app.get('/api/wol', function(req, res, next) {
  if (typeof req.query.mac === 'string' && req.query.mac.length > 0) {
    wol.wake(req.query.mac, {address: ADDRESS}, function(error) {
      console.log(error)
      if (error) {
        res.status(500).json({
          msg: error.message
        });
      } else {
        res.json({
          msg: 'success'
        });
      }
    });
  } else {
    res.status(400).json({
      msg: 'Request Error'
    });
  }
});

var server = app.listen(3010, function(){
  console.log('Node.js is listening to PORT:' + server.address().port);
});
