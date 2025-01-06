type CarYear=number
type CarType=string
type CarModel=string;
type Car={
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear:CarYear=2009;
const carType:CarType="Toyota";
const carModel:CarModel="Corolla";
const car:Car={
    year: carYear,
    type: carType,
    model: carModel
}

console.log(car);

interface Rectangle{
    width: number;
    height: number;
};

const rectangle:Rectangle={
    height:20,
    width:10
};
console.log(rectangle);