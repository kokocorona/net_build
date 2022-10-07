const express = require("express");
const path = require("path");
const http = require("http");
const serveless = require("serverless-http")
const {routesInit} = require("./routes/config_routes")
// require("./db/mongoconnect");

const app = express();

// הגדרת תקיית הפאבליק כתקייה ראשית
app.use(express.static(path.join(__dirname,"public")))

routesInit(app);

const server = http.createServer(app);

let port = process.env.PORT || 3000
server.listen(port);