/**
 * Created by bagjeongtae on 2017. 8. 12..
 */
import authenticate from './authenticate';
import email from './email';
import file from './file';
import passport from './passport';

let utils = {
    authenticate: authenticate,
    email: email,
    file: file,
    passport: passport
};

exports.modules = utils;