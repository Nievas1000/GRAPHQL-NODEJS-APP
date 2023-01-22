const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./images/");
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

export const upload = multer({
  storage: storage,
});
