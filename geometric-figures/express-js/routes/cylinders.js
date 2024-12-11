const Router = require("express");
const router = Router();

const { cylinder } = require("../utils/constants");

router.get("/api/cylinders", (request, response) => {
  response.send(cylinder);
});

module.exports = router;
