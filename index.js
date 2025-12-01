import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(bodyParser.json());

// ULTRAMSG datos
const INSTANCE_ID = "instance153389";
const TOKEN = "su9tSamyvokrgrubf";

// Grupo de choferes
const GRUPO = "Kk7ec2otdba3kj5TZ2flas@g.us";

app.post("/webhook", async (req, res) => {
    try {

        const text = req.body?.body?.message?.text || "";
        if (!text) return res.sendStatus(200);

        console.log("Cliente escribió:", text);

        await axios.post(https://api.ultramsg.com/${INSTANCE_ID}/messages/group, {
            token: TOKEN,
            to: GRUPO,
            body: text
        });

        console.log("Mensaje enviado al grupo!");
        res.sendStatus(200);

    } catch (error) {
        console.log("ERROR reenviando:", error.message);
        res.sendStatus(500);
    }
});

app.listen(3000, () => {
    console.log("BOT CarWy listo en puerto 3000");
});
