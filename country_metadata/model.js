import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("country_metadata", schema);
export default model;