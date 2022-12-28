import express from "express";
import { getAllUser, signup, login, deleteUser,updateUser } from "../controller/userController.js";
const routes = express.Router();

routes.get('/', getAllUser);
routes.post('/signup', signup);
routes.post('/login', login);
routes.post('/delete', deleteUser);
routes.post('/update', updateUser);

export default routes;