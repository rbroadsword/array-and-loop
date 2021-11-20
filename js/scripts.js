//Business Logic
function roboger(number) {
  let userNumber = number;
  let one = "beep";
  let two = "boop";
  let three = "won't you be my neighbor?";
  let result = "";
  console.log(number);
for (i = 0; i <= userNumber.length; i++) {
  if (userNumber.includes("1") && userNumber.includes("3") === false && userNumber.includes("2") === false){
      console.log("hey one!")
      result = one;
      return result; 
    }else if(userNumber.includes("2") && userNumber.includes("3") === false){
      console.log("two gurl");
      result = two;
    }else if(userNumber.includes("3")){
      console.log("Cr33p");
      result = three; 
    }
  }
  return result; 
}

function range(number){
  let myNumber = parseInt(number);
  let myArray = [];
  console.log('number')
for (let i = 0; i <= myNumber; i++) {
  myArray.push(i);
  console.log(i)
  myArray;
  }
  return myArray;
}




//UI Logic