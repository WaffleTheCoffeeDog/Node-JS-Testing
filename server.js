// ?????
const helmet = require("helmet");
const mongoose = require("mongoose");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
module.exports = { io };
const fs = require("fs");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");

//  :)

const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
