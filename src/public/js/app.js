const socket = io();

const welcome = document.getElementById('welcome');
const form = welcome.querySelector('form');


function backendDone(msg) {
    console.log(`backend says:${msg}`)
}


function handleRoomSubmit(event) {
    event.preventDefault();
    const input = form.querySelector('input');
    socket.emit("enter_room", //function은 항상 마지막 매개변수여야 함
        { paylod: input.value },
        backendDone
    );
    input.value = "";// emit의 3번째 매개변수는 서버로 보내는 function// 서버에서 처리하게 할 수 있음
    
}

form.addEventListener('submit', handleRoomSubmit);