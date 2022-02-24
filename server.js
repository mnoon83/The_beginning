require('dotenv').config()

const express = require('express')
const {join} = require('path')
const passport = require('passport')
const { User } = require('./models')
const { Strategy: JWTStrategy, ExtractJWT } = require('passport-jwt')

const app=express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({exrended:true}))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, ({ id }, cb) => user.findOne({ where: { id } })
  .then(user => cb(null, user))
  .catch(err => cb(err, null))))

app.use(require('./routes'))

require('./db')
  .sync()
  .then(() => app.listen(process.env.PORT || 3000))
