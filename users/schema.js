import mongoose from 'mongoose';
const Schema = new mongoose.Schema({
    username: { type: String, required: true, username: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    status: {
        type: String,
        enum: ['STANDARD', 'PRO', 'ADMIN'],
        default: 'STANDARD',
    },
    bio: String,
},
    { collection: "users" }
);

export default Schema;