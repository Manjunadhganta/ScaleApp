// const express = require("express")
// const mongoose = require('mongoose')
// const cors = require("cors")
// const UserModel = require('./models/Users')

// const app = express()
// app.use(express.json())
// app.use(cors())


// mongoose.connect("mongodb://127.0.0.1:27017/users");


// app.post('/login', (req,res)=>{
//     const {email, password} = req.body;
//     UserModel.findOne({email: email})
//     .then(user =>{
//         if(user) {
//             if(user.password === password){
//                 res.json("Success");
//             } else{
//                 res.json("Incorrect password")
//             }
//         } else{
//             res.json("No Record Found")
//         }
//     })
// })

// app.post('/register', (req,res)=>{
//     UserModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => req.json(err))
// })


// app.listen(3001, ()=>{
//     console.log("server is running");
    
// })


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const UserModel = require("./models/Users");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/users");

// const saltRounds = 10;


// app.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;


//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     await UserModel.create({ name, email, password: hashedPassword });
//     res.json("Success");
//   } catch (err) {
//     res.json(err);
//   }
// });


// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await UserModel.findOne({ email });
//     if (!user) return res.json("No record existed");

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.json("The password is incorrect");

//     res.json("Success");
//   } catch (err) {
//     res.json(err);
//   }
// });

// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const UserModel = require("./models/Users");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/users");

// const saltRounds = 10;
// const JWT_SECRET = "your_secret_key_here"; 


// app.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const existingUser = await UserModel.findOne({ email });
//     if (existingUser) return res.json("User already exists");

//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     await UserModel.create({ name, email, password: hashedPassword });
//     res.json("Success");
//   } catch (err) {
//     res.json(err);
//   }
// });


// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await UserModel.findOne({ email });
//     if (!user) return res.json("No record existed");

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.json("The password is incorrect");

   
//     const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
//       expiresIn: "1h", 
//     });

 
//     res.json({ status: "Success", token, user });
//   } catch (err) {
//     res.json(err);
//   }
// });


// app.get("/dashboard", verifyToken, async (req, res) => {
//   try {
//     const user = await UserModel.findById(req.user.id).select("-password");
//     res.json(user);
//   } catch (err) {
//     res.status(500).json("Error fetching user");
//   }
// });


// function verifyToken(req, res, next) {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) return res.status(401).json("No token provided");

//   const token = authHeader.split(" ")[1];

//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(403).json("Invalid token");
//     req.user = decoded;
//     next();
//   });
// }

// app.listen(3001, () => {
//   console.log("Server running on port 3001");
// });



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const UserModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/users");

const saltRounds = 10;


app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await UserModel.create({ name, email, password: hashedPassword });

    res.json({ message: "Success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) return res.json({ message: "No record existed" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ message: "The password is incorrect" });

    // Success
    res.json({ message: "Success", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
