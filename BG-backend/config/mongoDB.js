

import mongoose from "mongoose";

const connectDB = async () => {
    try {

        await mongoose.connect(`${process.env.MONGODB_URI}/bgremoval`);
        console.log("Database Connected Successfully");
    }
    catch (err) {
        console.log("MongoDB Connection Error", err)
        process.exit(1);
    }
}

export default connectDB