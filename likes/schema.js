import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    uId : {type : String, required : true},
    countryCode: {type : String, required : true},
    haveTraveledTo: {type : Boolean, required : true},
    onBucketList: {type : Boolean, required : true},
  },
  { collection: "likes" }
);
export default schema;