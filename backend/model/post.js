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
        type: String,
        required: true,
    }
});

export default mongoose.model("post",postSchame);