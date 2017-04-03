const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
	return sequelize.define("products", {
		id: { type: Sequelize.INTEGER, primaryKey: true },
		name: { type: Sequelize.STRING },
		brand: { type: Sequelize.STRING },
		type: { type: Sequelize.STRING },
		description: { type: Sequelize.STRING },
		price: { type: Sequelize.STRING },
		image: { type: Sequelize.STRING }
	});
}