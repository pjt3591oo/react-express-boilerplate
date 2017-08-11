/**
 * Created by bagjeongtae on 2017. 8. 7..
 */
import fs from 'fs';
const AWS = require('aws-sdk');

const FILE_UPLOAD_PATH_LOCAL = "../../server/uploads/";
const BUCKET_NAME = "popupretail";

const logoFileUpload = require('multer')({ dest: FILE_UPLOAD_PATH_LOCAL });

import path from 'path';

AWS.config.loadFromPath(path.join(__dirname, '../../../server/config/AWS.json'));

const s3 = new AWS.S3();

let teamS3_Option = {
    'Bucket': '',
    'ContentType': '',
    'ACL': '',
    'Body' : '',
    'Key' : ''
};

/*
* PARAMS {string} savedFloderFromS3 : s3 디렉토리
* PARAMS {string} fileName : s3에 올릴 파일(로컬에 저장이 되어 있어야 함)
* */

module.exports = function(savedFolderFromS3, fileName){

    return new Promise( (resolve, reject) => {

        teamS3_Option = {
            'Bucket': BUCKET_NAME,
            'ContentType':'image/png',
            'ACL':'public-read',
            'Body' : fs.createReadStream(fileName),
            'Key' : savedFolderFromS3 + fileName
        };
        s3.upload(teamS3_Option, function(err, data){
            if(err){
                // return res.status(400).end('fail');
                reject(err);
            }else{
                // req.body.thumbnailImg = data["Location"];
                resolve(data["Location"]);
            }
        });
    });
}


