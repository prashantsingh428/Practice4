import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js'; // ✅ extension added


const app = express();

// // ✅ Enable CORS
// app.use(cors({    
//     origin: process.env.CORS_ORIGIN,   
//     credentials: true  
// }));

app.use(cors({
  origin: "*",
  credentials: true,
}));


// ✅ Middlewares
app.use(express.json({ limit: '1mb' })); // fixed "limmit"
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

// ✅ Routes
app.use("/api/v1/users", userRouter);

// Example: http://localhost:5000/api/v1/users
export { app };
