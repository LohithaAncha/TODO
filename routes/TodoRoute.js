const express=require('express')
const router = express.Router()
const { getTodo, saveTodo, updateTodo, deleteTodo } = require('../controllers/TODOController')



router.get('/', getTodo);
router.post('/', saveTodo);
router.put('/:id', updateTodo);
router.delete('/',deleteTodo)

module.exports=router