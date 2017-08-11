/**
 * Created by bagjeongtae on 2017. 8. 7..
 */
let multer = require('multer');


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + "/server/uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

module.exports = multer({storage});