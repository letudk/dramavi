import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import routes from "./router/userRouter.js";
const app = express();
app.use(express.json());
const dotenv = env.config();
const PORT = process.env.PORT || 5000;
// router
app.use('/api/user', routes);

// connect database

mongoose.connect(process.env.MONDB_URL)
        .then( () => {
           app.listen( PORT, () => {
            console.log('Server runing on port %d', PORT);
           } ) 
        }).catch( (err) => console.log(err) );
