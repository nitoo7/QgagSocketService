var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket){
   console.log('connection');

  socket.on('CH01', function (from, msg) {
    console.log('MSG', from, ' saying ', msg);
    io.emit('CH01', { for: 'everyone', msg: msg });
  });


});

http.listen(process.env.PORT || 3000, function () {
  console.log('listening on *:3000');
});