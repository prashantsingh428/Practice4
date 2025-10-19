import mongoose from 'mongoose';
import mongooseAggregatePaginate from 
'mongoose-aggregate-paginate-v2';
import bcrypt from "bcrypt"


const videoSchema  = new Schema(
    {
        videoFile: {
            type:String,
            required: true,
        },

        thumbnails:{
            type:String,
            required: true, 
        },

        title:{
            type:String,
            required: true,    
        },

        description:{
            type: String,
            required: true,    
        },

        duration:{
            type: Number,
            required: true,    
        },

        views:{
            type:Numbers,
            default: 0
        },

        isPublished:{
            type:Boolean,
            default:true
        },

        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timeStamps: true
    }
)


videoSchema.plugins(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)






