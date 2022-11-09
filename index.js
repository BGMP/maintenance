require ('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const userRoutes = require('./routes/userRoutes')
const maintainanceRoutes = require('./routes/maintainancesRoutes')

app.use(cors())
app.use(express.json())
app.options('*', cors())

app.use('/api', userRoutes)
app.use('/api', maintainanceRoutes)

app.listen(3000, () => {
    console.log('App initialised. OK')
})

mongoose.set('useFindAndModify', false)
mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

mongoose.connect(process.env.DB, (err) => {
    if (err) return console.log('Could not connect to database. ERROR.', err)

    return console.log("Connected to database. OK.")
})
