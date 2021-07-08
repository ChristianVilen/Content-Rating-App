const express = require('express')
const router = express.Router()
const dataController = require('../controllers/category')

// Get content with provided topic
router.get('/:category', dataController.getCategory)
// Get all unique topics
router.get('/', dataController.getCategories)

exports.routes = router
