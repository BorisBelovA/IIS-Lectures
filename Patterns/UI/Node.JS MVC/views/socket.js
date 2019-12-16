const ws = new WebSocket('ws://localhost:3001')

function setStatus(value) {
    status.innerHTML = value;
}

function printMessage(value) {
    const li = document.createElement('li');

    li.innerHTML = value;
    messages.appendChild(li);
}

ws.onopen = () => console.log('ONLINE')

ws.onclose = () => console.log('DISCONNECTED')

ws.onmessage = response => console.log(response.data)