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

class FindCar {
  constructor(company, vehicle) {
    this.company = company;
    this.vehicle = vehicle
  }
  set company(company) {
    if(typeof(company) === "string") {
      this._company = company;
    }
  }
  set vehicle(vehicle) {
    if(typeof(vehicle) === "string") {
      this._vehicle = vehicle;
    }
  }
  get company() {
    return this._company;
  }
};

let hyundaiSonata = new FindCar("Hyundai", "Sonata");
console.log(hyundaiSonata.company);