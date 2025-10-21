import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Upload an image
const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });

    // File uploaded successfully
    console.log("✅ File uploaded to Cloudinary:", response.url);

    // Remove the local file after upload
    fs.unlinkSync(filePath);

    return response;
  } catch (error) {
    // Remove the local file if upload failed
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    console.error("❌ Cloudinary upload failed:", error);
    return null;
  }
};

export { uploadOnCloudinary };
