import pkg from 'jsonwebtoken';
const { verify } = pkg;

export default function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] 
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        const decoded = verify(token, 'secret123')
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован"})
    }
};
