const Router = require("express");
const router = Router();

const { box } = require("../utils/constants");

// READ: Get all boxes
router.get("/api/boxes", (request, response) => {
  response.send(box);
});

// READ: Get a single box by id
router.get("/api/boxes/:id", (request, response) => {
  const boxId = parseInt(request.params.id);
  const foundBox = box.find((b) => b.id === boxId);

  if (!foundBox) {
    return response.status(404).send({ message: "Box not found" });
  }

  response.send(foundBox);
});

// CREATE: Add a new box
router.post("/api/boxes", (request, response) => {
  const { width, height, depth } = request.body;

  if (!width || !height || !depth) {
    return response.status(400).send({ message: "Missing box dimensions" });
  }

  const newId = box.length ? box[box.length - 1].id + 1 : 1;
  const newBox = { id: newId, width: width, height: height, depth: depth };

  box.push(newBox);
  response.status(201).send(newBox);
});

// UPDATE: Update an existing box by id
router.put("/api/boxes/:id", (request, response) => {
  const boxId = parseInt(request.params.id);
  const { width, height, depth } = request.body;

  const foundBox = box.find((b) => b.id === boxId);

  if (!foundBox) {
    return response.status(404).send({ message: "Box not found" });
  }

  foundBox.width = width !== undefined ? width : foundBox.width;
  foundBox.height = height !== undefined ? height : foundBox.height;
  foundBox.depth = depth !== undefined ? depth : foundBox.depth;

  response.send(foundBox);
});

// DELETE: Delete a box by id
router.delete("/api/boxes/:id", (request, response) => {
  const boxId = parseInt(request.params.id);
  const index = box.findIndex((b) => b.id === boxId);

  if (index === -1) {
    return response.status(404).send({ message: "Box not found" });
  }

  const deletedBox = box.splice(index, 1);
  response.send(deletedBox);
});

module.exports = router;
