const multer = require("multer");
const cloudinaryy = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

const storage = cloudinaryStorage({
  folder: "ProductImages",
  allowedFormats: ["png", "jpg"],
  transformation: [
    {
      width: 500,
      height: 500,
      crop: "limit",
    },
  ],
  cloudinary: cloudinaryy,
});

module.exports = multer({ storage });
