const express = require('express');
const authRouter = express.Router();
const userModel=require('../Models/userModel');

authRouter
    .route('/signup')
    .post(postSignup)
    .patch(patchSignup)

authRouter
    .route('/login')
    .post(loginUser)

async function postSignup(req, res) {
    try {
        const data = req.body;
        const user = await userModel.create(data);
        res.status(201).json({
            message: "User Signed Up Successfully",
            data: user
        })
    } 
    catch(error){
        res.status(500).json({
            message:"Error Signing Up User",
            Error:error.message
        });
    }
    
}

async function patchSignup(req, res) {
    try {
        const { email, ...dataForUpdate } = req.body;
        if (!email) {
            return res.status(400).json({
                message: "Email is required to update the details",
            });
        }
        const updatedUser = await userModel.findOneAndUpdate(
            { email: email }, dataForUpdate, { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.json({
            message: "Details updated successfully",
            data: updatedUser
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Error updating user details",
            Error: error.message
        });
    }
}

async function loginUser(req,res){
    try{
        const loginData=req.body;
        if(loginData.number){
            const user= await userModel.findOne({number:loginData.number});
            if(user){
                if(user.password==loginData.password){
                    return res.json({
                        message:"User logged in successfully",
                        userDetails:loginData
                    })
                } else {
                    res.json({
                        message:"Credentials Mismatch"
                    })
                }
            }
        }
        else {
            res.json({
                message:"Mobile Number required for Login"
            })
        }
    } catch(error){
        res.status(500).json({
            message:"Error found while logging in",
            Error : error.message
        })
    }
}

module.exports=authRouter;