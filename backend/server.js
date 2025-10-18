import express from 'express';
import cors from "cors";
import main from './db.js';
import Contact from './model/Contact.js';
import Docs from './model/Docs.js';
import NewUser from './model/Sign-up.js';
import ProductData from './model/Product-data.js';
import dotenv from 'dotenv';
dotenv.config();

// mongoose connected
main().then((res) => {
    console.log("connection successful");
}).
    catch(err => console.log(err));
// express connect
const app = express();
const PORT =process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:5173",                  // local dev
  "https://e-code-solutions-srr9.onrender.com"  // your actual frontend URL
];


app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json({ limit: "10mb" })); // increase limit to allow base64 images


app.listen(PORT, () => {
    console.log("server working on this port");
});

app.get("/", (req, res) => {
    res.send("hellow react");
})

// post store data
// contact 
app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ msg: "please fill all fields" });
        }
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ msg: "Message sent Successfully", data: newContact });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ msg: "server error" });
    }
});

// post data
// docs
app.post("/api/docs", async (req, res) => {
    try {
        const { name, email, idea } = req.body;
        if (!name || !email || !idea) {
            return res.status(400).json({ msg: "please fill all fields" });
        }
        const newDocs = new Docs({ name, email, idea });
        await newDocs.save();
        res.status(201).json({ msg: "Idea send Successfully", data: newDocs });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "server error sorry for that" });
    }
})

//  post 
// sign-up
app.post("/api/sign-up", async (req, res) => {
    try{
    const { name, email, password, role, companyName, agencyName, service } = req.body;
    if(!name || !email || !password || !role)
    {
        return res.status(400).json({msg:"Please fill all required fields "});
    }

    const existingUser = await NewUser.findOne({email});
    if(existingUser){
        return res.status(400).json({msg:"User already exists"});
    }

    const newUser = new NewUser({
        name,
        email,
        password,
        role,
        companyName,
        agencyName,
        service,
    });

    await newUser.save();

    res.status(201).json({
        msg:"User Registered successfully",
        data:newUser,
    });
    }catch(err){
        console.error(err);
        res.status(500).json({msg:"Server error . please try again later"});
    }
});


// check sign-in 
// post 

app.post("/api/sign-in", async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password)
        {
            return res.status(400).json({msg:"please provide email and password "});
        }
        const checkuser = await NewUser.findOne({email});
        if(!checkuser)
        {
            return res.status(400).json({msg:"User dose not exist"});
        }
        if(checkuser.password !==password){
            return res.status(400).json({msg:"Invaild Password"});
        }
        return res.status(200).json({msg:"Login successful ", data: checkuser});
    }catch(err){
        console.error(err);
        res.status(500).json({msg:"Server error"});
    }
});


// post method for product data

app.post("/api/addproducts", async (req, res) => {
  try {
    const { title, price, condition, rating, image, userId } = req.body;

    if (!title || !price || !condition) {
      return res.status(400).json({ msg: "Title, price, and condition are required" });
    }

    const addproduct = new ProductData({
      title,
      price,
      condition,
      rating: rating ? Number(rating) : 0, // ensure it's a number
      createdBy: userId || null,
      image: image || "",
    });

    await addproduct.save();
    res.status(201).json({ msg: "Product added successfully", data: addproduct });
  } catch (err) {
    console.error(err); // ← check this log to see exact error
    res.status(500).json({ msg: "Server error while adding product" });
  }
});



app.get("/api/items",async (req,res)=>{
    try {
        const product = await ProductData.find().sort({createdAt:-1});
        res.status(200).json(product);
    }catch(err){
        console.error(err);
        res.status(500).json({msg:"Server error while fetching products"});
    }
});


// Get products for a specific user
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
     await ProductData.findByIdAndDelete(id);
    res.status(200).json({ msg: "Product deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error deleting product" });
  }
});



app.get("/api/store/:id", async (req, res) => {
  try {
    const product = await ProductData.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    res.status(500).json({ msg: "Server error" });
  }
});


// Get user by ID (to fetch seller info separately)
app.get("/api/user/:id", async (req, res) => {
  try {
    const user = await NewUser.findById(req.params.id).select("name email");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error fetching user info" });
  }
});
