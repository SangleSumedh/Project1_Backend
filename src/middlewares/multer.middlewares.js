import multer from "multer";
import fs from "fs";
import path from "path";

const tempDir = path.join(process.cwd(), "public/temp");
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDir);
  },
  filename: function (req, file, cb) {
    //Todo
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});
