const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const UsersService = require('./UsersService');
const usersService = new UsersService();

app.use(express.statis(`${__dirname}/public`));

app.get('/', (req, res) =>{
  res.sendFile(`${__dirname}/index.html`);
});

io.on('connection', (socket) =>{
  //miejsce dla funkcji, które zostaną wykoanane po podłaczeniu klienta
  socket.on('join', (name) =>{
    userService.addUser({
      id: socket.id,
      name
    });
    io.emit('update', {
      users: userService.getAllUsers()
    });
  });

  socket.on('disconnect', ()=>{
    userService.removeUser(socket.id);
    socket.broadcast.emit('update', {
      users: usersService.gaeAllUsers()
    });
  });

  socket.on('message', (message) => {
    const {name}=usersService.getUserById(socket.id);
    socket.broadcast.emit('message', {
      text: message.text,
      from: name
    });
  });

});

server.listen(3000, () => {
  console.log('listening om *:3000');
});