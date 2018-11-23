
// <!-----------------------TASK 1.1  ------------------------------>

var $ = prompt('Введіть сумму в доларах','');
function conversion(){
    var sum;
    sum = $ * 26;
    alert("UAH= "+sum+"   "+"USD= "+$);
  return sum
}
conversion()


// <!-----------------------TASK 1.2  ------------------------------>


function minMax(arr){
    var max=arr[0];
    var min=arr[0];
   
    for (i=0; i<arr.length; i++) {
      if (max< arr[i]) {
        max=arr[i]
      }
    }
     for (j=0; j<arr.length; j++) {
     if (min>arr[j]){
        min=arr[j]
      }
    }
    return console.log('max= '+max,'min= '+min);
  }
  minMax([1,23,-5,11])



// <!-----------------------TASK 1.3  ------------------------------>

var arr=[1,4,2];
function arithmeticMean(arr){
  var average=0;
  for (i=0; i< arr.length; i++){
   average += arr[i] / arr.length;
  }
return console.log(average)
}
arithmeticMean(arr)
// _______________________________________________________________________

var arr=[1,4,2];
var average= arr.reduce(function(item, current){
  return item +current/arr.length;
},0)
console.log(average)


// <!-----------------------TASK 2  ------------------------------>

function testRecursion(number) {
    if(number<10) {
      testRecursion(number+1);
    }
    return console.log(number);
  }
  testRecursion(0)

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
         console.log(key + ") name:"  + user.name);
         console.log("last name:"  + user.lastName);
         console.log("role:"  + user.otherData)
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
      var arr=[0,1];
      for (i=2; i<length; i++) {
        arr[i] = arr[i-2] + arr[i-1];
        console.log(arr[i]);
     }
    }
    fibonacci(15);

