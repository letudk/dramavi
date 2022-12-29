import express from "express";
import { getAllUser, signup, login, deleteUser,updateUser,getUserById } from "../controller/userController.js";
const routes = express.Router();

routes.get('/', getAllUser);
routes.get('/:id', getUserById);
routes.post('/signup', signup);
routes.post('/login', login);
routes.delete('/:id', deleteUser);
routes.put('/update/:id', updateUser);

export default routes;