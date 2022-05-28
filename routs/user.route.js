const { Router } = require("express");
const { userController } = require("../Controllers/user.controller");

const router = Router();

router.post("/user", userController.postUser);
router.delete("/user/:id", userController.deleteUser);
router.get("/user/:id", userController.getUserById);
router.get("/user", userController.getUsers);
router.patch("/user/:id/save", userController.addSaveByTwit);

module.exports = router;
