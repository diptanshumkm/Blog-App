
//import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like a post

exports.likePost = async (req,res) => {
    try {
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        //update the post collection basis on this
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id} }, {new :true})
        .populate("likes").exec();

        res.json({
            post:udpatedPost,
        });

    }
    catch(error) { 
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}
