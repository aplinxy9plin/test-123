const express = require("express")
const app = express()
const { port } = require("./config")

app.get("/", (req, res) => {
    res.json({"type": "ok"})
})

app.listen(port)
