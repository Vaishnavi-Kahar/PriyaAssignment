
const express = require("express");
const router = express.Router();
const FloorPlan = require("../models/FloorPlanModel");

// GET all floor plans
router.get('/floorplans', async (req, res) => {
  try {
    const floorPlans = await FloorPlan.findAll();
    res.json(floorPlans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single floor plan by ID
router.get('/floorplans/:id', async (req, res) => {
  try {
    const floorPlan = await FloorPlan.findById(req.params.id);
    if (floorPlan) {
      res.json(floorPlan);
    } else {
      res.status(404).json({ message: 'Floor plan not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new floor plan
router.post('/add-floorplan', async (req, res) => {
  const floorPlan = new FloorPlan(req.body);
  try {
    const newFloorPlan = await floorPlan.save();
    res.status(201).json(newFloorPlan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update a floor plan by ID
router.put('/update-floorplan/:id', async (req, res) => {
  try {
    const floorPlan = await FloorPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (floorPlan) {
      res.json(floorPlan);
    } else {
      res.status(404).json({ message: 'Floor plan not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH update a floor plan by ID
router.patch('/update-floorplan/:id', async (req, res) => {
  try {
    const floorPlan = await FloorPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (floorPlan) {
      res.json(floorPlan);
    } else {
      res.status(404).json({ message: 'Floor plan not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH update a seat in a floor plan by seat number
router.patch('/floorplans/:id/seats/:seatNumber', async (req, res) => {
  try {
    const floorPlan = await FloorPlan.findById(req.params.id);
    if (!floorPlan) {
      return res.status(404).json({ message: 'Floor plan not found' });
    }
    const seatIndex = floorPlan.seats.findIndex(seat => seat.seatNumber === req.params.seatNumber);
    if (seatIndex === -1) {
      return res.status(404).json({ message: 'Seat not found' });
    }
    floorPlan.seats[seatIndex] = { ...floorPlan.seats[seatIndex], ...req.body };
    await floorPlan.save();
    res.json(floorPlan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH update a room in a floor plan by room number
router.patch('/floorplans/:id/rooms/:roomNumber', async (req, res) => {
  try {
    const floorPlan = await FloorPlan.findById(req.params.id);
    if (!floorPlan) {
      return res.status(404).json({ message: 'Floor plan not found' });
    }
    const roomIndex = floorPlan.rooms.findIndex(room => room.roomNumber === req.params.roomNumber);
    if (roomIndex === -1) {
      return res.status(404).json({ message: 'Room not found' });
    }
    floorPlan.rooms[roomIndex] = { ...floorPlan.rooms[roomIndex], ...req.body };
    await floorPlan.save();
    res.json(floorPlan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; // Ensure router is correctly exported


