// 리터럴의 한계 -> 반복이 어렵다.
const itsMe = {
  firstName: "lee",
  lastName: "jaekwon",
  age: 27,
  email: "nowkwon@gmail.com",
  phone: "010-0000-0000",
  address: "Daejeon Seogu",
  like: "delicious food, cars",
  hate: "gaji",
  hobby: "sleep",
  coffee: "a a",
  food: "samgyeopsal",
  sleepTime: "23:00",
}

function personal(firstName, lastName, age, email, phone, address, like, hate, hobby, coffee, food, sleepTime) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
  this.phone = phone;
  this.address = address;
  this.like = like;
  this.hate = hate;
  this.hobby = hobby;
  this.coffee = coffee;
  this.food = food;
  this.sleepTime = sleepTime;
}
const a = new personal("lee", "jaekwon", 27, "nowkwon@gmail.com", "010-0000-0000", "Daejeon Seogu", "food, cars", "gaji", "sleep", "a a", "samgyeopsal", "23:00");

console.log(a);