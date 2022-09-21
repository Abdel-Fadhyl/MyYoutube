const express = require('express');
const User = require('../model/usermodel');
const Video = require('../model/videomodel');
const router = express.Router();
const VideoController = require('../controller/videocontroller');
const auth = require('../middleware/auth');

// CURD
router.post("/:id/video", auth, VideoController.creation); // create video
router.get("/videos", VideoController.getallvideo); // get all video
router.get("/:id/videos", VideoController.getvideosbyuserid); // get all video of an user
router.put("/video/:id", auth, VideoController.modifyvideo); // update video
router.delete("/video/:id",auth, VideoController.deletevideo); // delete video
router.put("/video/:id/view",VideoController.vueVideo); // view video

module.exports = router;