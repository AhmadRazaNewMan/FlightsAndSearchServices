const express  = require("express")

const startAndRundServer = () =>{
    // Create the object of the server and this is more important
    
    const app = express()
    const PORT = 3000;

    app.listen(PORT,()=>{

        console.log(`App is running at ${PORT}`)

    })
}
startAndRundServer();