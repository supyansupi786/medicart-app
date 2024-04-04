import mongoose from "mongoose";
import colors from "colors";
// const ConnectURI = "mongodb://localhost:27017/medicine";  
// const ConnectURI = mongodb+srv://supyan:7338091921@ecommerce.07f8bot.mongodb.net/ecommerce;  
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse `.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};


 export default connectDB;
