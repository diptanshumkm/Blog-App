const express = require("express");
const router = express.Router();

// Import controller functions
const { createPost, getAllPosts } = require('../controller/PostController');
const { createComment } = require('../controller/CommentController');
const { likePost } = require('../controller/LikeController');

// Define routes with correct callback functions
router.post("/comments/create", createComment);
router.post("/post/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);

module.exports = router;
