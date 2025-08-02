const express=require('express');
const app=express();
const mongoose = require('mongoose');
const cors=require('cors');

require('dotenv').config();

app.use(cors({
    origin: process.env.REACT_APP_FRONTEND_URL,
    methods: ['GET', 'POST'],
    credentials: true,
    optionsSuccessStatus: 200, // For legacy browser support
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.use(express.json());
const dblink=process.env.MONGODB_URI;

mongoose.connect(dblink, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

//Routers

const userRouter=require('./Routers/userRouter.js');
const authRouter=require('./Routers/authRouter.js');
const evbikeRouter=require('./Routers/evbikeRouter.js');
const contractRouter = require('./Routers/contrcatRoute.js'); 

app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/api/bikes', evbikeRouter);
app.use('/api/contract-form', contractRouter);

app.listen(5000,()=>{
    console.log("server is listening on port 5000");
    
});