const Comment = require('../model/commentmodel');
const Video = require('../model/videomodel');
const User = require('../model/usermodel');

module.exports.getallcomments = async(req, res) => {
    const comments = await Comment.find();
    res.status(200).json({
        message: "Ok",
        data: comments
    });
};

module.exports.createcomment = async(req, res) => {
    const { body } = req.body;
    Video.findById(req.params.id , (err, Video) => {
        if (Video) {
            res.send({ message: "Video do not exist" }).status(400)
        } else {
            // // encryptedPassword = bcrypt.hash(password, 10);
            // const newUser = new User({
            //     username: req.body.username,
            //     pseudo: req.body.pseudo,
            //     email: req.body.email,
            //     password: String(bcrypt.hashSync(password, 5)),
            // })
            // newUser.save(err => {
            //     if (err) {
            //         res.send(err).status(400)
            //     } else {
            //         res.status(201).json({
            //             message: "Ok",
            //             data: newUser
            //         })
            //     }
            // })
        }
    });
};