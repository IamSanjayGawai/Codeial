const User = require('../models/user')



// module.exports.profile = function (req, res) {
//     res.render('profile',{
//         title:'profile'
//     });
// }


module.exports.profile = async function (req, res) {
    try {
        if (req.cookies.user_id) {
            // finding user
            const user = await User.findById(req.cookies.user_id);
            if (user) {
                // if user found
                return res.render('user_profile', {
                    title: " User Profile",
                    user: user
                });
            }
            // if it is not
            return res.redirect('/users/sign-in')
        } else {
            return res.redirect('/users/sign-in')
        }
    } catch (err) {
        // handle any errors
        console.error(err);
        return res.redirect('/users/sign-in');
    }
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

        //if user already present then
        else {
            return res.redirect('back');
        }

    } catch (err) {
        console.log('Error in finding/creating user while signing up:', err);
        return res.redirect('/users/sign-in');
    }
};




// sign in and create session for the user
module.exports.createSession = async function (req, res) {
    try {
        // find the user
        const user = await User.findOne({ email: req.body.email });

        // handle user found
        if (user) {
            // handle password that doesn't match
            if (user.password !== req.body.password) {
                return res.redirect('back');
            }

            // handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');
        } else {
            // handle user not found
            return res.redirect('back');
        }
    } catch (err) {
        console.log('error in finding user in signing in', err);
        return;
    }
};



