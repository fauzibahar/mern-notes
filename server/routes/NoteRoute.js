import express from "express";
import { createNote, deleteNote, getNoteById, getNotes, updateNote } from "../controllers/Note.js";

const router = express.Router();

router.get("/api/notes", getNotes);
router.post("/api/notes", createNote);
router.get("/api/notes/:id", getNoteById);
router.put("/api/notes/:id", updateNote);
router.delete("/api/notes/:id", deleteNote);

export default router;
