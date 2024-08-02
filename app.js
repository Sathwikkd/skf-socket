const { createServer } = require('node:http');
const { Server } = require('socket.io');

const server = createServer();
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on("sensor/tmp",(message)=>{
    socket.emit("sensor/tmp",message);
  })
});

server.listen(4000, () => {
  console.log('server running at http://localhost:3000');
});