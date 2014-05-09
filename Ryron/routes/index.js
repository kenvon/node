
/*
 * GET home page.
 */

exports.index = function(req, res){
    var data = new Date();
    var year = data.getFullYear();
  res.render('index', { title: year });
};
exports.table = function(req,res){
    var data = new Date();
    var year = data.getFullYear();
    res.render('table', { title: year });
}
exports.login = function(req,res){
    var data = new Date();
    var year = data.getFullYear();
    res.render('login', { title: year });
}
exports.about = function(req,res){
    var data = new Date();
    var year = data.getFullYear();
    res.render('about', { title: year });
}
exports.contace = function(req,res){
    var data = new Date();
    var year = data.getFullYear();
    res.render('contact', { title: year });
}