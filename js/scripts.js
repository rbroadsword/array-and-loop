//Business Logic
function roboger(input) {
  let number = parseInt(input);
  let one = "beep";
  let result = "";
  for (i=0; i <= number.length; i++) { 
    if (number[i] === 1) {
      result = one;
      console.log(result);
      console.log(number[i]);
    }
  }
  return result; 
}







//UI Logic