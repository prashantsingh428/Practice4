// import {asyncHandler} from '../utils/asyncHandler.js';


// const registerUser = asyncHandler(async (req, res) => {
//     // Registration logic here
//     // res.status(200).json({
//     //     message: 'User registered successfully fine' ,
//     // })

//     // get user details from frontend
//     //validation - not empty
//     //check if user already exists
//     // upload them to cloudinary,avatar
//     //crate user in object - create entry in db 
//     // remove password and refresh token from response
//     //check for user creation success
//     //return res

//     const {fullName , email , userName, password} = req.body
//     console.log("email:", email); 
// })

// export {registerUser,}



// src/controllers/user.controllers.js
import { asyncHandler } from '../utils/asyncHandler.js';

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  const { fullName, email, userName, password } = req.body;

  console.log("📩 Received user data:", { fullName, email, userName });

  // simple validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  // success response (for now just testing)
  return res.status(201).json({
    success: true,
    message: "User registered successfully.",
    data: { fullName, email, userName },
  });
});

export { registerUser };
