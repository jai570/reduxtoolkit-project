import jwt, { decode } from "jsonwebtoken";
import User from "../models/userModal.js";
const secret = "jaikishantest";
const auth = async (req,res,next)=>{
    try {
        const userToken = req.header.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;
        if(token && isCustomAuth){
            decodedData = jwt.verify(token, secret);
            req.userId = decodedData?.id;
        }
        console.log(userToken);
    } catch (error) {
        console.log(error); 
    } 
}