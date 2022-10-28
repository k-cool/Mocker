import express from "express";
import { apiCtrl } from "../controllers";

const router = express.Router();

router.post("/create", apiCtrl.create);

export default router;
