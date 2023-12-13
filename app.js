import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import userRoutes from "./users/routes.js";
import gameRoutes from "./game_data/routes.js";
import Welcome from "./welcome.js";
import FollowsRoutes from "./follows/routes.js";

//const CONNECTION_STRING = process.env.DB_CONFIG_STRING;
//mongoose.connect(CONNECTION_STRING);
//mongoose.connect("mongodb://127.0.0.1:27017/country")
mongoose.connect("mongodb+srv://kevinevasquez5:ltM6J5JU9g7XMDty@cluster0.gpmfas1.mongodb.net/country?retryWrites=true&w=majority");

const app = express();

app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL
    })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

  
app.use(express.json());


Welcome(app);
userRoutes(app);
FollowsRoutes(app);
gameRoutes(app);
app.listen(process.env.PORT || 4000);