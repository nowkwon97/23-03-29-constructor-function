const carBrandList = [
  "Hyundai",
  "Kia",
  "Renault",
  "Ssangyong",
  "Chevorlet",
  "Bmw",
  "Mercedes-Benz",
  "Audi",
  "Pueojo",
  "Volkswegan",
  "Jaguer",
  "Fiat",
  "Ds",
  "Lamborghini",
  "Ferarri",
  "Pagani",
  "Porsche",
  "Genesis",
  "Suzki",
  "Missbisi",
  "Jeep",
  "Honda",
  "Nissan",
  "Infinity",
  "Lexus",
]

function searching(array, name) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === name) {
      console.log(i);
    }else {
      console.log("대상이 아닙니다.")
    }
  };
}
// const test = searching(carBrandList, "Genesis");

function makeConstruct(order, name) {
  this.order = order;
  this.name = name;

  function order(order){
    if(typeof(order) === "number") {
      return this._order;
    }
  }
}
const test = makeConstruct(5, carBrandList[5]);