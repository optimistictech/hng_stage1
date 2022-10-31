const express = require('express')
const app = express()
const me = require('./me.js')

app.listen(process.env.PORT || 3000, ()=> console.log ("server is running"))

app.get('/', (req,res) => {
    res.send('Api is running')
})

app.get('/me', (req,res)=>{
    res.json(me)
})
