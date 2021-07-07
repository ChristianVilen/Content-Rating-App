const express = require('express')
const router = express.Router()
const dataController = require('../controllers/data')

router.put('/', dataController.deleteReview)

module.exports = router
