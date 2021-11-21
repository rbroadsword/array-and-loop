# Arrays and Looping

#### Enter a number and return an altered string 

#### By: Ryan Broadsword

## Technologies Used 

* HTML
* CSS 
* Bootstrap
* jQuery 
* java script

## Description 

A webpage that has the user enter a number and returns a range from 0 to the users inputted number with numbers that contain a 1, 2, or 3 altered.  

## Setup/Installation Requirements

* Clone this repository to your desktop. 
* Navigate to the directory. 
* Open index.html
* Enter a number hit submit.

## Known Bugs 

* js user interface. 

## License 

* Not currently licensed

## Contact Information 

* Ryan Broadsword - rbroadsword@gmail.com

Tests: 

Describe: roboger(number)

Test: "It will return "beep" for a number with a 1"
Code: roboger("1");
Expected Output: "beep"

Test: "It will return "boop" for a number with a 2"
Code: roboger("2");
Expected Output: "boop"

Test: "It will return "won't you be my neighbor? for a number with a 3"
Code: roboger("3");
Expected Output: "Won't you be my neighbor"

Test: "It will return "won't you be my neighbor?" for a number that contains a 3 and a 2 or 1."
Code: roboger("23");
Expected Output: "won't you be my neighbor?"

Describe: range(number)

Test: "It will return a range starting at 0 and incrementing by 1 up to the entered number."
Code: range("5");
Expected Output: ["0", "1", "2", "3", "4", "5"]