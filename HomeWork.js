
// <!-----------------------TASK 1.1  ------------------------------>
const converterOnUah = (number, c) => {
    const usdOnUAH = document.getElementById('outputUAH').innerHTML = (number * c).toFixed(2);
}
const convertorOnUSD = (number, c ) => {
    const uahOnUSD = document.getElementById('outputUSD').innerHTML = (number / c).toFixed(2);
}



// <!-----------------------TASK 1.2  ------------------------------>

// const minMax = arr => ({
//   min: Math.min(...arr),
//   max: Math.max(...arr)
// });
// console.log(minMax([-1,22,-6,101]))
// //__________________________________
// function valuesMinMax(arr){
//   const obj = {
//     min : Math.min(...arr),
//     max : Math.max(...arr)
//   }
//   return obj 
// }
// valuesMinMax([2,24,-6,12])
// //___________________________________
// function minMax(arr){
//   const values = {};
//   values.max = 0;
//   values.min = 0;
//   for (i=0; i<arr.length; i++) {
//     if (values.max < arr[i]) {
//       values.max = arr[i];  
//     } 
//     if (values.min > arr[i]){
//       values.min = arr[i]
//     }
//   }
//   return values
// }
// minMax([1,23,-5,11])
 

// // <!-----------------------TASK 1.3  ------------------------------>

// function arithmeticMean(arr){
//   let average = 0;
//   for (i=0; i < arr.length; i++){
//    average += arr[i] / arr.length;
//   }
//   return average
// }
// arithmeticMean([1,4,2])
// // _______________________________________________________________________
// const arr=[1,4,2],
//       average = arr.reduce(function(item, current){
//   return item + current/arr.length;
// },0)


// // <!-----------------------TASK 2  ------------------------------>

// function recurs(n){
//   console.log(n)
//   if(n > 1){
//     recurs(n - 1)
//   }
// }
// recurs(10)

// // <!-----------------------TASK 3  ------------------------------>

// const users = {
//   1: {
//     name: 'Roman',
//     lastName: 'Lurov',
//     otherData: {
//       role: 'student'
//     }
//   },

//   2: {
//     name: 'Ivan',
//     lastName: 'Bondarenko',
//     otherData: {
//       role: 'student'
//     }
//   },

//   3: {
//     name: 'Roman',
//     lastName: 'Lurov',
//     otherData: {
//       role: 'student'
//     }
//   },
  
//   4: {
//     name: 'Oleg',
//     lastName: 'Murko',
//     otherData: {
//       role: 'student'
//     }
//   },

//   5: {
//     name: 'Kurz',
//     lastName: 'Smith'
//   }
// };

// Object.keys(users).forEach(function(key) {
//      const user = users[key];
//      console.log(key + ") name:"  + user.name);
//      console.log("last name:"  + user.lastName);
//      user.otherData ? console.log("role:"  + user.otherData.role) : console.log("role: not specified");
// })
 

// // <!-----------------------TASK 4  ------------------------------>

// function ChristmasTree(symbol,iterations) {
//   let str = '';
//   for (i=0;i<15;i++) {
//     str += '*';
//     console.log(str);
//   }
// }
// ChristmasTree('*',15);
  
// // <!-----------------------TASK 5  ------------------------------>

// function fibonacci(length){
//   let arr=[0,1];
//   for (i=2; i<length; i++) {
//     arr[i] = arr[i-2] + arr[i-1];
//     arr.push(arr[i]);
//   }
//   return console.log(arr)
// }
// fibonacci(15);

