import express from "express";
import {
  allBookings,
  bookVisit,
  cancelBooking,
  createUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", allBookings);
router.post("/cancelBooking/:id", cancelBooking);

export { router as userRoute };
