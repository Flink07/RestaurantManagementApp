const Food = require('../models/foods.model');

module.exports = {

    getAll: (req, res) => {
    Food.find()
    .then((allFoods) => {
        res.json({ foods: allFoods });
    })
    .catch(err => res.status(400).json(err))
},

//---------------------------Get ONE -------------------------------------------

    getOne: (req, res) => {
        Food.findOne({ _id: req.params.id })
        .then((oneFood) => {
            res.json({ food: oneFood });
        })
        .catch(err => res.status(400).json(err))
},

//---------------------------Create One  -------------------------------------------

    create: (req, res) => {
        Food.create(req.body)
        .then((newlyCreatedFood) => {
            res.json({ food: newlyCreatedFood });
        })
        .catch(err => res.status(400).json(err));
},

//---------------------------Update One  -------------------------------------------

    update: (req, res) => {
        Food.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updateFood) => {
            res.json({ food: updateFood });
        })
        .catch(err => res.status(400).json(err));
},


//---------------------------Delete One  -------------------------------------------

    delete: (req, res) => {
        Food.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result });
        })
        .catch(err => res.status(400).json(err))
},

};