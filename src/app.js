import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// Enable CORS for all origins
app.use(cors({    //Enables CORS middleware
    origin: process.env.CORS_ORIGIN ,   //This sets which frontend URL is allowed to access your backend.
    credentials: true   //	Allows cookies or auth tokens to be shared
}));

app.use(express.json({limmit: '1mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());


export {app} ;

// | Middleware             | Purpose                         | Example Use                |
// | ---------------------- | ------------------------------- | -------------------------- |
// | `express.json()`       | Parse JSON data in request body | API requests from frontend |
// | `express.urlencoded()` | Parse form data                 | HTML forms                 |
// | `express.static()`     | Serve static files              | Images, CSS, JS, uploads   |
// | `cookieParser()`       | Read cookies from requests      | Authentication, sessions   |
