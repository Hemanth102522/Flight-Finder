import bookingRoutes from "./routes/bookings.js";
import flightRoutes from "./routes/flights.js";
import authRoutes from "./routes/auth.js";
import express from "express";
import mongoose from "mongoose";
import "./schemas.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
"mongodb+srv://admin:admin123@cluster0.drvyxpz.mongodb.net/flights"
)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/",(req,res)=>{
res.send("Flight Booking Server Running");
});

app.listen(6001,()=>{
console.log("Server running on port 6001");
});