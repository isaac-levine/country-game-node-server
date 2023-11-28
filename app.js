import "dotenv/config";
import express from "express";
const app = express();
app.use(cors());

import Welcome from "./welcome.js";

Welcome(app);

app.listen(4000);
