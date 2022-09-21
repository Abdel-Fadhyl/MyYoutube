const User = require('../model/usermodel');
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcrypt');
const Joi = require('joi');
const userNameReg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*_).{6,}/;
const Mailer = require('../postfix/mailer');
require('dotenv').config();

const urlBase = "http://localhost:8080/user/";
const SECRET_KEY = process.env.SECRET_KEY;

function confirmationEmail(email,username){
    const user = new User({
        username: username,
        pseudo: "",
        email: email,
        confirm: false,
        password: String(bcrypt.hashSync("verification", 5)),
    })
    Mailer.transport.sendMail(Mailer.mailcreateur('Register',user,'',urlBase+user.username), function(err, info) {
        if (err) { console.log(err) }
        else {  }
    });
};
module.exports.register = async(req, res,next) => {
    const { username, email, password, } = req.body;
    User.findOne({ username: req.body.username},(err, user) => {
        if(user){
            res.send({ message: "UserName already exist" }).status(400)
        }
    });
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already exist" }).status(400)
        } else {
            // encryptedPassword = bcrypt.hash(password, 10);
            const newUser = new User({
                username: req.body.username,
                pseudo: req.body.pseudo,
                email: req.body.email,
                confirm: false,
                password: String(bcrypt.hashSync(password, 5)),
            })
            confirmationEmail(req.body.email,req.body.username);
            newUser.save(err => {
                if (err) {
                    res.send(err).status(401)
                } else { next()
                    // res.status(201).json({
                    //     message: "Ok",
                    //     data: newUser
                    // })
                }
            })
        }
    });
};
exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username: username });

        if (user) {
            bcrypt.compare(password, user.password, function(err, response) {
                if (err) {
                    throw new Error(err);
                }
                if (response) {
                    delete user._doc.password;

                    const expireIn = 24 * 60 * 60;
                    const token    = jwt.sign({
                        user: user
                    },
                    SECRET_KEY,
                    {
                        expiresIn: expireIn
                    });

                    res.header('Authorization', 'Bearer ' + token);

                    return res.status(200).json('Bearer ' +token);
                }

                return res.status(403).json('bad_credentials');
            });
        } else {
            return res.status(404).json('user_not_found');
        }
    } catch (error) {
        return res.status(501).json(error);
    }

    // User.findOne({ username: req.body.username })
    //     .then(user => {
    //         if (!user) {
    //             return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    //         }
    //         bcrypt.compare(req.body.password, user.password)
    //             .then(valid => {
    //                 if (!valid) {
    //                     return res.status(401).json({ error: 'Mot de passe incorrect !' });
    //                 }
    //                 res.status(200).json({
    //                     userId: user._id,
    //                     token: jwt.sign(
    //                         { userId: user._id },
    //                         'RANDOM_TOKEN_SECRET',
    //                         { expiresIn: '24h' }
    //                     )
    //                 });
    //             })
    //             .catch(error => res.status(500).json({ error }));
    //     })
    //     .catch(error => res.status(500).json({ error }));
};
module.exports.deleteuser = async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(204);
    } catch (err) {
        res.send(err).status(500);
    }
};
module.exports.modifyuser = async(req, res) => {
    try {
        const updateuser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.send(updateuser);
    } catch (err) {
        res.send(err);
    }
};
module.exports.getallusers = async(req, res) => {
    const users = await User.find();
    res.status(200).json({
        message: "Ok",
        data: users
    });
};
module.exports.getuserbyid = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json({
        message: "Ok",
        data: user
    });
};
module.exports.confirmationRegister = async(req, res) => {
    User.findOne({ username: req.params.username}, (err, user) => {
        try {
            user.confirm = true;
            // const updateuser = User.findByIdAndUpdate(user.id, {
            //     $set: {confirm: true},
            // }, { new: true });
            user.save(err => {
                if (err) {
                    res.send(err).status(400)
                } else {
                    res.status(201).json({
                        message: "Ok",
                        data: user
                    })
                }
            })
            //res.send(user);
        } catch (err) {
            res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
    })
};
module.exports.changepassword = async(req, res) => {
    console.log(req.body.username)
    try {
        User.findOne({ email: req.body.email }, (err, user) => {
            try{
                var link = urlBase+user._id;
                Mailer.transport.sendMail(Mailer.mailcreateur('ChangePassword',user,'',link), function(err, info) {
                    if (err) { console.log(err) }
                    else { console.log(info); }
                });
                return res.status(200).json({ result: "ok"});
            } catch {
                return res.status(401).json({ error: err});
            }
        })
    } catch {
        return res.status(401).json({ error:  'email incorrect !' });
    }
};
module.exports.validationchangepasseword = async(req, res) => {
    var userRef = User.findById(req.params.id);
    bcrypt.compare(req.body.oldpass, userRef.password)
    .then(valid => {
        if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        try {
            userRef.password = String(bcrypt.hashSync(newpass, 5));
            const updateuser = User.findByIdAndUpdate(req.params.id, {
                $set: userRef,
            }, { new: true });
            res.send(userRef);
            Mailer.transport.sendMail(Mailer.mailcreateur('ChangePassewordValidet',userRef,'',''), function(err, info) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(info);
                }
            });
        } catch (err) {
            res.send(err);
        }
    }).catch(error => res.status(500).json({ error }));
};