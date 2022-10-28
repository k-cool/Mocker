import express from "express";
import apiRoute from "./api.route";

const router = express.Router();

router.use("/api", apiRoute);

export default router;
