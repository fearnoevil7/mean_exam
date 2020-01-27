console.log("*******CONTROLLER*******");

const Pet = require('../models/pet.js');

module.exports = {
    index: function(req, res){
        Pet.find().sort({type: 'descending'})
            .then(pets => {
                res.json(pets);
            })
            .catch(err => res.json(err));
    },

    // create: function(req, res){
    //     const pet = new Pet();
    //     pet.name = req.body.name;
    //     pet.type = req.body.type;
    //     pet.description = req.body.description;
    //     pet.skill1 = req.body.skill1;
    //     pet.skill2 = req.body.skill2;
    //     pet.skill3 = req.body.skill3;
    //     console.log(pet);
    //     pet.save()
    //         .then(newPetData => {
    //             console.log('pet created: ', newPetData);
    //             res.json(newPetData);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             res.json(err);
    //         })
    // },

    create: function(req, res){
        Pet.find({name: req.body.name})
        .then( pets => {
            if (pets.length > 0) {
                return Promise.reject({unique: 'Error Name Must be Unique'});
            }
            const pet = new Pet();
            pet.name = req.body.name;
            pet.type = req.body.type;
            pet.description = req.body.description;
            pet.skill1 = req.body.skill1;
            pet.skill2 = req.body.skill2;
            pet.skill3 = req.body.skill3;
            console.log(pet);
            pet.save()
                .then(newPetData => {
                    console.log('pet created: ', newPetData);
                    res.json(newPetData);
                })
                .catch(err => {
                    console.log(err)
                    res.json(err)
                })
        })
            .catch(err => {
                console.log(err);
                res.json({unique: err});
                console.log({unique: err});
            })
    },

    // create: function(req, res){
    //     Pet.find({name: req.body.name})
    //     .then(pets => {
    //         if (pets.length > 0) {
    //             return Promise.reject('Error Name Must be Unique');
    //         }
    //         const pet = new Pet();
    //         pet.name = req.body.name;
    //         pet.type = req.body.type;
    //         pet.description = req.body.description;
    //         pet.skill1 = req.body.skill1;
    //         pet.skill2 = req.body.skill2;
    //         pet.skill3 = req.body.skill3;
    //         console.log(pet);
    //         if (pet.save()){
    //             console.log('pet created: ', pet);
    //             res.json(pet);
    //         }
    //     }, { runValidators: true })
    //     .catch(err => {
    //         console.log(err);
    //         res.json({err});
    //     })
    // },

    update: function(req, res){
        Pet.find({name: req.body.name})
        .then ( pets => {
            if (pets.length > 0) {
                return Promise.reject({unique: "Error Name Must be unique"});
            }
            Pet.update({_id: req.body._id}, {$set: {
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
                skill1: req.body.skill1,
                skill2: req.body.skill2,
                skill3: req.body.skill3
            }}, { runValidators: true })
                .then(data => {
                    console.log(data);
                    res.json(data);
                })
                .catch(err => {
                    errors = [];
                    for (var key in err.errors) {
                        errors.push(err.errors[key].message);
                    }
                    console.log("Error", err);
                    res.json({errors: errors});
                })
        })
        .catch(err => {
            console.log(err);
            res.json({unique: err});
            console.log({unique: err});
        })
    },

    // update: function(req, res){
    //     Pet.update({_id: req.body._id}, {$set: {
    //         name: req.body.name,
    //         type: req.body.type,
    //         description: req.body.description,
    //         skill1: req.body.skill1,
    //         skill2: req.body.skill2,
    //         skill3: req.body.skill3
    //     }}, { runValidators: true })
    //         .then(data => {
    //             console.log(data);
    //             res.json(data);
    //         })
    //         .catch(err => {
    //             console.log("Error", err);
    //             res.json(err);
    //         })
    // },

    show: function(req, res){
        Pet.findOne({_id: req.params.id})
            .then(pet => res.json(pet))
            .catch(err => {
                console.log("error: ", err)
                res.json(err);
            });
    },

    destroy: function(req, res) {
        Pet.findOne({_id: req.params.id})
            .then(destroyPet => {
                Pet.remove(destroyPet)
                    .then(data => res.json(data))
            })
            .catch(err => {
                console.log("We have an error!", err);
                res.json(err);
            })
            .catch(err => {
                onsole.log("We have an error!", err);
                res.json(err);
            })
    },

    like: function(req, res) {
        Pet.findOne({_id: req.params.id})
            .then(pet => {
                console.log("********Like Test*******", pet.likes)
                pet.likes += 1;
                console.log("********Like Test results*******", pet.likes)
                console.log(pet);
                pet.save();
                // res.json(pet)
            })
            .catch(err => {
                console.log("error: ", err)
                res.json(err)
            })
    }
}