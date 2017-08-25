var socket = io();

socket.on('connect', function()  {
  console.log('Connected to Server')

    socket.emit('createMessage', {
    to: 'abernathy',
    text: 'blah blah'
  });
});
socket.on('disconnect', function() {
  console.log('Disconnected from Server')
});


socket.on('newMessage', function (message) {
  console.log('New Message', message);
});
