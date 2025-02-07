const express = require('express')
const path = require('path')

const app = express()

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/dist'))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    })
}

const PORT = process.env.PORT || 4141

app.listen(PORT, ()=> console.log(`Server Running on Port: ${PORT}`))