import Express from "express";
import fs from "fs";
import { config } from "dotenv";
config();

const app = Express();

app.get("/:id", (req, res) => {
    const id = req.params.id;

    fs.readFile("data.json", "utf8", (error, data) => {
        if (error) {
            console.log(error);
            return;
        }

        const dataRecibida = JSON.parse(data);

        res.send(dataRecibida[id]);
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("on");
});
