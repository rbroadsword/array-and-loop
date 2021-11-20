//Business Logic
function roboger(number) {
  let userNumber = number;
  let one = "beep";
  let two = "boop";
  let result = "";
  console.log(number);
for (i = 0; i <= userNumber.length; i++) {
  if (userNumber.includes("1")){
     console.log("hey one!");
     result = one;
     return result; 
    }else if(userNumber.includes("2")){
      console.log("two gurl");
     result = two;
    }
  }
  return result; 
}



//UI Logic