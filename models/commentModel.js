const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" // Reference to the post model
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

// export
module.exports = mongoose.model("Comment", commentSchema);
