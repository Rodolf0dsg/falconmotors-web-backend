// routes/calendar.ts
import { Router } from "express";
import { createEvent } from "../controllers/calendar";

const router = Router();

router.post("/create", createEvent);

export default router;