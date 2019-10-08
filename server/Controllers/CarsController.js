const Car = require("../Models/Car");

exports.list = function list(req, res) {
  Car.find({}).exec()
    .then(cars => {
      return res.json(cars);
    });
};

exports.show = function show(req, res) {
  Car.findById(req.params.id).exec()
    .then(car => {
      return res.json(car);
    });
};

exports.create = function create(req, res) {
  const car = new Car({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    engine: req.body.engine
  });
  car.save()
    .then(cars => {
      return res.json(cars);
    });
};

exports.update = function update(req, res) {
  return res.json(Car[0].name = req.params.id);
};

exports.remove = function remove(req, res) {
  Car.findByIdAndRemove(req.params.id).exec()
    .then(cars => {
      return res.json(cars);
    });
};
