var express = require('express')
var app = express()
var serv = require('http').Server(app)

app.get('/',function(req, res) {
  res.sendFile(__dirname + '/client/index.html')
})
app.use ('/client',express.static(__dirname + '/client'))

serv.listen(2000)
console.log('Server Started')

var io = require('socket.io')(serv,{})
io.sockets.on('connection', function(socket) {
  console.log('socket communication')

  socket.on('happy',function(data){
    console.log('happy' + data.reason)
  })
  
})
