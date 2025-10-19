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

        fullName :{
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



//This code automatically hashes the user’s 
// password before saving it to MongoDB.

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hashSync(this.password, 10)  //The number 10 is the salt rounds —  higher number = stronger encryption (but slower).
    next()
})


//🔐Second Part: Method for Password Checking
userSchema.methods.isPasswordCorrect = async function(password) {
   return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
       {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName
       },
       process.env.ACCESS_TOKEN_SECRET,
       {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
       }
    )
}
userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
         _id: this._id,
         
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
         expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
     )
}
export const User = mongoose.model('User', userSchema);