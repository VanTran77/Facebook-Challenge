const express = require('express');
const app = express();
const router = require('./config/router')

app.use(express.static('public'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

require('./config/mongoose')

app.use(router)

app.listen(1112, ()=> console.log("Listen to port 1112..."))