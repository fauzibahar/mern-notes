import Notes from "../models/NoteModel.js";

// Create A Note
export const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    const data = await Notes.create({ title, description });

    if (!data) {
      throw new Error("An error occured while creating a note.");
    }

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured while creating a note..." });
  }
};

// Get All Notes
export const getNotes = async (req, res) => {
  try {
    const data = await Notes.find({});
    if (!data) {
      throw new Error("An error occured while fetching notes.");
    }

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured while fetching notes..." });
  }
};

// Get Note by ID
export const getNoteById = async (req, res) => {
  try {
    const noteId = req.params.id;
    const data = await Notes.findById(noteId);

    if (!data) {
      throw new Error("An error occured while fetching notes.");
    }

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured while fetching notes..." });
  }
};

// Update A Note
export const updateNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const { title, description } = req.body;

    const data = await Notes.findByIdAndUpdate(noteId, { title, description });

    if (!data) {
      throw new Error("An error occured while updating a note.");
    }

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured while updating a note..." });
  }
};

// Delete A Note by ID
export const deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const data = await Notes.findByIdAndDelete(noteId);

    if (!data) {
      throw new Error("An error occured while deleting a note.");
    }

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured while deleting a note..." });
  }
};
