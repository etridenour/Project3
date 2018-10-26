
//setup routes for signing in signing out 

let express = require('express');
let router = express.Router();
let jwt = require('jwt-simple');
let config = require('../config');
let bodyParser = require('body-parser');
let bcrypt = require('bcryptjs');
let passport = require('passport');
const nodemailer = require('nodemailer');

let db = require('../models');

const passportService = require('../config/passAuth');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


//session default is true, so you have to set to false
const requireSignin = passport.authenticate('local', {session: false} );
const requireAuth = passport.authenticate('jwt', {session: false});


function tokenForUser(user){
    //current date and time to be passed as iat
    const timestamp = new Date().getTime();

    //jwt.encode method in jwt object - takes 2 args - payload and secret
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}

router.get('/protected', requireAuth, (req, res) => {

    console.log("protect route");
    res.send('you\'re in.')

})

router.post('/authenticate', requireAuth, (req, res) => {
    var userName = req.body.userName
    db.users.findAll({where: {userName: userName}})
    .then( results => {
        
        if(results.length === 0){
        
        }
        else{
            var theUser = results[0].dataValues

            return res.status(200).json(theUser);
        }
    })

})

router.post('/signin', (req, res, next)=>{

    var userName = req.body.userName
    var password = req.body.userPassword


    db.users.findAll({where: {userName: userName}})
    .then( results => {
        if(results){
            const user = results[0];
            if(user){

                console.log("userName: " + user.userName);
                bcrypt.compare(password, user.userPassword, (err, isMatch) =>{
                    console.log(err)
                    if(err){
                        return res.json({ message: 'password error' });
                    }
                    if(!isMatch){
                        return res.json({ message: 'bad password' });
                    }
                    return res.json({token: tokenForUser(user),
                        userName: user.userName,
                        companyName: user.companyName,
                        privilege: user.privilege,
                        id: user.id    
                    })
        
                })

            }
            else{
                return res.json({ message: 'account not found' });
            }
    
        } else {
            return res.json({ message: 'account not found' })
            
        }
    })

})

//signup
router.post('/signup', (req, res) => {

    //db create stuff in here
    let userName = req.body.userName;
    //encrypt password
    let password = bcrypt.hashSync(req.body.userPassword, 8);

    let companyName = req.body.companyName;

    //check to see if email already exists
    db.users.findAll({where: {userName: userName}})
    .then( results => {
        //if there are no results (if they are = 0)
        if(results.length === 0){
            db.users.create({userName: userName, userPassword: password, companyName: companyName, privilege: 2 })
            .then((user) => {
                return res.json({token: tokenForUser(user)})
            })
        }
        else{
            return res.status(422).send({error: "Email already exists"});
        }
    })

})

router.get('/clients', (req, res) => {

    db.users.findAll({attributes: ['userName', 'companyName', 'privilege', 'id']})
        .then((results) => {
            res.json({
                clients: results
            })
        })
})

router.post('/privilegeChange', (req, res) => {

    let id = req.body.id;
    let privilege = req.body.privilege

    db.users.update(
        {
            privilege: privilege
        },
        {where: {id: id}}
    )
    .then(() => {
        res.redirect('/clients')
    })
})

router.post('/clientChange', (req, res) => {
    console.log(req.body.id)
    let id = req.body.id;

    db.users.destroy(
        {where: {id: id}},
        {truncate: false}
    )
    .then(() => {
        res.redirect('/clients')
    })
})


// FORGOT PASSWORD 


router.post('/forgotPassword', (req, res) => {

    var userName = req.body.userName

    db.users.findAll({where: {userName: userName}})
    .then( results => {
        
        if(results.length === 0){
            return res.status(422).send({error: "Email address does not exist in database."});
        } else {

            let user = results[0].dataValues;
            let timestamp = new Date().getTime();
            let passToken = jwt.encode({sub: user.userName, iat: timestamp}, user.userPassword);
            let url = `<a href="http://beerbud.surge.sh/resetpassword/${user.id}/${passToken}">Reset password</a>`;

            //set up nodemailer
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'etridenour@gmail.com',
                    pass: "'^&xB@6@n6Z;rW*k"
                }
            });

            let mailOptions = {
                from: '"BeerBud Password Reset', // sender address
                to: user.userName, // list of receivers
                subject: 'BeerBud Password Reset', // Subject line
                text: 'Password Reset', // plain text body
                html: `You are receiving this because you (or someone else) requested the reset of the password for your account. Please click on the following link or copy and paste the url to complete the process:<br><br>${url} <br><br> If you did not request this, please ignore this email and your password will remain unchanged.`
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }

            });

            return res.status(200).json({email: user.userName})
        }
    })
})



router.post('/savePassword', (req, res) => {
    const { formProps, token, id, } = req.body
    const userPassword = formProps.userPassword
    
    let newPassword = bcrypt.hashSync(userPassword, 8);

    db.users.findAll({where: {id: id}})
    .then(results => {
        
        let user = results[0].dataValues;
        
        try {
            var payload = jwt.decode(token, user.userPassword);
        }
        catch(err) {
            return res.status(422).json({error: "Token not authenticated."});
        }

        db.users.update(
            {
                userPassword: newPassword
            },
            {where: {id: id}}
        ).then((result)=>{
           
            res.status(200).json({updated: "password updated"})
        })

    })

    
    
})



module.exports = router;




