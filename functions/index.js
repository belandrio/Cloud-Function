const functions = require("firebase-functions");
const app = require("express")();

const { signup, login } = require("./authentication");

const { createPost } = require("./createPost");

const AuthMiddleware = require("./utils/AuthMiddleware");


// Routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/createPost", AuthMiddleware, createPost);

//https://baseurl.com/api/endpoint The endpoint can be either login or signup

exports.api = functions.region("europe-west3").https.onRequest(app);
