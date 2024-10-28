import express, { Application, Request, Response, NextFunction  } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db_connect';
import fileUpload from 'express-fileupload';
import { errorHandler, notFound } from './middleware/errorMiddleware';
import cookieParser from 'cookie-parser';

dotenv.config();
// Called Database Connection Function
connectDB();

// Server app __ Initiating
const app: Application = express();


// A list of allow origins: Prevents malicious scripts from making unauthorized requests to another domain or website that a user is logged into
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options)); 

// Middleware :: to read body data
app.use(express.json()); // Parse incoming JSON payloads in the HTTP request body.
app.use(express.urlencoded({ extended: false })); // Parse incoming URL-encoded form data in the HTTP request body.

// Middleware to handle file uploads
app.use(fileUpload());

app.use(helmet()); // Set various HTTP headers to improve the security of an Express.js application.
app.use(cookieParser()); // Parse cookies for incoming requests
app.use(morgan('dev')) //  Log HTTP requests and responses in the "dev" format. 


// Middleware to set the Referrer-Policy header
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Referrer-Policy", "no-referrer-when-downgrade");
    next();
});


// Endpoints
app.use('/auth', require('./routes/authRoutes')) // Auth Routes EndpointEndpoint
app.use('/user', require('./routes/userRoutes')) // Auth Routes EndpointEndpoint
app.use('/upload', require('./routes/uploadRoutes')) // Upload Routes Endpoint
app.use('/campaign', require('./routes/campaignRoutes')) // Campaign Routes Endpoint


// Error Handling middleware
app.use(notFound);
app.use(errorHandler)


// Listening
const HOSTNAME: string = process.env.HOSTNAME || "localhost";
const PORT: number = parseInt(process.env.PORT || '5000', 10);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`.cyan.underline);
});

