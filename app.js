const express = require('express')
require('dotenv/config')
const cors = require('cors')

const topRoute = require('./src/routes/Top')
const rootRoute = require('./src/routes/Root')
const deleteReviewRoute = require('./src/routes/DeleteReview')

const app = express()
const port = 8000

const database = require('./src/initDb')
// Allow all cors
app.use(cors())
app.options('*', cors())
// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Routes
app.use('/top', topRoute)
app.use('/delete', deleteReviewRoute)
app.use('/', rootRoute)

// Connect to db
database.attach()

app.listen(process.env.PORT || port)
