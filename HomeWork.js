
// <!-----------------------TASK 1.1  ------------------------------>

var USD = prompt('Введіть сумму в доларах','');
var UAH = prompt('Введіть сумму в гивнях','');
function conversion(){
    if (USD > 0){
    sumUAH= USD * 26;
    } else if (USD === undefined) {
      sumUAH = "Сума не була введена"
    }
    (UAH > 0) ? sumUSD = UAH / 26 : sumUSD = "Сума не була введена"
    
  return alert(USD + "дол. = " + sumUAH.toFixed(2)+"грн\n\r"+UAH + "грн = " + sumUSD.toFixed(2)+"дол.");
}
conversion()


// <!-----------------------TASK 1.2  ------------------------------>


function minMax(arr){
  const values = {};
  values.max = 0;
  values.min = 0;
  for (i=0; i<arr.length; i++) {
    if (values.max < arr[i]) {
      values.max = arr[i];  
    } 
    if (values.min > arr[i]){
      values.min = arr[i]
    }
  }
  return values
}
minMax([1,23,-5,11])
 



// <!-----------------------TASK 1.3  ------------------------------>

var arr = [1,4,2];
function arithmeticMean(arr){
  let average = 0;
  for (i=0; i < arr.length; i++){
   average += arr[i] / arr.length;
  }
  return average
}
arithmeticMean(arr)
// _______________________________________________________________________

var arr=[1,4,2];
var average= arr.reduce(function(item, current){
  return item +current/arr.length;
},0)


// <!-----------------------TASK 2  ------------------------------>

function recurs(n){
  console.log(n)
  if(n > 1){
    recurs(n - 1)
  }
}
recurs(10)

// <!-----------------------TASK 3  ------------------------------>

const users = {
  1: {
    name: 'Roman',
    lastName: 'Lurov',
    otherData: {
      role: 'student'
    }
  },

  2: {
    name: 'Ivan',
    lastName: 'Bondarenko',
    otherData: {
      role: 'student'
    }
  },

  3: {
    name: 'Roman',
    lastName: 'Lurov',
    otherData: {
      role: 'student'
    }
  },
  
  4: {
    name: 'Oleg',
    lastName: 'Murko',
    otherData: {
      role: 'student'
    }
  },

  5: {
    name: 'Kurz',
    lastName: 'Smith'
  }
};

Object.keys(users).forEach(function(key) {
     const user = users[key];
     console.log(key + ") name:"  + users[key].name);
     console.log("last name:"  + users[key].lastName);
     users[key].otherData ? console.log("role:"  + users[key].otherData.role) : void 1;
})
 

// <!-----------------------TASK 4  ------------------------------>

function ChristmasTree(symbol,iterations) {
  let str = '';
  for (i=0;i<15;i++) {
    str += '*';
    console.log(str);
  }
}
ChristmasTree('*',15);
  
// <!-----------------------TASK 5  ------------------------------>

function fibonacci(length){
  let arr=[0,1];
  for (i=2; i<length; i++) {
    arr[i] = arr[i-2] + arr[i-1];
    arr.push(arr[i]);
  }
  return console.log(arr)
}
fibonacci(15);

