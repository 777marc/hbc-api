const mongoose = require('mongoose');

const GrainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateCreated:  {
        type: Date,
        default: new Date()
    }
});

const Grain = mongoose.model('Grain', GrainSchema);

module.exports = { Grain, GrainSchema };
