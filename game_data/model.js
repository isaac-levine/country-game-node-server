import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("game_data", schema);
export default model;