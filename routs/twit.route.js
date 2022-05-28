const { Router } = require("express");
const { twitController } = require("../Controllers/twit.controller");

const router = Router();

router.post("/twit", twitController.postTwit);
router.delete("/twit/:id", twitController.deleteTwit);
router.patch("/twit/:id/", twitController.pathTwit);
router.patch("/twit/:id/like", twitController.addLike);
router.patch("/twit/:id/comment", twitController.addComment);

module.exports = router;
