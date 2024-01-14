const express  = require("express")
const {PORT}  = require("./config/serverConfig")

const startAndRundServer = () =>{
    // Create the object of the server and this is more important
    
    const app = express()
    

    app.listen(PORT,()=>{

        console.log(`App is running at ${PORT}`)

    })
}
startAndRundServer();