const express = require("express");
const authMiddlware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/welcome", authMiddlware, (req, res) => {
  const { userId, username, role } = req.userInfo;
  res.json({
    message: "Welcome to Home page",
    user: {
      _id: userId,
      username,
      role,
    },
  });
});

module.exports = router;
