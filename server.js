const helmet = require("helmet");
const mongoose = require("mongoose");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");

const path = require('path');

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
    console.log('a user connected');
    socket.on('sendAlert', () => {
        socket.emit('receiveAlert', 'Alert received!');
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
