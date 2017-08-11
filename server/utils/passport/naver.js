/**
 * Created by bagjeongtae on 2017. 8. 7..
 */
const NverStrategy = require('passport-naver').Strategy;

const {clientID, clientSecret} = require('../../config/PASSPORT.json')['naver'];

module.exports = new NverStrategy({
        clientID: clientID,
        clientSecret: clientSecret,
        callbackURL: "http://localhost:3000/user/auth/callback",
        // profileFields: ['id', 'displayName', 'photos', 'email', 'gender', 'name']
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
);