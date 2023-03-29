const fs = require('fs');

// new 는 무엇일까?
// 사용자가 값의 커스터마이징이 가능 -> 유지보수 좋음

function user(id, password, email) {
  this.id = id;
  this.password = password;
  this.email = email;
}
let names = ["leejaekwon" ,"daljae", "jieun"];
let passwords = ["1234", "1234", "1234"];
let emails = ["nowkwon@gmail.com", "daljae@gmail.com", "jieun@gmail.com"];

let members = [];
for(let i = 0; i < 3; i++) {
  members.push(new user(names[i], passwords[i], emails[i]));
}
// stringfy : 객체의 값을 JSON 화 하겠다.
// stringfy : null, 2 넣어주니 깔끔하게 나왔다. 구문 확인해보자.
// 만들어진 JSON 파일을 DB에 새기면 된다.
fs.writeFileSync("members.JSON", JSON.stringify(members, null, 2), "utf-8");

console.dir(members);

// 리터럴 객체는 한계가 있다.
// const b = {
//   year: 2023,
//   month: 3,
//   day: 29
// }