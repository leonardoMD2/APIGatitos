import Express from "express";
import data from "./data.js";
import { config } from "dotenv";
config();

const app = Express();

qpp.get("/", (req, res) => {
    res.send("gatitos api");
});

app.get("/:id", (req, res) => {
    const id = req.params.id;

    res.send(data[id]);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("on");
});
