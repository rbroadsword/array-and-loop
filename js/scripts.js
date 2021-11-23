//Business Logic

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

function roboger(returnRange) {
  let input = returnRange;
  console.log(typeof input);
  let one = " beep ";
  let two = " boop ";
  let three = " won't you be my neighbor? ";
  let result = [];
  console.log(input);
for (i = 0; i <= input.length - 1; i++) {
  if (input[i].toString().includes("1") && input[i].toString().includes("3") === false && input[i].toString().includes("2") === false){
      result.push(one);
      console.log(result)
    }else if(input[i].toString().includes("2") && input[i].toString().includes("3") === false){
      result.push(two);
      console.log(result)
    }else if(input[i].toString().includes("3")){
      result.push(three);
      console.log(result)
    }else {
      result.push(i);
    }
  }
  return result; 
  console.log(result)
}


//UI Logic
$(document).ready(function() {
  $("form#number-range").submit(function(event){
    event.preventDefault();
    
    console.log("button kinda works"); //runs to here
    const userNumber = $('#user-number').val(); //this works
    const returnRange = range(userNumber); //this works
    //console.log(userNumber);
    const resultRoboger = roboger(returnRange); 
    console.log(resultRoboger);
    $('#result-output').html(resultRoboger); //this works! need to change to resultRoboger once I get that working.
  });
});