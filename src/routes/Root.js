const express = require('express')
const router = express.Router()
const dataController = require('../controllers/data')

// get all data, can be provided a limit
router.get('/', dataController.getAll)
// post data
router.post('/', dataController.postData)
// put data, is used to add review field
router.put('/', dataController.putData)

module.exports = router
