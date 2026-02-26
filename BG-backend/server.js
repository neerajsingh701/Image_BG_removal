


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongoDB.js';
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoute.js';


dotenv.config();

const app = express();

// modifyed for starting thr database




app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://image-bg-removal-tau.vercel.app"
    ],
    credentials: true
}));

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/images', imageRouter);


// just checking for the my backend is running or not 
// sending response in browser
app.get("/", (req, res) => {
    res.send("API Running 🚀");
});


const startServer = async () => {
    try {
        connectDB();
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });


    } catch (error) {
        console.log("Failed to start server", error)
        process.exit(1);

    }
}

startServer();


//YNZ5Sgqdnq0JP0qf