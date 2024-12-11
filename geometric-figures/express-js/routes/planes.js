const Router = require("express");
const router = Router();

const { plane } = require("../utils/constants");

router.get("/api/planes", (request, response) => {
  response.send(plane);
});

module.exports = router;
