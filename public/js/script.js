const socket = io.connect('http://localhost:5000');

socket.on('ping-update', data => {
  console.log(data);
})
