const express=require('express')
const {join}=require('path')
const app=express()
app.get('/',(req,res)=>{
  res.sendFile(join(__dirname,'login.html'))
})
// app.get('/test', (req, res)=>{
//   res.send()
// })
app.listen(8080)
