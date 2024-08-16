import model from "./model.js";

export const getCountryMetadata = () => model.find();
export const getCountryMetadataById = (id) => model.findById(id);
export const createCountryMetadata = (countryMetadata) => model.create(countryMetadata);
export const deleteCountryMetadata = (id) => model.deleteOne({ _id: id });
export const updateCountryMetadata = (id, numHaveTraveledTo, numOnBucketList) => model.updateOne({ _id: id }, { $set: { haveTraveledTo: numHaveTraveledTo, onBucketList: numOnBucketList } });