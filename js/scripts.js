//Business Logic

//trying to merge my two functions roboger and range
function roboger(range) {
  let number = range;
  let one = "beep";
  let two = "boop";
  let three = "won't you be my neighbor?";
  let result = [];
  console.log(number);
for (i = 0; i <= number.length; i++) {
  if (number.includes("1") && number.includes("3") === false && number.includes("2") === false){
      console.log("hey one!")
      result = one; 
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
//original working functions 
function range(userNumber){
  let myNumber = parseInt(userNumber);
  let range = [];
for (let i = 0; i <= myNumber; i++) {
  range.push(i);
  }
  return range;
}

function roboger(userNumber) {
  let number = userNumber;
  let one = "beep";
  let two = "boop";
  let three = "won't you be my neighbor?";
  let result = [];
  console.log(number);
for (i = 0; i <= number.length; i++) {
  if (number.includes("1") && number.includes("3") === false && number.includes("2") === false){
      console.log("one gurl!")
      result = one;
      return result; 
    }else if(number.includes("2") && number.includes("3") === false){
      console.log("two gurl");
      result = two;
    }else if(number.includes("3")){
      console.log("3 gurl");
      result = three; 
    }
  }
  return result; 
}



//UI Logic

$(document).ready(function() {
  $("form#number-range").submit(function(event){
    event.preventDefault();
    console.log("button kinda works"); //runs to here
    const userNumber = $('#user-number').val();
    const range = range(userNumber); //tried breakpoint here
    const roboger = roboger(userNumber); //tried breakpoint here
    $('#result-output').html(range);
  });
});