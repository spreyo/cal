const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(helmet());

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve("public")));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.send(path.resolve(__dirname, 'asdf.ics'));
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})