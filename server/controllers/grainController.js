const { Grain } = require('../models/grain');

module.exports= {
    getAll: () => {
        return Grain.find();
    },
    create: (body) => {
        let newGrain = new Grain(body);
        return newGrain.save();
    }
}

