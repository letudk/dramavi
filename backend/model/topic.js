import mongoose from "mongoose";

const Schema = mongoose.Schema;

const topicSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: false 
    },
    image:{
        type: String,
        required: false,
        default: "https://i.imgur.com/Rrb7Tl3_d.png"
    }
});

export default mongoose.model("topic", topicSchema);