let router = require('express').Router();
var userController = require('./userController');
var userToUpdate;

router.param('userName', function (req, res, next, userName) {
    userToUpdate = userName;
    console.log(userToUpdate);
    next();
});

router.get('/users',  function (req, res) {
    userController.getAll().then(function (users) {
        res.send(users);
    }, function (error) {
        res.status(500).send({
            message: error.message || "An error occured while retrieving users."
        });
    });
});

router.get('/users/:userName', function (req, res, userName){
	userController.findOne(userToUpdate).then(function (user) {
		console.log(user);	
		res.send(user);
	}), function (error) {
		res.status(500).send({
			message: error.message || "An error occured while retrieving user"
		})
	}

});

module.exports = router;