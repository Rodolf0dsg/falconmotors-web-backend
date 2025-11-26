import { Router } from "express";
import { createComment, deleteComment, getComments } from "../controllers/comment";
import { check } from "express-validator";
import { validationResults } from "../middlewares/validationResults";

const router = Router();

// Definir las rutas para los comentarios
router.get('/', getComments);

router.post('/', [
    check('name').trim().escape(),
    check('name', 'El nombre es obigatorio').not().isEmpty(),
    check('text').trim().escape(),
    check('text', 'El comentario es obligatorio').not().isEmpty(),
    check('stars', 'Las estrellas deben ser un número entre 1 y 5').isInt({ min: 1, max: 5 }),
    validationResults,
], createComment);

router.delete('/:id', deleteComment);

export default router;