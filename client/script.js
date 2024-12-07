const protocol = window.location.protocol === 'https:'?'wss':'ws';

const serverUrl = `${protocol}://${window.location.host}`
const socket = new WebSocket(serverUrl)

socket.onopen = function(event) {
    console.log('Connected to the WebSocket server')
};

socket.onerror = function(error) {
    console.log('WebSocket Error:', error)
}