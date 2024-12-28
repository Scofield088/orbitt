const dotenv=require('dotenv')
dotenv.config()
const express=require('express');
const cors=require('cors')
const app=express();
const cookieParser=require('cookie-parser');
const connectToDb=require('./db/db');
const userRoutes=require('./routes/user.routes');
const groupRoomRoutes = require('./routes/group.routes');
connectToDb();
// app.use(cors({
//   origin: 'https://frontend-scog.onrender.com', // Allow the frontend domain
// }));
app.use(cors({
  origin: 'https://frontend-scog.onrender.com',  // Replace with your frontend domain
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Hello World!')
});

app.use('/user',userRoutes);
app.use('/group',groupRoomRoutes);

module.exports=app;
