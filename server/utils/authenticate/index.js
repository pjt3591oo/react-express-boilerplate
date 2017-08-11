/**
 * Created by bagjeongtae on 2017. 8. 7..
 */
module.exports = function(req, res, next){
    let user = req.user;

    if(user) next();
    else {return res.redirect('/user/signin');}
};