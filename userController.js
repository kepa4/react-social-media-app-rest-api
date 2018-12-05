User = require('./userModel');

var userController = {
    getAll: getAll, 
    updateOne: updateOne,
    findOne: findOne,
    createUser: createUser,
    deleteUser: deleteUser
};

function getAll() {
    return User.find();
}

function findOne(query){
    return User.findOne({userName: query});
}

function createUser(body){
	return User
		.create({
			firstName: body.firstName,			
			lastName: body.lastName,
			gender: body.gender,
			userName: body.userName
		});
}

function deleteUser(query) {
	return User
		.deleteOne({userName: query});
}

function updateOne(userToUpdate, body){
    return Project
        .updateOne({ userName: userToUpdate.userName }, 
            { $set:
                { 
                    firstName: body.firstName,
                    lastName: body.lastName,
                    gender: body.gender,
                }
            })
        .exec();
}

module.exports = userController;

