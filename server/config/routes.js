console.log("*******ROUTES*******");

const pets = require("../controllers/pets.js");

module.exports = function(app){
    app.get('/app/pets', function(req, res){
        pets.index(req, res);
    })

    app.get('/app/pets/:id', function(req, res){
        pets.show(req, res);
    })

    app.get('/app/like/:id', function(req, res) {
        pets.like(req, res);
    })

    app.post('/app/pet', function(req, res){
        pets.create(req, res);
    })
    app.put('/app/pet', function(req, res){
        pets.update(req, res);
    })

    app.delete('/app/destroy/:id', function(req, res){
        pets.destroy(req, res);
    })

}