const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);

app.get("/", (req, res) => {
    res.render("index");
});

app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(PORT, () => {
    console.log(
        `Portfolio running at http://localhost:${PORT}`
    );
});
