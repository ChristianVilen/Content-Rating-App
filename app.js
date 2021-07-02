const express = require('express')
require('dotenv/config')
const cors = require('cors')

const DataModel = require('./src/dataModel')

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
app.get('/', async (req, res) => {
  try {
    const data = await DataModel.find()
    res.json(data)
  } catch (err) {
    res.json({ message: err })
  }
})

app.post('/', async (req, res) => {
  const data = new DataModel({
    id: req.body.id,
    mediaType: req.body.mediaType,
    title: req.body.title,
    description: req.body.description,
    source: req.body.source,
    contentUrl: req.body.contentUrl,
    previewUrl: req.body.previewUrl,
  })

  try {
    await data.save()
    res.sendStatus(200)
  } catch (err) {
    res.json({ message: err })
  }
})

// Connect to db
database.attach()

app.listen(port, () => {
  console.log(`Running on ${port} 🚀`)
})
