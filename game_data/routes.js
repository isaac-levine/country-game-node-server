import * as dao from "./dao.js";

function gameRoutes(app) {
    const findAllGameScores = async (req, res) => {
        const scores = await dao.findAllGameScores();
        res.json(scores);
    };
    app.get("/api/game_data", findAllGameScores);
    const createGameScore = async (req, res) => {
        const score = await dao.creatScore(req.body);
        res.json(score);
    };
    app.post("/api/game_data", createGameScore);
    const findGameScoreById = async (req, res) => {
        const score = await dao.findGameScoreById(req.params.id);
        res.json(score);
    };
    app.get("/api/game_data/:id", findGameScoreById);
    const findGameScoresByUserId = async (req, res) => {
        const scores = await dao.findGameScoresByUserId(req.params.userId);
        res.json(scores);
    };
    app.get("/api/game_data/user/:userId", findGameScoresByUserId);
    const findGameScoresByGameId = async (req, res) => {
        const scores = await dao.findGameScoresByGameId(req.params.gameId);
        res.json(scores);
    };
    app.get("/api/game_data/game/:gameId", findGameScoresByGameId);
    const findGameScoresByUserIdAndGameId = async (req, res) => {
        const scores = await dao.findGameScoresByUserIdAndGameId(req.params.userId, req.params.gameId);
        res.json(scores);
    };
    app.get("/api/game_data/user/:userId/game/:gameId", findGameScoresByUserIdAndGameId);
}
export default gameRoutes;