


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongoDB.js';
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoute.js';


dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173',
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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//YNZ5Sgqdnq0JP0qf