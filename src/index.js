const express  = require("express")

const startAndRundServer = () =>{
    const app = express()
    const PORT = 3000;

    app.listen(PORT,()=>{

        console.log(`App is running at ${PORT}`)

    })
}
startAndRundServer();