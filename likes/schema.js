import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    countryCode: String,
    haveTraveledTo: Boolean,
    onBucketList: Boolean,
  },
  { collection: "likes" }
);
export default schema;