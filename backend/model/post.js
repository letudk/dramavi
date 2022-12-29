import mongoose from "mongoose";
const schema = mongoose.Schema;

const postSchame = new schema({
    title:{
        type: String,
        required: [true, 'Please input title post']
    },
    describe:{
        type: String,
        required: false
    },
    image: {
        type: String,
        required: true
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
});

export default mongoose.model("Post",postSchame);