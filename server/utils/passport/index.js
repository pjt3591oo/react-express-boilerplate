/**
 * Created by bagjeongtae on 2017. 8. 7..
 */
const passport = require('passport');
const facebook = require('./facebook');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

// passport.use(naver);
passport.use(facebook);


module.exports = passport;