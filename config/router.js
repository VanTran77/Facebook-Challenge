const express =require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.all('/feed', controller.getHomePage)

router.get('/', controller.getHomePage)

router.get('/feed/:id', controller.showOnePost)

router.all('/edit-post/:id', controller.updateOnePost)

router.get('/delete-post/:id', controller.deleteOnePost)


module.exports = router