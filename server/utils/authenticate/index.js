/**
 * Created by bagjeongtae on 2017. 8. 7..
 */
module.exports = function(req, res, next){
    let user = req.query.t;

    if(user) next();
    else {return res.redirect('/authenticate/failed');}
};