const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];
// // 배열[마지막번째]
// // -> length는 항상 마지막 인덱스보다 +1 많다.
// // -> 마지막 원소는 length -1 이다.
// console.log(studentList[studentList.length-1]);

// for(let i =0; i < studentList.length; i++) {
//   if(studentList[i] === "이재권") {
//     console.log(i);
//   }else {
//     console.log("해당 순서는 이재권씨가 아닙니다.")
//   }
// }

// function searching(array, name) {
//   for(let i =0; i < studentList.length; i++) {
//     if(studentList[i] === name) {
//       console.log(i);
//     }else {
//       console.log(`해당 순서는 ${name}씨가 아닙니다.`)
//     }
//   }
// }
// console.log(searching(studentList, "이재권"));

// const example = {
//   order: 0,
//   name: "강지민"
// }

// // ? 생성자 함수 방식
// // instance 이름이 붙는다.
// function makeConstruct(order, name) {
//   this.order = order;
//   this.name = name;

//   function order(order) {
//     if(typeof (order) === "number") {
//       return this._order;
//     }
//   }
// }

// // ? 객체 리턴 방식
// // 객체를 만들었다는 것이지 찍어낸다는 것은 아니다.
// function makeObject(order, name) {
//   if(typeof(order) === "number") {
//     return {
//       order: order,
//       name: name
//     }
//   }else {
//     console.error("order는 숫자형이여야 함");
//   }
// }

// let a = makeObject(0, studentList[0]);

// Java 스럽게
// 탐구해보자 중요
class User{
  constructor(order, name) {
    this.order = order;
    this.name = name;
  }
  set order(order) {
    if(typeof(order) === "number") {
      // ._는 구분을 하기 위한 표기(검사가 끝났다는 의미) _ 안써도 되긴 함(문화같은거임)
      this._order = order;
    }
  }
}

let test = [];
studentList.forEach((student, index) => {
  test.push(new User(index, student));
});

console.log(test);