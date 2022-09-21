const express = require('express');
const { createTodoController, todoListController, updateTodoController } = require('../controllers/todos');
const authMiddleware = require('../middlewares/authenticate');
const validation = require('../middlewares/validation');
const todoValidation = require('../utils/validations/todoValidation');

const router = express.Router();

router.route('/create').post(authMiddleware, validation(todoValidation.create), createTodoController);
router.route('/list').get(authMiddleware, todoListController);
router.route('/update/:todoId').post(authMiddleware, validation(todoValidation.update), updateTodoController);

module.exports = router;
