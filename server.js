const http = require('http')
const express = require('express')
// const app = express()
const port = 6969





const WebSocket = require('ws');
const { connect } = require('http2');

const server = http.createServer(express)
const wss = new WebSocket.Server({ server })

wss.on('connection',function connection(ws){
    ws.on('message', function incoming(data){
        console.log(data)
        console.log(data.toString('utf8'));

        wss.clients.forEach(function each(client){
            if(client != ws && client.readyState == WebSocket.OPEN){
                client.send(data.toString('utf8'))
            }

        })



    })


})

server.listen(port, () => {
    console.log(`Servidor escutando em ${port}`)
})

// io.on('connection', socket => {
//     socket.emit('message','Hello World')
// })


// app.use(express.json())
// app.use(express.static('public'))
// app.use('/css',express.static(__dirname + 'public/css'))
// app.use('/js',express.static(__dirname + 'public/js'))

// app.set('views','./views')
// app.set('view engine','ejs')


// app.get('/',(req,res) => {
//     res.render('index')
// })

// app.post('/', (req,res) => {
//     console.log(req.body)

// })

// const server = http.createServer()
// app.listen(port,console.log(`Servidor escutando em http://localhost:${port}`))
