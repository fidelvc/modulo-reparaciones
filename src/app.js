const express = require ('express')
const cors = require('cors')

const app = express()

// Settings 

app.set('port', process.env.PORT || 4000)



// middlewares

app.use(cors())
app.use(express.json())
// routes

app.use('/api/objetos-reparar', require('./routes/objetos-reparar'))
app.use('/api/recursos', require('./routes/recursos'))


module.exports = app