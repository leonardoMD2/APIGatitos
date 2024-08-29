import Express from "express";
import data from "./data.js";
import { config } from "dotenv";
import cors from "cors";
config();

const app = Express();
app.use(cors());
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("on");
});

app.get("/:id", (req, res) => {
    const id = req.params.id;

    res.send(data[id]);
});

app.get("/", (req, res) => {
    res.send("gatitos api");
});
