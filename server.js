const express = require('express')
 const app =express()
 const http = require('http').createServer(app)

 const PORT = process.env.PORT || 3000;  //check the port working

 http.listen (PORT, ()=>{
    console.log(`listening port ${PORT}`)
 })

 app.use(express.static(__dirname + '/public'))

 app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/index.html')
 })

 //socket io connection uese

 const io = require('socket.io')(http)

 io.on('connection',(socket)=>{
    console.log('Coneected...')

    socket.on('message', (msg) => {
      socket.broadcast.emit('message', msg)
  })
 })