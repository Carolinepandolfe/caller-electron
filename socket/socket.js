const io = require('socket.io')(3030);
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));


io.on('connection', (socket) => {
    socket.broadcast.emit('hello', 'to all clients except sender');
    socket.to('room42').emit('hello', "to all clients in 'room42' room except sender");
});