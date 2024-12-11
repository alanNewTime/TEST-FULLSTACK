//import and create a router object START
const Router = require("express");
const router = Router();
//import and create a router object END

const { mockBoxes } = require("../utils/constants");
const { query, validationResult } = require("express-validator");

// after having installed cors i import it here
//it helps when we want to send our api call to a frontend program.Otherwise
//i will have a blockage
const cors = require("cors");

//make cours a global middleware.
//after import i use the cors in this way
router.use(cors());

router.get(
  "/api/boxes",
  query("filter")
    .isString()
    .notEmpty()
    .withMessage("Must be at least 3-10 characters")
    .isLength({ min: 3, max: 10 })
    .withMessage("Must be at least 3-10 characters"),
  (request, response) => {
    //added the "validationResult()" function
    const result = validationResult(request);
    //console.log(result);
    //use QUERY PARAMETERS to filter through the users
    const {
      query: { filter, value },
    } = request;

    //when filter and value are defined it returns what i want filtered and how i want it filtered
    if (filter && value) {
      return response.send(
        mockBoxes.filter((user) => user[filter].includes(value))
      );
    } else {
      return response.send(mockBoxes);
    }
  }
);

module.exports = router;
