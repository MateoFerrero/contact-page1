const express = require('express')
const app = express() 
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function(request,response) {
    let file = path.resolve('src', 'index.html')
    response.sendFile(file)
    })
app.listen(3000)