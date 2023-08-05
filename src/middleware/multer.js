const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'public/images');
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime();
        const fileName = file.originalname;
        // const extension = path.extname(file.originalname);
        cb(null, `${timestamp}-${fileName}`);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Hanya file image yang diijinkan!'))
        }
        callback(null, true)
    },
    limits: {
        fileSize: 3 * 1000 * 1000 // 3MB
    },
});

module.exports = upload;