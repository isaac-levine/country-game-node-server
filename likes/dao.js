import model from "./model.js";

export const findAllLikes = () => model.find();
export const createUserLikesCountry = (user, countryCode) =>
  model.create({ user: user, countryCode: countryCode, haveTraveledTo: false, onBucketList: false });
export const findCountriesUserLikes = (userId) => model.find({ user: userId });
export const findUsersWhoLikeCountry = (countryCode) =>
  model.find({ countryCode: countryCode });
export const UpdateUserLikesCountry = (user, countryCode, haveTraveledTo, onBucketList) =>
  model.updateOne({ user: user, countryCode: countryCode }, { haveTraveledTo: haveTraveledTo, onBucketList: onBucketList });
export const userLikesCountry = (user, countryCode) =>
  model.find({ user: user, countryCode: countryCode });
export const countriesUserHasTraveledTo = (user) =>
  model.find({ user: user, haveTraveledTo: true });
export const countriesUserHasOnBucketList = (user) =>
  model.find({ user: user, onBucketList: true });
export const deleteLike = (user, countryCode) =>
  model.deleteOne({ user: user, countryCode: countryCode });