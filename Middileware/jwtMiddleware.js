const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log('inside jwt middleware');
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token);

    try {
        const jwtResponce = jwt.verify(token,"supersecretkey12345")
        console.log(jwtResponce);
        req.payload = jwtResponce.userId
        next()

    } catch (err) {
        res.status(401).json('Authorization failed..... please login')
    }
    
}

module.exports = jwtMiddleware