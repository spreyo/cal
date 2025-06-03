const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
app.use(helmet());

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve("public")));

app.use(express.urlencoded({ extended: true }));

app.get("/calendar", (req, res) =>{
    const id = req.query.id;
    const cal = fetch(`https://i6s5qfccjsaoxecm.public.blob.vercel-storage.com/calendars/${id}.ics`, {method: "GET", headers: {"Content-Type" : "text/calendar"}}).then(response =>{
        response.text().then(text => {
            res.setHeader("Content-Type", "text/calendar");
            res.send(text);
        });
    })
})



app.listen(3000, () => {
    console.log("Server is running on port 3000");
})