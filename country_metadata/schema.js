import mongoose from 'mongoose';
const Schema = new mongoose.Schema({
    countryId: { type: String, required: true },
    countryName: { type: String, required: true },
    numHaveTraveledTo: { type: Number, required: true },
    numOnBucketList: { type: Number, required: true },
},
    { collection: "country_metadata" }
);

export default Schema;