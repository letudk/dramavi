import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email :{
        type: String,
        required: [true, 'Please input email'],
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            "Please input valid email"
        ]
    },
    password:{
        type: String,
        required: [true, 'Please input password'],
        minlength: 5
    },
    avatar: {
        type: String,
        required:false,
        default: "https://i.imgur.com/Rrb7Tl3_d.png"
    },
    status: {
        type: String,
        required: false,
        default: "active"
    }
})

export default mongoose.model("user", userSchema);