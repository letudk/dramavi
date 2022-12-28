import Topics from "../model/topic.js";

export const getAllTopic = async(req,res,next) => {
    let topic;
    try {
        topic = await Topics.find();
    }catch(err) {
        return console.log(err);
    }
    if(!topic){
        return res.status(404).json({message: "Chua co chu de"});
    }
    return res.status(201).json({topic});
}

export const createrTopic = async(req, res,next) => {
    let checkTopicAvailed;
    const {name,slug,image,desc} = req.body;

    try {
        checkTopicAvailed = await Topics.findOne({name});
    } catch(err){
        return res.status(400).json({message:"Khong lay duoc du lieu"})
    }

    const topic = new Topics({
        name: name,
        slug: slug,
        image: image,
        desc: desc
    });

    try{
        topic.save();
    }catch(err){
        return console.log(err);
    }
    return res.status(201).json({topic});
}