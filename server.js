const exp = require('constants')
const express=require('express')
const {join}=require('path')
const app=express()
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({exrended:true}))
app.use(express.json())

app.listen(process.env.PORT || 3000)
