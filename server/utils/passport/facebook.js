/**
 * Created by bagjeongtae on 2017. 8. 7..
 */

const FacebookStrategy = require('passport-facebook').Strategy;

import path from 'path';

const {clientID, clientSecret} = require(path.join(__dirname, '../../../server/config/PASSPORT.json'))['facebook'];

module.exports = new FacebookStrategy({
        clientID: clientID,
        clientSecret: clientSecret,
        callbackURL: "http://121.161.16.47:3000/passport/callback",
        profileFields: ['id', 'displayName', 'photos', 'email', 'gender', 'name']
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile); //두번째 인자가 req.user에 저장된다. 즉 세션에 저장됨.
    }
);
