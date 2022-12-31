import express from "express";
import { getAllPost, addPost, updatePost,getPostByID, deletePost, getPostByUserId} from "../controller/postController.js";
const router = express.Router();

router.get('/', getAllPost);
router.get('/:id', getPostByID);
router.get('/user/:id', getPostByUserId);
router.post('/add', addPost);
router.put('/update/:id', updatePost);
router.delete('/:id', deletePost);
export default router;