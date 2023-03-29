let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
// getter, setter 사용 시 객체에 fullName 이라는 가상의 프로퍼티가 생긴다.
// 가상의 프로퍼티는 읽고 쓸 순 있지만 실제로는 존재 X

// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper
console.log(user.fullName); // Alice Cooper