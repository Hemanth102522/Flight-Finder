import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
username:String,
email:String,
password:String,
usertype:String
});

const flightSchema = new mongoose.Schema({
flightName:String,
origin:String,
destination:String,
basePrice:Number
});

const bookingSchema = new mongoose.Schema({
flightId:String,
userId:String
});

export const User = mongoose.model("User",userSchema);
export const Flight = mongoose.model("Flight",flightSchema);
export const Booking = mongoose.model("Booking",bookingSchema);