

import user from "../models/UserModal.js";
import bcrypt from 'bcryptjs';
import jwt, { decode } from 'jsonwebtoken';

const register = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: "Please fill all the fields" });
        }

        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new user({
            username,
            email,
            password: hashedPassword
        });



        const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '7d' })

        await newUser.save();

        newUser.password = undefined;

        res.cookie("token", token, {
            httpOnly: false,
            secure: false,
            sameSite: 'Lax',
            maxAge: 7 * 24 * 60 * 60 * 1000  //7 days
        })

        res.status(201).json({ success: true, message: "User registered successfully", user: newUser, token })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" })
    }

}

const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "please fill all the fields" });
        }

        const existingUser = await user.findOne({ email });
        if (!existingUser) {

            return res.status(400).json({ success: false, message: "User doesn't exists" });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: existingUser._id, email: existingUser.email }, process.env.JWT_SECRET, { expiresIn: '7d' })

        existingUser.password = undefined;

        res.cookie("token", token, {
            httpOnly: false,
            secure: false,
            sameSite: 'Lax',
            maxAge: 7 * 24 * 60 * 60 * 1000  //7 days
        })

        res.status(200).json({ success: true, message: "User Logged in successfully", user: existingUser, token })





    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" })

    }
}

// the below code for comforming the token when the page is reload and if the
// user is logged in then it stay in login page until it click on logout

const getCurrentUser = async (req, res) => {

    try {
        const userId = req.user.userId;

        const existinguser = await user.findById(req.user.userId).select('-password');

        if (!existinguser) {
            return res.status(404).json({
                success: false, message: "User not found"
            });

        }

        res.status(200).json({
            success: true,
            user: existinguser
        });



    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Inter server error" });

    }
}

export { register, login, getCurrentUser }
