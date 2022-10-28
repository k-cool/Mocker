import express from "express";
import { createCtrl } from "../controllers";

const router = express.Router();

router.post("/create", createCtrl);

export default router;
