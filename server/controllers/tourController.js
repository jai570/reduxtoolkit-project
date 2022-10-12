import express from "express";
import Tour from "../models/tourModal.js";

export const createTour = async (req, res, next) => {
  const tour = req.body;
  // console.log(tour);
  console.log(tour, "comming from the req.body");

  try {
    const newTour = new Tour({
      ...tour,
    });
    await newTour.save();
    console.log(newTour);
    res.status(201).json(newTour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllTours = async (req, res, next) => {
  try {
    const tours = await Tour.find();
    res.status(201).json(tours);
  } catch (error) {
    res.status(500).json({ message: "someting went wrong" });
  }
};
