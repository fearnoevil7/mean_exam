console.log("*******PET MODEL*******")

const mongoose = require('mongoose');
    const PetSchema = new mongoose.Schema({
        name: {type: String, required: [true, "pet name is required"], minlength: [3, "Pet name must be atleast 3 characters long"]},
        type: {type: String, required: [true, "pet must have a type"], minlength: [3, "Pet inputted type must be atleast 3 characters long"]},
        description: {type: String, required: [true, "pet description is required"], minlength: [3, "Pet description must be atleast 3 characters long"]},
        skill1: String,
        skill2: String,
        skill3: String,
        likes: {type: Number, default: 0},
    }, {timestamps: true})
    const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;
