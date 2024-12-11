const Router = require("express");
const router = Router();

const boxRoutes = require("./boxes");
const cylinderRoutes = require("./cylinders");
const planeRoutes = require("./planes");
const sphereRoutes = require("./spheres");

router.use(boxRoutes);
router.use(cylinderRoutes);
router.use(planeRoutes);
router.use(sphereRoutes);

module.exports = router;
