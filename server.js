const app = require("express")();
const path = require("path");
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
	res.send("<h1>Hello :)</h1>");
});
app.get("/hi", (req, res) => {
	res.send("<h1>hi :)</h1>");
});
app.get("/page", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => console.log("Listening port " + PORT));
