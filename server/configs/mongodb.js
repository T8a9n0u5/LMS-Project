import mongoose from "mongoose";

// Connect to the MongoDB database

const connectDB = async () => {
    mongoose.connection.on('connceted', () => console.lognii('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URL}`)
}
export default connectDB 