const express = require("express");
const app = express();

const PORT = 3000;

const boxRoutes = require("./routes/index");
app.use(boxRoutes);
const cylinderRoutes = require("./routes/index");
app.use(cylinderRoutes);
const planeRoutes = require("./routes/index");
app.use(planeRoutes);
const sphereRoutes = require("./routes/index");
app.use(sphereRoutes);

app.get("/", (request, response) => {
  response.send("main route test");
});

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
