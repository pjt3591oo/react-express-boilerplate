/**
 * Created by bagjeongtae on 2017. 8. 7..
 */

const FacebookStrategy = require('passport-facebook').Strategy;
const {clientID, clientSecret} = require('../../config/PASSPORT.json')['facebook'];

module.exports = new FacebookStrategy({
        clientID: clientID,
        clientSecret: clientSecret,
        callbackURL: "http://localhost:3000/user/auth/callback",
        profileFields: ['id', 'displayName', 'photos', 'email', 'gender', 'name']
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(accessToken);
        done(null, {message: 'success'});
    }
);
