const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const uploadMiddleware = require("../middleware/uploadMiddleware");
const {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
} = require("../controllers/image-controller");

const router = express.Router();

//upload the image
router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single("image"),
  uploadImageController,
);

//to get all the image
router.get("/get", authMiddleware, fetchImagesController);

// delete image route
router.delete(
  "/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteImageController,
);

module.exports = router;
