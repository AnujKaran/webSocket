const express = require('express')
const http = require('http')
const app = express();
const cors = require('cors');
const server = http.createServer(app);

const { Server } = require("socket.io");


app.use(cors({ credentials: true, origin: "https://web-socket-sandy.vercel.app" }));

const io = new Server(server);
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile('index.html');
    // res.send('hello anuj')
})

server.listen(7000,()=>{
    console.log('server listening on 7000')
})
