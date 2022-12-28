import users from "../model/user.js";
import bcrypt from 'bcryptjs';

export const getAllUser = async(req,res, next) => {
    let user;
    try{
        user = await users.find();
    }catch(err){
       return console.log(err);
    }
    if( !user ){
        return res.status(404).json({ message:'Chua co user' });
    }
    return res.status(200).json({user});
}

export const signup = async(req, res, next) => {
    const {name,email,password} = req.body;
    let checkAvailedUser ;
    try{
        checkAvailedUser = await users.findOne({email});
    }catch(err){
        return console.log(err);
    }

    if(checkAvailedUser){
        return res.status(400).json({message:"Nguoi dung da ton tai"});
    }
    const hashPassword = bcrypt.hashSync(password);
    const user = new users({
        name,
        email,
        password: hashPassword,
    });
    try{
        user.save();
    }catch(err){
        return console.log(err);
    }
    return res.status(201).json({user});
} // end function signup

export const login = async(req,res,next) => {
    const {email,password} = req.body;
    let checkAvailedUser ;
    try{
        checkAvailedUser = await users.findOne({email});
    }catch(err){
        return console.log(err);
    }

    if(!checkAvailedUser){
        return res.status(404).json({message:"Nguoi dung khong ton tai"});
    }

    const isCorrectPassword = bcrypt.compareSync(password, checkAvailedUser.password);
    if(!isCorrectPassword){
        return res.status(404).json({message:"Dang nhap khong thanh cong"});
    }
    return res.status(201).json({message:"Dang nhap thanh cong"});
};