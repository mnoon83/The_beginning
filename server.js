const express=require('express')
const app=express()
app.get('/test', (req, res)=>{
  console.log(req)
  console.log(res)
})
app.listen(8080)
