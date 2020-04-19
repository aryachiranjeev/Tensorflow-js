let n = 144;
let k = 10;
let index = 0;
let testArray = [];
let trainArray = [];
let a=20;

const fs = require("fs");
const data = require("home/chiranjeev/Desktop/iris.json");

function formDataset(data) {
  // Creating training and testing dataset
  //
  for (let i = 0; i < Math.round(n / k); i++) {
    index = Math.floor(Math.random() * Math.round(100)) + 1;
    testArray.push(data[index]);
    data.splice(index, 1);
    trainArray = data;
  }

  fs.writeFile(
    "home/chiranjeev/Desktop/training.json",
    JSON.stringify(trainArray),
    function() {}
  );
  fs.writeFile(
    "home/chiranjeev/Desktop/testing.json",
    JSON.stringify(testArray),
    function() {}
  );
}

formDataset(data);

console.log(a);