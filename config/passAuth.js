//passport configuration 

var passport = require('passport');
var config = require('../config');
var db = require('../models');
var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local');


//pasport auto setting is email, so to change:
const localOptions = {
    usernameField: 'userName',
    passwordField: 'userPassword'
}

//create local strategy
//arguments are received from req.body
const localLogin = new LocalStrategy(localOptions, function(userName, password, done) {

    db.users.findAll({where: {userName: userName}})
    .then( results => {
        if(results != null){
            const user = results[0];
            if(user){

                console.log("userName: " + user.userName);
                bcrypt.compare(password, user.userPassword, (err, isMatch) =>{
                    if(err){
                        return done(err)
                    }
                    if(!isMatch){
                        return done(null, false, { message: 'bad password' });
                    }
                    return done(null, user);
                })

            }
            else{
                return done(null, false, { message: 'account not found' });
            }
    
        } else {
            return done(null, false, { message: 'account not found' });
            
        }
    })
})

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

    db.users.findById(payload.sub)
    .then((foundUser) =>{
        if(foundUser){
            done(null, foundUser)
        } else {
            return done(null, false)
        }
    })
    .catch((err) => {
        return(err, false)
    })

})



passport.use(jwtLogin);
passport.use(localLogin);