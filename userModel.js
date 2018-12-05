var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	firstName: {type: String},
	lastName: {type: String},
	gender: {type: String},
	userName: {type: String},
});

var User = module.exports = mongoose.model('user', userSchema);

module.exports.get = function(callback, limit) {
	User.find(callback).limit(limit);
}