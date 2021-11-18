const socket = io.connect('http://localhost:3000')

const sender = document.getElementById('sender')
const message = document.getElementById('message')
const sumbitBtn = document.getElementById('sumbitBtn')
const output = document.getElementById('output')
const feedback = document.getElementById('feedback')

sumbitBtn.addEventListener('click', () =>{
    socket.emit('chat', {
        message: message.value,
        sender: sender.value

    })
})

socket.on('chat',data =>{
    feedback.innerHTML = ''
output.innerHTML += '<p><strong>' + data.sender + ': </strong>' + data.message + '</p>'
message.value= '';

})

message.addEventListener('keypress',() =>{

    socket.emit('typing',sender.value)
})

socket.on('typing', data =>{
    feedback.innerHTML = '<p>' + data + 'yazıyor.... </p>'

})