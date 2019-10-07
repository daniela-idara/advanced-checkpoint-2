import Car from "../Models/Car";

export function list(req, res) {
  Car.find({}).exec()
    .then(cars => {
      return res.json(cars);
    });
}

export function show(req, res) {
  Car.findById(req.params.id).exec()
    .then(car => {
      return res.json(car);
    });
}

export function create(req, res) {
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
}

export function update(req, res) {
  return res.json(Car[0].name = req.params.id);
}

export function remove(req, res) {
  Car.findByIdAndRemove(req.params.id).exec()
    .then(cars => {
      return res.json(cars);
    });
}
