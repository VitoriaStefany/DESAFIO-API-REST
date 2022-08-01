import express from "express";
import db from "./config/dbConnect";
import routes from "./routes";

db.on("error", console.log.bind(console, 'Connection error'));
db.once("open", () => {console.log('Successful database connection')});

const app = express();
app.use(express.json());
routes(app);

export default app;