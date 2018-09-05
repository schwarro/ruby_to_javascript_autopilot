
function getNewCar() {
  var newCar = {
    city: "Toronto",
    passengers: 0,
    gas: 100
  };
  return newCar;
}

function addCars(cars, newCar) {
  cars.push(newCar);
  return "Adding new car to fleet. Fleet size is now " + cars.length + ".";
}

function pickUpPassenger(car) {
  car.passengers += 1;
  car.gas -= 10;
  return "Picked up passenger. Car now has " + car.passengers + "passengers.";
}

function getDestination(car) {
  if (car.city == "Toronto") {
    return "Mississauga"
  } else if (car.city == "Mississauga") {
    return  "London"
  } else if (car.city == "London") {
    return "Toronto"
  }
}

function fillUpGas(car) {
  var oldGas = car.gas;
  car.gas = 100;
  return "Filled up to " + getGasDisplay(car.gas) + "on gas from " + getGasDisplay(oldGas) + ".";
}

function getGasDisplay(gasAmount) {
  return gasAmount + "%"
}

function drive(car, cityDistance) {
  if (car.gas < cityDistance) {
    return fillUpGas(car);
  }

  car.city = getDestination(car);
  car.gas -= cityDistance;

  return "Drove to " + car.city + ". Remaining gas: " + getGasDisplay(car.gas) + ".";
}

function dropOffPassengers(car) {
  var previousPassengers = car.passengers;
  car.passengers = 0;
  return "Dropped off " + previousPassengers + " passengers.";
}

function act(car) {
  var distanceBetweenCities = 50;
  if (car.gas < 20) {
    fillUpGas(car);
  } else if (car.passengers < 3) {
    pickUpPassenger(car);
  } else {
    if (car.gas < distanceBetweenCities) {
      return fillUpGas(car);
    }
    var droveTo = drive(car, distanceBetweenCities);
    var passengersDropped = dropOffPassengers;

    return droveTo + passengersDropped;
  }
}

function commandFleet(cars) {
  for(var index = 0; index < cars.length; index++) {
    var action = act(cars[index])
    console.log("Car " + (1+index) + ":" + action);
  }
  console.log("---")
}

function addOneCarPerDay(cars, numDays) {
  for(var index = 0; index < numDays; index++) {
    var newCar = getNewCar();
    console.log(addCars(cars, newCar));
    commandFleet(cars);
  }
}

var cars = [];
addOneCarPerDay(cars, 10)
