import model from "./model.js";

export const findAllLikes = () => model.find();
export const createUserLikesCountry = (userId, countryCode, countryName) =>
  model.create({ userId: userId, countryCode: countryCode, haveTraveledTo: false, onBucketList: false, countryName: countryName });
export const findCountriesUserLikes = (userId) => model.find({ userId: userId });
export const findUsersWhoLikeCountry = (countryCode) =>
  model.find({ countryCode: countryCode });
export const UpdateUserLikesCountry = (userId, countryCode, haveTraveledTo, onBucketList) =>
model.updateOne(
  { userId: userId, countryCode: countryCode },
  { $set: { haveTraveledTo: haveTraveledTo, onBucketList: onBucketList } }
);
export const userLikesCountry = (userId, countryCode) =>
  model.find({ userId: userId, countryCode: countryCode });
export const countriesUserHasTraveledTo = (userId) =>
  model.find({ userId: userId, haveTraveledTo: true });
export const countriesUserHasOnBucketList = (userId) =>
  model.find({ userId: userId, onBucketList: true });
export const deleteLike = (userId, countryCode) =>
  model.deleteOne({ userId: userId, countryCode: countryCode });
export const getBucketListByCountry = (countryCode) =>
  model.find({ countryCode: countryCode, onBucketList: true });
export const getTraveledToByCountry = (countryCode) =>
  model.find({ countryCode: countryCode, haveTraveledTo: true });