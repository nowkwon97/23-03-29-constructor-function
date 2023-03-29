module.exports = function (array, name) {
  for(let i =0; i < studentList.length; i++) {
    if(studentList[i] === name) {
      console.log(i);
    }else {
      console.log(`해당 순서는 ${name}씨가 아닙니다.`)
    }
  }
}

// export dafult function (array, name) {
//   for(let i =0; i < studentList.length; i++) {
//     if(studentList[i] === name) {
//       console.log(i);
//     }else {
//       console.log(`해당 순서는 ${name}씨가 아닙니다.`)
//     }
//   }
// }