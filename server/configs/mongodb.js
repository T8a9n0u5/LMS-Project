import mongoose from "mongoose";

// Connect to the MongoDB database

const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGODB_URL}`).then(()=>console.log("connected"))
}
export default connectDB 