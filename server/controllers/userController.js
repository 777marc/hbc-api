const { User } = require('../models/user');

module.exports = {
    getAll: () => {
        return User.find();
    },
    find : (email) => {
        return User.find({ email });
    },
    create: (body) => {
        let newUser = new User(body);
        return newUser.save();
    }
}