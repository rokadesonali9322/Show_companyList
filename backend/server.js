require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')
const conection = require('./config/db')
const companyRoutes = require('./routes/companyRoutes')

const PORT = process.env.PORT || 8080

// conectation db
conection()
// middle ware
const app = express()
app.use(express.json())

app.use(bodyParse.urlencoded({ extended: false }))
app.use(cors())

// routes
app.use('/company', companyRoutes)

app.listen(PORT, () => {
  console.log(`Server is running  ${PORT}`)
})
