const express = require('express');
const userRoutes = require('./user-routes');
const todoRoutes = require('./todos-routes');

const router = express.Router();

router.use('/auth', userRoutes);
router.use('/todos', todoRoutes);

module.exports = router;
