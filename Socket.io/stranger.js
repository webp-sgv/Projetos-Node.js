const { io } = require("socket.io-client");

const socket = io("ws://localhost:3000");

socket.on("hello", (arg) => {
    console.log(arg);
});