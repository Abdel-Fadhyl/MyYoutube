const express = require('express');
const Comment = require('../model/commentmodel');

const router = express.Router();
const CommentController = require('../controller/commentcontroller');
const auth = require('../middleware/auth');

// CRUD
router.get("/video/:id/comments", auth, CommentController.getallcomments); // 14
router.post("/video/:id/comment", auth, CommentController.createcomment); // 13

module.exports = router;