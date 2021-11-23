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
  let one = " 'beep' ";
  let two = " 'boop' ";
  let three = " 'won't you be my neighbor?' ";
  let result = [];
  let resultAsString = result.join(", ");//I am not sure how to get it to return this in the UI Logic?
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
      result.push(i)
    }
  }
  //return resultAsString; when I have this here, it will not return on my index.html, it shows correctly in the console though. 
  return result
}


//UI Logic
$(document).ready(function() {
  $("form#number-range").submit(function(event){
    event.preventDefault();
    const userNumber = $('#user-number').val(); //this works
    const returnRange = range(userNumber); //this works
    const resultRoboger = roboger(returnRange); 
    $('#result-output').html(resultRoboger);
  });
});