const express = require('express')
const router = express.Router()
const dataController = require('../controllers/category')

router.get('/:category', dataController.getCategory)
router.get('/', dataController.getCategories)

exports.routes = router
