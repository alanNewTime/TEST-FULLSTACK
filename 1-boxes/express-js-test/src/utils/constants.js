//create an array of users i will use to test my routes
const mockUsers = [
  { id: 1, firstName: "Andy", lastName: "Nloga", age: 24 },
  { id: 2, firstName: "Alan", lastName: "Omam", age: 28 },
  { id: 3, firstName: "Paul", lastName: "Aibi", age: 32 },
  { id: 4, firstName: "Debora", lastName: "Nloga", age: 20 },
];

//create an array of products i will use to test my routes
const mockProducts = [
  { id: 1, type: "car", brand: "toyota", price: "23462.78" },
  { id: 2, type: "pen", brand: "bic", price: "2.00" },
  { id: 3, type: "pasta", brand: "panzani", price: "12.50" },
  { id: 4, type: "pc", brand: "lenovo", price: "462.68" },
];

//create an array of box characteristics i will use to test my routes
const mockBoxes = [
  {
    id: 1,
    position: [0, 0, 0],
    color: "red",
    width: 1,
    height: 2,
    depth: 3,
    wireframeColor: "white",
  },
  {
    id: 2,
    position: [5, 0, -5],
    color: "brown",
    width: 2,
    height: 2,
    depth: 2,
    wireframeColor: "white",
  },
  {
    id: 3,
    position: [-5, 0, -5],
    color: "pink",
    width: 1,
    height: 1,
    depth: 3,
    wireframeColor: "black",
  },
];

module.exports = {
  mockUsers,
  mockProducts,
  mockBoxes,
};
