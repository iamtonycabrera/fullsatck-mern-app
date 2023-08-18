import express from "express";
import {
  addToFav,
  allBookings,
  allFavorites,
  bookVisit,
  cancelBooking,
  createUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", allBookings);
router.post("/cancelBooking/:id", cancelBooking);
router.post("/addToFav/:rid", addToFav);
router.post("/allFavorites", allFavorites);

export { router as userRoute };
