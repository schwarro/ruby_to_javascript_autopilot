var apples = 14;
console.log(apples);
console.log("I have " + apples + " apples.");

var materials = ["wood", "metal", "stone"];
var words = {
  "elephant": "The world's largest land mammal.",
  "school": "A place of learning.",
  "ice cream": "A delicious milk-based dessert."
};

console.log(materials);
console.log(words);

var num = 16
if (num > 10) {
  console.log(num + " is greater than 10");
} else if (num == 10) {
  console.log(num + " is exactly 10");
} else {
  console.log(num + " must be less than 10");
}

for (var index = 0; index < 10; index++) {
  console.log("Doing the same thing over and over.");
}

var base = 5;
for (var index = 1; index < 20; index++) {
  num = index + base;
  console.log(num);
}

var total = 0;
for (var index = 1; index < 100; index++) {
  total += index;
  console.log(total);
}

for (var index = 3; index < 15; index++) {
  if(index > 9) {
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("YOu are too short to ride this rollercoaster.")
  }
}

var containers = ["purse", "wallet", "backpack"];
for (var index = 0; index < containers.length; index++) {
  console.log(containers[index]);
}

function helloWorld() {
  console.log("Hello World!");
}
helloWorld();

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

var amount = add(5,7);
console.log(amount);
