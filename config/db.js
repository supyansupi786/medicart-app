import mongoose from "mongoose";
import colors from "colors";
const ConnectURI = "mongodb://localhost:27017/medicine";  
const connectDB = async () => {
  try {
    await mongoose.connect(ConnectURI);
    console.log(
      `Conneted To Mongodb Databse `.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

 export default connectDB;
