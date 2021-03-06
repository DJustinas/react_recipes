const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
const validateRecipe = require('../middle/validateRecipe')

router.post('/addrecipe', validateRecipe, controller.saveRecipe)

module.exports = router