// module.exports.about = function(req, res){
//     return res.end('<h1>yes it About page</h1>')
// }

module.exports.about = function(req, res){
    // return res.end('<h1>Express is up for codial</h1>');
    return res.render('about',{
        title: "about"
    });

    
}