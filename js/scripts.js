//Business Logic
function roboger(userNumber) {
  let number = userNumber;
  let one = "beep";
  let two = "boop";
  let three = "won't you be my neighbor?";
  let result = "";
  console.log(number);
for (i = 0; i <= number.length; i++) {
  if (number.includes("1") && number.includes("3") === false && number.includes("2") === false){
      console.log("hey one!")
      result = one;
      return result; 
    }else if(number.includes("2") && number.includes("3") === false){
      console.log("two gurl");
      result = two;
    }else if(number.includes("3")){
      console.log("Cr33p");
      result = three; 
    }
  }
  return result; 
}

function range(userNumber){
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

$(document).ready(function() {
  $("form#number-range").submit(function(event){
    event.preventDefault();
    const userNumber = $('#user-number').val();
    const range = range(userNumber);
    const roboger = roboger(userNumber);
    $('#range-output').html(range)
  })
})