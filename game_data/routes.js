import * as dao from "./dao.js";

function gameRoutes(app) {
    const findAllGameScores = async (req, res) => {
        const scores = await dao.findAllGameScores();
        res.json(scores);
    };
    app.get("/api/game_data", findAllGameScores);
    const findAllGamePlayers = async (req, res) => {
        const scores = await dao.findAllGameScores();
        const users = scores.map(score => score.username);
        const uniqueUsers = [...new Set(users)];
        res.json(uniqueUsers);
    }
    app.get("/api/game_data/users", findAllGamePlayers);
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
    const findGameScoresByUsernameAndGameId = async (req, res) => {
        const scores = await dao.findGameScoresByUsernameAndGameId(req.params.username, req.params.gameId);
        res.json(scores);
    }
    app.get("/api/game_data/user/:username/game/:gameId", findGameScoresByUsernameAndGameId);
    const findAverageGameScoreByUserIdAndGameId = async (req, res) => { 
        const scores = await dao.findGameScoresByUsernameAndGameId(req.params.username, req.params.gameId);
        if (scores.length === 0) {
            res.json(0);
            return;
        }
        const total = scores.reduce((acc, score) => acc + parseInt(score.pts, 10), 0);
        const average = parseInt((total / scores.length).toFixed(0), 10);
        res.json(average);
    }
    app.get("/api/game_data/user/:username/game/:gameId/average", findAverageGameScoreByUserIdAndGameId);
    const findNumGamesPlayedByUsername = async (req, res) => {
        const games = await dao.numScoresByUserId(req.params.username);
        res.json(games);
    }
    app.get("/api/game_data/user/:username/num_games", findNumGamesPlayedByUsername);
}
export default gameRoutes;