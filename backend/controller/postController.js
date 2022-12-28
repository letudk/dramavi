import Posts from '../model/post.js';


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
    const post = new Posts({
        title,
        describe,
        image,
        user,
    });
    try {
        post.save();
    } catch (error) {
        return console.log(error);
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

    let post;
    try {
        post = await Posts.findByIdAndRemove(postId);
    } catch (error) {
        return console.log(error);
    }

    if(!post) {
        return res.status(500).json({message:"Khong the xoa bai viet"});
    }

    return res.status(200).json({message:"Xoa bai viet thanh cong"});
}