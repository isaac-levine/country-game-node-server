import * as dao from "./dao.js";

function gameRoutes(app) {
    const findAllGameScores = async (req, res) => {
        const scores = await dao.findAllGameScores();
        res.json(scores);
    };
    app.get("/api/game_data", findAllGameScores);
    const createGameScore = async (req, res) => {
        const createdScore = await dao.createScore(req.body);
        res.json(createdScore);
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
    const findAverageGameScoreByUserIdAndGameId = async (req, res) => { 
        const scores = await dao.findGameScoresByUserIdAndGameId(req.params.username, req.params.gameId);
        console.log(req.params.usersame);g
        if (scores.length === 0) {
            res.json(0);
            return;
        }
        const total = scores.reduce((acc, score) => acc + score.pts, 0);
        const average = total / scores.length;
        res.json(average);
    }
    app.get("/api/game_data/user/:userId/game/:gameId", findAverageGameScoreByUserIdAndGameId);
}
export default gameRoutes;