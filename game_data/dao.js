import model from "./model.js";

export const findAllGameScores = () => model.find();
export const findGameScoreById = (id) => model.findById(id); // model.find({ _id: id });
export const creatScore = (score) => model.create(score); // Don't allow mutation of scores for now
export const deleteOne = (id) => model.deleteOne({ _id: id });
export const findGameScoresByUserId = (userId) => model.find({ userId: userId });
export const findGameScoresByGameId = (gameId) => model.find({ gameId: gameId });
export const findGameScoresByUserIdAndGameId = (userId, gameId) => model.find({ userId: userId, gameId: gameId });