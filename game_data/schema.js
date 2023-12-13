import mongoose from 'mongoose';
const Schema = new mongoose.Schema({
    username: { type: String, required: true},
    gameId: { type: String, required: true },
    pts: { type: String, required: true },
},
    { collection: "game_data" }
);

export default Schema;