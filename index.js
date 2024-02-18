const express = require('express')
const http = require('http')
const app = express();
const cors = require('cors');

const port = process.env.PORT || 7000;

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

app.get('/', async (req,res)=>{
    // res.sendFile('index.html');
    res.status(200).send('hello anuj')
})

server.listen(port,()=>{
    console.log('server listening on 7000')
})
