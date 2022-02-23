const express = require('express');
const router = express.Router();
const controller = require('../controllers/blogControllers');
const Blog = require('../models/blogs');

router.get('/', controller.getBlogs)
router.post('/',controller.newBlog)
router.get('/:id',controller.singleBlog)
router.delete('/:id',controller.deleteBlog)

module.exports = router;