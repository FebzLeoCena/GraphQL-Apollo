import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  name: String,
  description: String,
  createdAt: String,
  thumbsUp: Number,
  thumbsDown: Number,
});
const Recipe = model("Recipe", recipeSchema);
export default Recipe;
