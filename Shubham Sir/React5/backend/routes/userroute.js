const express = require("express");
const { updateUser, getUser } = require("../controller/user.controller");
const router = express.Router();

router.get("/" , getUser);
router.put("/update/" ,updateUser );
module.exports = router;