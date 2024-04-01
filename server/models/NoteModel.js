import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default mongoose.model("Note", NoteSchema);
