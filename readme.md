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