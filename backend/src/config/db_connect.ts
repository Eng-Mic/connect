import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();

mongoose.set('strictQuery', true);

// Connection function
const connectDB = async (): Promise<void> => {
    try {
        const URI = process.env.MONGO_URI;
        if (!URI) {
            throw new Error("MONGO_URI is not defined in the environment variables.");
        }
        // console.log(`Connecting to MongoDB at URI: ${URI}`); // Debugging line

        const conn = await mongoose.connect(URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message.red);
        } else {
            console.log('An unexpected error occurred'.red);
        }
        // exit the process with failure of 1
        process.exit(1);
    }
};

export default connectDB;