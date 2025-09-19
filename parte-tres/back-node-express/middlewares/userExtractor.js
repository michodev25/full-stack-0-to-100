import jwt from 'jsonwebtoken';
const userExtractor = (req, res, next) => {
    const authorization = req.headers.authorization;

    let token = null;
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    }
    let decodedToken = {};
    decodedToken = jwt.verify(token, process.env.JWT_SECRET)

    if (!token || !decodedToken.id) {
        console.log("❌ No tienes acceso:");
        res.status(401).json({ error: "Token invalido o se ha perdido" })
    }
    const { id: userid } = decodedToken;
    req.userid = userid;
    next();
}
export default userExtractor;