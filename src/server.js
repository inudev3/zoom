import http from "http";
import { io} from "socket.io-client";
import express from "express";
const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));
const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection",  (socket) => {
  socket.on('enter_room',sd, (roomname, done) => {
    
    console.log(roomname);
    setTimeout(() => {
      done('hello from the backend');
    }, 5000);
    
    //emit으로 받은 callback 함수를 2번째 변수로 받음() event로 메세지와 function을 받을 수 있음
    //받은 function은 프론트엔드에서 실행
  });
});
//ws와는 달리, socketio는 브라우저에서 지원하지 않으므로 html script로 프론트엔트에 설치해줘야함

// const wss = new WebSocket.Server({ server }); //run http and websocket together
// const sockets = [];
// //socket은 연결된 어떤 사람이다.
// wss.on("connection", (socket) => {
//     sockets.push(socket);
//     socket['nickname'] = 'Anonymous';
//     console.log("connected to browser✅");
//     socket.on("close", () => console.log('disconnected from browser❌'));
//     socket.on('message', (data) => {
//         const message = JSON.parse(data);
//         const { type, payload } = message
//         sockets.filter(a)
//         switch (type) {
//             case 'new_message':
//                 sockets.forEach(aSocket => aSocket.send(`${socket.nickname}:${message.payload}`)); // 받은 데이터를 그대로 보냄
//                 break;
//             case 'nickname':
//                 socket['nickname'] = message.payload;
//                 break;
//         }  
//     });
// });
//websocket은 브라우저와 서버 사이의 연결이다. https와 똑같은 연결이지만 다른 프로토콜일뿐
//app.js는 프론트엔드 브라우저=>서버
//server.js는 백엔드, 서버=>브라우저
// 프론트에서 백엔드(서버)로 데이터를 보낼 때는 JSON을 지원안하는 서버인경우 인식하지 못함~ stringfy로 string으로 변환해서 보내주어야함
//백엔드가 자바스크립트가 아니라 자바 스프링, 혹인 go등 JSON을 인식못하는 프로그래밍 언어일 수 있기 때문에 stringfy로 변환해서 보내주어야 한다.
//백에서 프론트로 보낼때는 문제없음. 프론트는 항상 JS기 때문
httpServer.listen(3000, ()=>console.log('hi'));
