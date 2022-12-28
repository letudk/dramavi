import express from "express";
import {getAllTopic, createrTopic} from "../controller/topicController.js";
const routes = express.Router();

routes.get('/',getAllTopic);
routes.post('/creater', createrTopic);
export default routes;