const mongoose = require('mongoose')

// Route handler

const likeSchema = new mongoose.Schema({

    post : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"     //Reference to the post model
    },
    user: {
        type: String,
        required: true
    }
})


// Exports
module.exports = mongoose.model("Like", likeSchema)