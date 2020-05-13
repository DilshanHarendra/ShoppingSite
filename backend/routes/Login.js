require ('dotenv').config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const core = require("cors");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

router.use(bodyParser());
router.use(core());

const User ={
  id:1,
  email: 'vidula@gmail.com',
  password: '1234',
}

const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
]

router.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'process.env.ACCESS_TOKEN_SECRET'
};

const strategy = new JwtStrategy(opts, (payload, next) => {
  User.forge({ id: payload.id }).fetch().then(res => {
    next(null, res);
  });
});

passport.use(strategy);
router.use(passport.initialize());
//router.use(bodyParser);
const payload = { id: User.id};
router.post('/getToken', (req, res) => {

  
  // if (!req.body.email || !req.body.password) {
  //   return res.status(401).send('no fields');
  // }
 
const username=req.body.username
const user={name:username}
   // authenticate(req.body.password).then(user => {
     
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      //res.send(token);
      res.json({accessToken:token})
    //}).catch(err => {
      //return res.status(401).send({ err });
    //});
  
}
);

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
res.send('i\'m protected');
});

router.get('/getUser', passport.authenticate('jwt', { session: false }), (req, res) => {
console.log(req.headers);
res.send(req.user);
});


function authenticateToken(req,res,next){
const authHeader=req.headers['authorization']
const token=authHeader && authHeader.split(' ')[1]
if(token==null) return res.sendStatus(401)

jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user)=>{

  if(err) return res.sendStatus(403)
  req.user=user;
  next();

});


}
// const appUsers = {
//   "vidula@gmail.com": {
//     email: "vidula@gmail.com",
//     name: "vidula",
//     pw: "1234",
//   },
// };

// const serverJWT_Secret = "KpTxN=)7mX3W3SEJ58Ubt8-";

// const jwtMiddleware = (req, res, next) => {
  
//     const authString = req.headers['authorization'];
//     if(typeof authString === 'string' && authString.indexOf(' ') > -1) {
//       const authArray = authString.split(' ');
//       const token = authArray[1];
//       jwt.verify(token, serverJWT_Secret, (err, decoded) => {
//         if(err) {
//           res.sendStatus(403);
//         } else {
//           req.decoded = decoded;
//           next();
//         }
//       });
//     } else {
//       res.sendStatus(403);
//     }
//   };

// const validatePayloadMiddleware = (req, res, next) => {
//   if (req.body) {
//     next();
//   } else {
//     res.status(403).send({
//       errorMessage: "You need a payload",
//     });
//   }
// };

// router.post("/login", validatePayloadMiddleware, (req, res) => {
//   const user = appUsers[req.body.email];
//   if (user && user.pw === req.body.password) {
//     const userWithoutPassword = { ...user };
//     delete userWithoutPassword.pw;

//     const token = jwt.sign(userWithoutPassword, serverJWT_Secret);
//     res.status(200).send({
//       user: userWithoutPassword,
//       token: token,
//     });
//   } else {
//     res.status(403).send({
//       errorMessage: "permission denied",
//     });
//   }
// });
router.get("/",authenticateToken, function (req, res) {
  res.send("hello");
});
module.exports = router;
