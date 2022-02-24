const express = require('express')
const {join} = require('path')
const passport = require('passport')
const { Strategy: JWTStrategy, ExtractJWT } = require('passport-jwt')


const app=express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({exrended:true}))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use()

app.listen(process.env.PORT || 3000)
