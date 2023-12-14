import model from "./model.js";

export const findAllGameScores = () => model.find();
export const findGameScoreById = (id) => model.findById(id); // model.find({ _id: id });
export const createScore = (score) => model.create(score); // Don't allow mutation of scores for now
export const deleteOne = (id) => model.deleteOne({ _id: id });
export const findGameScoresByUserId = (userId) => model.find({ userId: userId });
export const findGameScoresByGameId = (gameId) => model.find({ gameId: gameId });
export const findGameScoresByUsernameAndGameId = (username, gameId) => model.find({ username: username, gameId: gameId });
export const numScoresByUserId = (userId) => model.countDocuments({ userId: userId });