import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRETs
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // upload the file on coloudinary
        cloudinary.uploader.upload(localFilePath,{
            resource_type : 'auto'
        })
        // File has been uploaded suceessfully
        console.log('file is uploaded on cloudinary',response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) 
        return null;
    }
}

export {uploadOnCloudinary}