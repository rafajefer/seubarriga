const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi, Docker!!! 2");
});

app.listen(3000);
