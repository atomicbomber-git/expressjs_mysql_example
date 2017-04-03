const express = require("express");
const app = express();

const nunjucks = require("nunjucks");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("atek_elektronik", "atomicbomber", "alohomora", {
	define: { timestamps: false }
});

nunjucks.configure("views", {
	autoescape: true,
	express: app,
	noCache: true
});

var Product = sequelize.import(__dirname + "/models/product.js");

app.get("/", function (req, res) {
	Product.findAll().then(function (result) {
		res.render("home.njk", {username: "James", products: result });
	});
});

app.listen(8000, function () {
    console.log("Hello");
});
