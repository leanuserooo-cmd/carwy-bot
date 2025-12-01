import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(bodyParser.json());

// ULTRAMSG datos tuyos
const INSTANCE_ID = "instance153389";
const TOKEN = "su9tSamyvokrgrubf";

// Grupo de choferes
const GRUPO = "Kk7ec2otdba3kj5TZ2flas@g.us";

app.post("/webhook", async (req, res) => {
    const text = req.body?.body?.message?.text || "";
    if (!text) return res.sendStatus(200);

    await axios.post(https://api.ultramsg.com/${INSTANCE_ID}/messages/chat, {
        token: TOKEN,
        to: GRUPO,
        body: text
    });

    res.sendStatus(200);
});

app.listen(10000, () => console.log("BOT CarWy ON"));