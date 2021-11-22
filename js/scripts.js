//Business Logic

//trying to merge my two functions roboger and range
//function roboger(range) {
  // let number = range;
  // let one = "beep";
  //let two = "boop";
  //let three = "won't you be my neighbor?";
  //let result = [];
  //console.log(number);
//for (i = 0; i <= number.length; i++) {
  //if (number.includes("1") && number.includes("3") === false && number.includes("2") === false){
      //console.log("hey oney!")
      //result = one; 
    //}else if(number.includes("2") && number.includes("3") === false){
      //console.log("dose gurl");
      //result = two;
    //}else if(number.includes("3")){
      //console.log("Cr33p");
      //result = three; 
    //}
  //}
  //return result; 
//}

//original working functions 
function range(userNumber){
  let myNumber = parseInt(userNumber);
  let range = [];
  console.log(typeof userNumber);
for (let i = 0; i <= myNumber; i++) {
  range.push(i);
  }
  return range;
}

function roboger(userInput) {
  let input = userInput;
  console.log(typeof input);
  let one = "beep";
  let two = "boop";
  let three = "won't you be my neighbor?";
  let result = [];
  console.log(input);
for (i = 0; i <= input.length; i++) {
  if (input.includes("1") && input.includes("3") === false && input.includes("2") === false){
      console.log("one gurl!")
      result = one;
      return result; 
    }else if(input.includes("2") && input.includes("3") === false){
      console.log("two gurl");
      result = two;
    }else if(input.includes("3")){
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
    const userNumber = $('#user-number').val(); //this works
    const returnRange = range(userNumber); //this works
    console.log(userNumber);
    const resultRoboger = roboger(range); 
    console.log(resultRange);
    $('#result-output').html('RESULT!'); //this works!
  });
});