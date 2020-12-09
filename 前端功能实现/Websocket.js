var MySocket = WebSocket('ws://www.example.com/socketserver',"protocolOne");

MySocket.onopen = function(event){
    MySocket.send("Here's some text that the server is urgently awaiting!");
}
