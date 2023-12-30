import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: '../.env'
})

connectDB()
  .then(() => {
    app.listen(process.env.PORT_NUMBER || 3000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT_NUMBER}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
