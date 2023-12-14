import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import userRoutes from "./users/routes.js";
import gameRoutes from "./game_data/routes.js";
import Welcome from "./welcome.js";
import FollowsRoutes from "./follows/routes.js";
import LikesRoutes from "./likes/routes.js";
import CountryRoutes from "./country_metadata/routes.js";

const CONNECTION_STRING = process.env.DB_CONFIG_STRING;
mongoose.connect(CONNECTION_STRING);

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
LikesRoutes(app);
CountryRoutes(app);
app.listen(process.env.PORT || 4000);