const User = require('../models/user')



module.exports.profile = function (req, res) {
    res.end('<h1>User Profile</h1>');
}




// render the sign in page
module.exports.signup = function (req, res) {

    return res.render('user_sign_up', {
        title: "Codial | Sign Up"
    })

}

// render the sign in page
module.exports.signin = function (req, res) {

    return res.render('user_sign_in', {
        title: "Codial | Sign In"
    })

}



// get sign up data
module.exports.create = async function (req, res) {
    // if user password does not match with confirm password
    if (req.body.password !== req.body.confirm_password) {
        return res.redirect('back');
    }

    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            await User.create(req.body);
            console.log(req.body);
            console.log('User created successfully while signing up');
            return res.redirect('/users/sign-in');
        } 
        else {
            return res.redirect('back');
        }

    } catch (err) {
        console.log('Error in finding/creating user while signing up:', err);
        return res.redirect('/users/sign-in');
    }
};





//get sign in data
module.exports.createSession = function (req, res) {


}