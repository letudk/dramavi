import mongoose from 'mongoose';
// import post from '../model/post.js';
import Posts from '../model/post.js';
import User from '../model/user.js';
// import Topic from '../model/topic.js';

export const getAllPost = async(req,res,next) =>{
    let post;

    try {
        post = await Posts.find();
    } catch (error) {
        return console.log(error);
    }
    if(!post){
        return res.status(404).json({message:"Khong co du lieu bai viet"});
    }
    return res.status(201).json({post});
};

export const addPost = async(req,res,next) => {
    const {title,describe,image,user} = req.body;

    let existingUser;
    let existingTopic;

    try {
        existingUser = await User.findById(user);
    } catch (error) {
        return console.log(error);
    }

    if(!existingUser){
        return res.status(400).json({message:"Nguoi dung khong ton tai"});
    }

    const post = new Posts({
        title,
        describe,
        image,
        user,
    });
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await post.save({session});
        existingUser.post.push(post);
        await existingUser.save({session});
        await session.commitTransaction();
    } catch (error) {
        return res.status(500).json({message:error});
    }
    return res.status(200).json({post});
}

export const updatePost = async(req,res,next) =>{
    const {title, describe,image} = req.body;
    const blogId = req.params.id;
    let post;
     
    try {
        post = await Posts.findByIdAndUpdate(blogId, {
            title,
            describe,
            image
        })
    } catch (error) {
        return console.log(error);
    }
    if(!post) {
        return res.status(500).json({message:"Khong the cap nhat"});
    }

    return res.status(200).json({post});
};

export const getPostByID = async(req,res,next) => {
    const blogID = req.params.id;
    let post;

    try {
        post = await Posts.findById(blogID);
    } catch (error) {
        return console.log(error);
    }

    if(!post) {
        return res.status(404).json({message:"Bai viet khong ton tai"});
    }

    return res.status(200).json({post});
};

export const deletePost = async(req,res,next) => {
    const postId = req.params.id;

    let postD;
    try {
        postD = await Posts.findByIdAndRemove(postId).populate('user');
        await postD.user.post.pull(postD);
        await postD.user.save();
    } catch (error) {
        return console.log(error);
    }

    if(!postD) {
        return res.status(500).json({message:"Khong the xoa bai viet"});
    }

    return res.status(200).json({message:"Xoa bai viet thanh cong"});
}

export const getPostByUserId = async(req,res,next) => {
    const userID = req.params.id;
    let userPost;
    try {
        userPost = await User.findById(userID).populate('post');

    } catch (error) {
        return console.log(error);
    }

    if(!userPost){
        return res.status(404).json({message:"No blog found"});
    }
    return res.status(200).json({Posts:userPost});
}