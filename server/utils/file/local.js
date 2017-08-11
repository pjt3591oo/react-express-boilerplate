/**
 * Created by bagjeongtae on 2017. 8. 7..
 */
let multer = require('multer');

import path from 'path';

function rename(oriname){
    function s4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    let utc = new Date().getTime();

    return utc.toString() + '-' +s4() + '-' + s4();
}

let storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, path.join(__dirname, "../../../server/uploads/"));
    },
    filename: function (req, file, cb) {
        let originName = file.originalname;
        let newName = rename(originName);
        cb(null, newName);
    }
});

module.exports = multer({storage});