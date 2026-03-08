import express from "express";
import { Flight } from "../schemas.js";

const router = express.Router();

// Add new flight
router.post("/add", async (req,res)=>{

const flight = new Flight(req.body);

await flight.save();

res.json({message:"Flight added successfully"});

});

// Get all flights
router.get("/all", async (req,res)=>{

const flights = await Flight.find();

res.json(flights);

});

export default router;