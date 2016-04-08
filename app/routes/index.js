'use strict';

var path = process.cwd();
var result = require(path + '/app/controllers/headerParser.js');

module.exports = function (app) {

	app.route('/')
		.get(function (req, res) {
			res.send(result(req));
		});
		
};
