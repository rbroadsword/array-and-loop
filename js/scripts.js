//Business Logic
function roboger(number) {
  let userNumber = number;
  let one = "beep";
  let two = "boop";
  let three = "won't you be my neighbor?";
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
    }else if(userNumber.includes("3")){
      console.log("Cr33p");
      result = three; 
    }
  }
  return result; 
}




//UI Logic