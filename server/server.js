const express = require("express");
const app = express();
const http = require('http').createServer(app);
const webSocket = require('ws');

app.use(express.static('../client'));

const wss = new webSocket.Server({server: http});

wss.on('connection', (ws) => {
    console.log('New Client Connected');

    ws.on('message', (message) => {
        console.log('Received: ' + message);

        //broadcasting the message to all the clients

        wss.clients.forEach(client => {
            if(client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });

    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
})

http.listen(1337, () => {
    console.log('server is working on port 1337');
})