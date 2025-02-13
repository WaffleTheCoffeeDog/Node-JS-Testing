const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
   console.log('A user connected');
   socket.on('disconnect', () => {
      console.log('A user disconnected');
   });

   socket.on('sendAlert', () => {
      io.emit('receiveAlert', 'This is a universal alert!');
   });
});

server.listen(3000, () => {
   console.log('Server running on port 3000');
});
