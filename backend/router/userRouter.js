import express from "express";
import { getAllUser, signup, login } from "../controller/userController.js";
const routes = express.Router();

routes.get('/', getAllUser);
routes.post('/signup', signup);
routes.post('/login', login);

export default routes;