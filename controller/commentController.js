// Impoet models
const Comment = require('../models/commentModel')
const Post = require('../models/postModel')

exports.createComment = async (req, res) => {

    try {
        const {post, body, user} = req.body;

        const comment = new Comment({
            post, body, user
        })
    
        // Add entry in DB
        const savedComment = await comment.save();
    
        // Find the post by ID, add the comment to its comment's array
        const updatedPost = Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})
                            .populate("comments")
                            .exec();
    
        res.json({
            post: updatedPost
        })        
    } 
    catch (error) {
        return res.status(500).json({
            error: "Error while creating comment"
        })
    }

}