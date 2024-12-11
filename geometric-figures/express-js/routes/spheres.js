const Router = require("express");
const router = Router();

const { sphere } = require("../utils/constants");

router.get("/api/spheres", (request, response) => {
  response.send(sphere);
});

module.exports = router;
