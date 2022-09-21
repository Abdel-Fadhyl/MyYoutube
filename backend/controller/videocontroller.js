const User = require('../model/usermodel');
const Video = require('../model/videomodel')
const jwt = require ('jsonwebtoken');
var getDimensions = require('get-video-dimensions');
var ffmpeg = require('fluent-ffmpeg');
var mkdirp = require('mkdirp');
const Mailer = require('../postfix/mailer');
require('dotenv').config();


// hash password manquant

module.exports.creation = async(req, res) => {
    User.findById(req.params.id).then(userof=> {
        const { name,file } = req.body;
        let video = req.files.file;
        var folder = "videos/"
        video.mv(folder + video.name);

        Mailer.transport.sendMail(Mailer.mailcreateur('upload',userof,name,''), function(err, info) {
            if (err) {
                console.log(err)
            } else {
                console.log(info);
            }
        });
        var dimensionsBasic = 0;
        getDimensions(folder + video.name).then(function (dimensions) {
            dimensionsBasic = dimensions.height;

            if(dimensionsBasic >= 1080 ){
                let outputPath1080 = video.name+'-1080/'
                mkdirp(folder+outputPath1080);
                var command = ffmpeg().input(folder + video.name).videoCodec('libx264').output(folder+outputPath1080+video.name)
                .size('1080x?')
                .on('end', function() {
                    Mailer.transport.sendMail(Mailer.mailcreateur('uploadForma',userof,name,'1080p'), function(err, info) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(info);
                        }
                    });
                })
                .on('error', function(err) {
                    console.error('this error:');
                    console.error(err);
                  }).exec();  //.run()
            }
            if(dimensionsBasic >= 720){
                let outputPath720 = video.name+'-720/'
                mkdirp(folder+outputPath720);
                var command = ffmpeg().input(folder + video.name).videoCodec('libx264').output(folder+outputPath720+video.name)
                .size('720x?')
                .on('end', function() {
                    Mailer.transport.sendMail(Mailer.mailcreateur('uploadForma',userof,name,'720p'), function(err, info) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(info);
                        }
                    });
                })
                .on('error', function(err) {
                    console.error('this error:');
                    console.error(err);
                  }).exec();  //.run()
            }
            if(dimensionsBasic >= 480){
                let outputPath480 = video.name+'-480/'
                mkdirp(folder+outputPath480);
                var command = ffmpeg().input(folder + video.name).videoCodec('libx264').output(folder+outputPath480+video.name)
                .size('480x?')
                .on('end', function() {
                    Mailer.transport.sendMail(Mailer.mailcreateur('uploadForma',userof,name,'480p'), function(err, info) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(info);
                        }
                    });
                })
                .on('error', function(err) {
                    console.error('this error:');
                    console.error(err);
                }).exec();  //.run()
            }
            if(dimensionsBasic >= 360){
                let outputPath360 = video.name+'-360/'
                mkdirp(folder+outputPath360);
                var command = ffmpeg().input(folder + video.name).videoCodec('libx264').output(folder+outputPath360+video.name)
                .size('360x?')
                .on('end', function() {
                    Mailer.transport.sendMail(Mailer.mailcreateur('uploadForma',userof,name,'360p'), function(err, info) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(info);
                        }
                    });
                })
                .on('error', function(err) {
                    console.error('this error:');
                    console.error(err);
                  }).exec();  //.run()
            }
            if(dimensionsBasic >= 240){
                let outputPath240 = video.name+'-240/'
                mkdirp(folder+outputPath240);
                var command = ffmpeg().input(folder + video.name).videoCodec('libx264').output(folder+outputPath240+video.name)
                .size('240x?')
                .on('end', function() {
                    Mailer.transport.sendMail(Mailer.mailcreateur('uploadForma',userof,name,'240p'), function(err, info) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(info);
                        }
                    });
                })
                .on('error', function(err) {
                    console.error('this error:');
                    console.error(err);
                  }).exec();  //.run()
            }
            if(dimensionsBasic >= 144){
                let outputPath144 = video.name+'-144/'
                mkdirp(folder+outputPath144);
                var command = ffmpeg().input(folder + video.name).videoCodec('libx264').output(folder+outputPath144+video.name)
                .size('144x?')
                .on('end', function() {
                    Mailer.transport.sendMail(Mailer.mailcreateur('uploadForma',userof,name,'144p'), function(err, info) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(info);
                        }
                    });
                })
                .on('error', function(err) {
                    console.error('this error:');
                    console.error(err);
                  }).exec();  //.run()
            }
            // ffmpeg.ffprobe(video, (error, metadata) => {
            //     const duration = error.format.duration;
            //     console.log(duration)
            // });
            const newVideo = new Video({
                title: name,
                source: 'videos/' + video.name,
                views: 0,
                enabled: true,
                user: userof,
                format: dimensionsBasic,
                duration: 10
            })

            newVideo.save(err => {
                if (err) {
                    res.send(err).status(400)
                } else {
                    res.status(201).json({
                        message: "Ok",
                        data: newVideo
                    })
                }
            })
        })
    })
};

module.exports.getvideosbyuserid = async(req, res) => {
    const userof = await User.findById(req.params.id);
    const videos = await Video.find({user:userof});
    res.status(200).json({
        message: "Ok",
        data: videos,
    });
};

module.exports.getallvideo = async(req, res) => {
    const videos = await Video.find();
    res.status(200).json({
        message: "Ok",
        data: videos
    });
};

module.exports.vueVideo = async(req, res) => {
    var videoRef = await Video.findById(req.params.id);
    videoRef.views ++;
    try {
        const updatevideo = await Video.findByIdAndUpdate(req.params.id, {
            $set: videoRef,
        }, { new: true });
        res.send(videoRef);
    } catch (err) {
        res.send(err);
    }
};

module.exports.modifyvideo = async(req, res) => {
    try {
        const updatevideo = await Video.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.send(updatevideo);
    } catch (err) {
        res.send(err);
    }
};

module.exports.deletevideo = async(req, res) => {
    try {
        await Video.findByIdAndDelete(req.params.id)
        res.status(204).json({
            message: "Video is deleted"
        });
    } catch (err) {
        res.send(err).status(500);
    }
};

module.exports.encodingvideo = async(req, res) => {};