import { Request, Response } from "express";
import { Comment } from "../models/Comment";
import { badWords } from "../data/badWords";

export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 }).lean();
    return res.json({ data: comments });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al obtener comentarios" });
  }
};

export const createComment = async (req: Request, res: Response) => {
  try {
    const { name, stars, text } = req.body;

    // Validaciones adicionales
    if (!name || !stars || !text) {
      return res.status(400).json({ msg: "Todos los campos son obligatorios" });
    }

    if (stars < 1 || stars > 5) {
      return res.status(400).json({ msg: "Las estrellas deben estar entre 1 y 5" });
    }

    //groserías
    const normalize = (str: string) =>
      str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const hasBadWords = badWords.some(word =>
      normalize(text).includes(normalize(word))
    );

    if (hasBadWords) {
      return res.status(400).json({ msg: "El comentario contiene lenguaje inapropiado" });
    }

    const comment = new Comment({ name, stars, text });
    await comment.save();

    return res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al crear comentario" });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findByIdAndDelete(id);

    if (!comment) {
      return res.status(404).json({ msg: "Comentario no encontrado" });
    }

    return res.status(200).json({ msg: "Comentario eliminado" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al eliminar comentario" });
  }
}