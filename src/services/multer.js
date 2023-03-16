const multer = require("multer");
const path = require("path");

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve("src/uploads"));
    },

    filename: (req, file, callback) => {
      const time = new Date().getTime();
      file.key = `${time}_${file.originalname}`;
      callback(null, file.key);
    },
  }),
};

module.exports = {
  dest: path.resolve("src/uploads"),
  storage: storageTypes["local"],
  limits: {
    fileSize: 2 * 1024 * 1024,
  },

  fileFilter: (req, file, callback) => {
    const allowedMimes = ["image/jpeg", "image/pjpeg", "image/png"];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Tipo de imagem."));
    }
  },
};
