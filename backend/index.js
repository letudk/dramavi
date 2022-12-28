import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import routesUser from "./router/userRouter.js";
import routerTopic from './router/topicRouter.js';
import routerPost from './router/postRouter.js';
const app = express();
app.use(express.json());
const dotenv = env.config();
const PORT = process.env.PORT || 5000;
// router
app.use('/api/user', routesUser);
app.use('/api/topic', routerTopic);
app.use('/api/post', routerPost);
// connect database

mongoose.connect(process.env.MONDB_URL)
        .then( () => {
           app.listen( PORT, () => {
            console.log('Server runing on port %d', PORT);
           } ) 
        }).catch( (err) => console.log(err) );
