import express from "express";
import { createTour, getAllTours } from "../controllers/tourController.js";

const router = express.Router();

router.post("/createtour", createTour);
router.get("/", getAllTours);

export default router;
