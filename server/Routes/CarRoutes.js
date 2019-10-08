const express = require("express");
const router = express.Router();
const { list,show,create,update,remove } = require("../Controllers/CarsController");

router.get("/cars", list);
router.get("/cars/:id", show);
router.post("/cars", create);
router.put("/cars/:id", update);
router.delete("/cars/:id", remove);

module.exports = router;
