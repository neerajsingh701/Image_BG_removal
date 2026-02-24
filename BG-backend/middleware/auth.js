

import jwt from 'jsonwebtoken';



const auth = async (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        console.log("Auth header", authHeader);  // debug

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized token missing'
            });
        }

        const token = authHeader.split(' ')[1];
        // debug
        console.log("Tokens", token);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // debug
        console.log("Decoded JWT", decoded);


        //user id attach
        req.user = { userId: decoded.id }
        next();

    } catch (error) {
        console.log("auth error", error)
        res.status(401).json({ error: 'Please authenticate. ' });
    }


}

export default auth;