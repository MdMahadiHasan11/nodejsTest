const http = require("http")
const fs = require("fs")
const express = require("express")

const app = express()
const PORT = 3000;
// const PORT = process.env.PORT

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
})

app.use(express.static("public"))

const myServer = http.createServer((req, res)=> {
   res.end("hello")
})

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
})