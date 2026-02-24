
import express from 'express';
import { login, register, getCurrentUser } from '../controllers/userController.js';
import auth from '../middleware/auth.js';


const userRouter = express.Router();

// userRouter.get('/me', auth, async (req, res) => {
//     try {
//         const user = await user.findById(req.user.userId).select('-password');
//         if (!user) return res.status(404).json({ success: false, message: 'User not found' });
//         res.json({ success: true, user })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
// })





userRouter.post('/register', register);
userRouter.post('/login', login);
// userRouter.get('/me', getCurrentUser);
userRouter.get('/me', auth, getCurrentUser);

export default userRouter;