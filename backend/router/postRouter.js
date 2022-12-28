import express from "express";
import { getAllPost, addPost, updatePost,getPostByID, deletePost} from "../controller/postController";
const router = express.Router();

router.get('/', getAllPost);
router.get('/:id', getPostByID);
router.post('/add', addPost);
router.put('/update/:id', updatePost);
router.delete('/:id', deletePost);
export default router;