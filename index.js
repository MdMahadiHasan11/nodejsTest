const http = require("http")
const fs = require("fs")
const PORT = 3000;
// const PORT = process.env.PORT

const myServer = http.createServer((req, res)=> {
   res.end("hello")
})

myServer.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
})