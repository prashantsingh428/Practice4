import mongoose from 'mongoose';
 
const userSchema = new mongoose.Schema(
    {
        username :{
            type:Sring,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },

        email :{
            type:Sring,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },

        fullname :{
            type:Sring,
            required:true,
            trim:true,
            index:true
        },

        avatar :{
            type:Sring, //cloudinary
            required:true,
        },

        coverImage :{
            type:Sring,
        },

        watchHistory :[
            {
                type: Schema.Types.ObjectId,
                ref: "video"
            }
        ],

        password: {
            type: String,
            required: [true,"Password is required"]
        },

        refreshToken:{
            type:String, 
        },
    },
    {
        timestamps: true
    }
)





export const User = mongoose.model('User', userSchema);