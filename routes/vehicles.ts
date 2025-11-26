import { Router } from "express";
import { createVehicle, getVehicleById, getVehicles, SEED } from "../controllers/vehicle";

const router = Router();

router.get('/seed', SEED);

router.get('/', getVehicles );

router.get('/:id', getVehicleById );

router.post('/secretPost', createVehicle );

export default router;