import express from "express";
import {
  addFood,
  getAllFoods,
  getTags,
} from "../controllers/FoodController.js";

const router = express.Router();

router.get("/getfoods", getAllFoods);
router.post("/addfood", addFood);
router.get("/gettags", getTags);

export default router;
