import express from "express";
import { Booking, Flight } from "../schemas.js";

const router = express.Router();


// CREATE BOOKING
router.post("/book", async (req,res)=>{

try{

const booking = new Booking(req.body);

await booking.save();

res.json({message:"Booking successful"});

}catch(err){

console.log(err);
res.status(500).json({error:"Booking failed"});

}

});


// GET ALL BOOKINGS WITH FLIGHT DETAILS
router.get("/all", async (req,res)=>{

try{

const bookings = await Booking.find();

const result = [];

for(let booking of bookings){

const flight = await Flight.findById(booking.flightId);

result.push({
...booking._doc,
flight: flight
});

}

res.json(result);

}catch(err){

console.log(err);
res.status(500).json({error:"Failed to fetch bookings"});

}

});


// DELETE BOOKING
router.delete("/cancel/:id", async (req,res)=>{

try{

await Booking.findByIdAndDelete(req.params.id);

res.json({message:"Booking Cancelled"});

}catch(err){

console.log(err);
res.status(500).json({error:"Cancel failed"});

}

});


export default router;