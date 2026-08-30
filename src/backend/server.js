import express from "express";

const app = express();
app.use(express.json());
const port = 3000;
const users = []
app.get("/user", (req, res) => {
    res.send(`<h1>${users}</h1>`);
});
app.post("/user", (req, res) => {
    console.log(req.body);
    const result = users.find((e) => { return e.name === "Ahmed" })
    if (result) {
        res.status(400).send(`<h1>user is alrady exists</h1>`);
    }
    users.push(req.body);
    res.status(201).send(`<h1>done</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});