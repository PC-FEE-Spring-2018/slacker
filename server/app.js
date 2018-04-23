const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const app = express()
const server = http.Server(app)
const io = socketio(server)

const config = require('config')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const protectedRoutes = require('./routes/protectedRoutes')
const jwt = require('express-jwt')

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send('hello world')
})

app.use('/api', authRoutes)
app.use('/api', jwt({secret: config.get('jwt-secret')}), protectedRoutes)

server.listen(config.get('port'))

let rooms = ['general']

io.on('connection', (socket) => {
  socket.on('join', roomInfo => {
    socket.join(roomInfo.room)
    socket.emit('update rooms', rooms)
  })

  socket.on('message', data => {
    console.log(data)
    const roomname = data.roomname || 'general'
    io.to(roomname).emit('message', data)
  })

  socket.on('create room', room => {
    if (!rooms.find(rm => rm === room)) {
      rooms.push(room)

      console.log(rooms)

      io.emit('update rooms', rooms)
    }
  })
})