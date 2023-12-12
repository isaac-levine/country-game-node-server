import mongoose from 'mongoose';
const Schema = new mongoose.Schema({
    userId: { type: String, required: true },
    username: { type: String, required: true, username: true },
    gameId: { type: String, required: true },
    score: { type: Number, required: true },
},
    { collection: "game_data" }
);

export default Schema;