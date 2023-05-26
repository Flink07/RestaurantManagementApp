const FoodController = require('../controllers/foods.controller');

// Routes follow proper RESTful API naming convention
//HTTP request methods determine the CRUD functionality


module.exports = (app) => {
    app.get('/api/foods', FoodController.getAll);
    app.post('/api/foods', FoodController.create);
    app.get('/api/foods/:id', FoodController.getOne);
    app.put('/api/foods/:id', FoodController.update);
    app.delete('/api/foods/:id', FoodController.delete);
};