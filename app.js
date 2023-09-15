chapter 6-9
Question 1
var b=10;
document.write("Result:<br>The Value Of b is: "+b+"<br>.......................................<br><br>");

document.write("the value of ++b is: "+(++b)+"<br>");
document.write("Now the value of b is: "+b);

document.write("<br><br>The Value of b++ is: "+b++);
document.write("<br>now the value of b is: "+b);

document.write("<br><br>The Value of --b is: "+(--b));
document.write("<br>now the value of b is: "+b);

document.write("<br><br>The Value of b-- is: "+b--);
document.write("<br>now the value of b is: "+b);

Question 2
var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
//--a: a is decremented, so a becomes 1.
//--b: b is decremented, so b becomes 0.
//++b: b is incremented, so b becomes 1 (current value is 0, but we increment before using).
//b--: b is used (current value is 1) and then decremented, so b becomes 0.
document.write("a is "+a);
document.write("<br>b is "+b);
document.write("<br>result is "+result);

Question 3
var userName = prompt("Please enter your name:");
document.write("Hello, "+userName+"! Nice To Meet You.");
  
Question 4
var number = pressInt(prompt("Enter a number:") || 5);
  
    var table = "Multiplication Table for " + number + ":<br>";
    for (let i = 1; i <= 10; i++) {
      table += number+" x "+i+" = "+ number * i+"<br>";
    }
  document.write(table);  


Question 5
  const subject1 = prompt("Enter the name of the first subject:");
  const subject2 = prompt("Enter the name of the second subject:");
  const subject3 = prompt("Enter the name of the third subject:");

  const totalMarksPerSubject = 100;

  const obtainedMarksSubject1 = parseInt(prompt(`Enter obtained marks for ${subject1}:`));
  const obtainedMarksSubject2 = parseInt(prompt(`Enter obtained marks for ${subject2}:`));
  const obtainedMarksSubject3 = parseInt(prompt(`Enter obtained marks for ${subject3}:`));

  const totalMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
  const percentage = (totalMarks / (totalMarksPerSubject * 3)) * 100;


  document.write(`
    <table border="1">
      <tr>
        <th>Subject</th>
        <th>Total Marks</th>
        <th>Obtained Marks</th>
        <th>Percentage</th>
      </tr>
      <tr>
        <td>${subject1}</td>
        <td>${totalMarksPerSubject}</td>
        <td>${obtainedMarksSubject1}</td>
      </tr>
      <tr>
        <td>${subject2}</td>
        <td>${totalMarksPerSubject}</td>
        <td>${obtainedMarksSubject2}</td>
      </tr>
      <tr>
        <td>${subject3}</td>
        <td>${totalMarksPerSubject}</td>
        <td>${obtainedMarksSubject3}</td>
      </tr>
      <tr>
        <td colspan="2">Total Marks:</td>
        <td>${totalMarks}</td>
      </tr>
      <tr>
        <td colspan="2">Percentage:</td>
        <td>${percentage.toFixed(2)}%</td>
      </tr>
    </table>
  `);

chapter 12-13
Question 1
function checkInputType(input) {
    const charCode = input.charCodeAt(0);
  
    if (charCode >= 48 && charCode <= 57) {
      return "Number";
    } else if (charCode >= 65 && charCode <= 90) {
      return "Uppercase Letter";
    } else if (charCode >= 97 && charCode <= 122) {
      return "Lowercase Letter";
    } else {
      return "Unknown";
    }
  }
  
  const userInput = prompt("Enter a character (number or string):");
  
  if (userInput) {
    const inputType = checkInputType(userInput);
  
    document.write(`Input "${userInput}" is a ${inputType}`);
  } else {
    document.write("No input provided.");
  }
  
Question 2

var num1 = parseInt(prompt("Enter the first integer:"));
    var num2 = parseInt(prompt("Enter the second integer:"));
    if (num1 > num2) {
      document.write(num1+" is larger than "+num2);
    } else if (num2 > num1) {
      document.write(num2+" is larger than "+num1);
    } else if (num1==num2){
     document.write(num1+" is equal to "+num2);
    }
    else{
     document.write("Invalid Input.")
    }

Question 3
const userInput = parseFloat(prompt("Enter a number:"));

  if (userInput > 0) {
    document.write("The number is positive.");
  } else if (userInput < 0) {
    document.write("The number is negative.");
  } else if(userInput===0) {
    document.write("The number is zero.");
  }
 else {
    document.write("Invalid input. Please enter a valid number.");
}

Question 4
var userdata = prompt("Enter a character:");

if (userdata && userdata.length === 1) {
  var lowercaseChar = userdata.toLowerCase();

  if (
    lowercaseChar === 'a' || lowercaseChar === 'e' || lowercaseChar === 'i' || lowercaseChar === 'o' || lowercaseChar === 'u') {
    document.write("The character is a vowel.");
  } else {
    document.write("The character is not a vowel.");
  }
} else {
  console.log("Invalid input. Please enter a single character.");
}

Question 5
var correctPassword = "Musab111";

var typePassword = prompt("Enter your password:");

if (!typePasswordPassword) {
  document.write("Please enter your password.");
} else if (typePasswordPassword === correctPassword) {
    document.write("Correct! The password you entered matches the original password.");
} else {
    document.write("Incorrect password.");
}

Question 6
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

Question 7
var time=pressInt(prompt("Enter Your Time:"));
if(time>=0000 && time<1200){
    document.write("Good Morning!");
} else if(time>=1200 && time<1700){
    document.write("Good Afternoon!");
}else if(time>=1700 && time<2100){
    document.write("Good Evening!");
}else if(time>=2100 && time<=2359){
    document.write("Good Night!");
}else{
    document.write("INVALID INPUT");
}

CHAPTER 14-16
Question 1-7
let studentNamesLiteral = [];
let studentNamesObject = new Array();
let stringsArray = ["Mango", "Grapes", "Orange"];
let numbersArray = [1, 2, 3, 4, 5];
let booleanArray = [true, false, true];
let mixedArray = [1, "Mango", true, "Grapes", 3.14];
let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Qualifications:</h2>");
document.write("<ol>");
for (let i = 0; i < educationQualifications.length; i++) {
  document.write(`<li>${educationQualifications[i]}</li>`);
}
document.write("</ol>");

Question 8
var studentNames = ["Adam", "Ibrahim", "Dawood"];
var scores = [320, 230, 480];
var totalMarks = 500;
for (let i = 0; i < studentNames.length; i++) {
  const percentage = (scores[i] / totalMarks) * 100;
  document.write(`Score of ${studentNames[i]} is ${scores[i]} out of ${totalMarks}. Percentage: ${percentage.toFixed(2)}% <br>`);
}

Question 9
var colorArray = ["Black", "Blue", "White"];
document.write("Original Array:", colorArray);

// a. Add a color to the beginning of the array
var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colorArray.unshift(colorToAddAtBeginning);

// Display the updated array after adding to the beginning
document.write("Array after adding at the beginning:", colorArray);

// b. Add a color to the end of the array
const colorToAddAtEnd = prompt("Enter a color to add to the end:");
colorArray.push(colorToAddAtEnd);

// Display the updated array after adding to the end
document.write("Array after adding at the end:", colorArray);

// c. Add two more colors to the beginning of the array
colorArray.unshift("Blue", "Balck");

// Display the updated array after adding more colors to the beginning
document.write("Array after adding more at the beginning:", colorArray);

// d. Delete the first color in the array
colorArray.shift();

// Display the updated array after deleting the first color
document.write("Array after deleting the first color:", colorArray);

// e. Delete the last color in the array
colorArray.pop();

// Display the updated array after deleting the last color
document.write("Array after deleting the last color:", colorArray);

// f. Add a color at a specific index
var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
var colorToAddAtIndex = prompt("Enter a color to add at that index:");
colorArray.splice(indexToAdd, 0, colorToAddAtIndex);

// Display the updated array after adding at a specific index
document.write("Array after adding at a specific index:", colorArray);

// g. Remove colors from a specific index
var indexToRemove = pressInt(prompt("Enter the index to remove color(s):"));
var numberOfColorsToRemove = pressInt(prompt("Enter the number of colors to remove:"));
colorArray.splice(indexToRemove, numberOfColorsToRemove);

// Display the updated array after removing colors at a specific index
document.write("Array after removing from a specific index:", colorArray);

Question 10
var studentScores = [320, 230, 480, 80 ,120];

document.write("Scores Of Students:", studentScores);

// Sort the array in ascending order using Array's sort method
studentScores.sort((a, b) => a - b);
document.write("<br>Ordered Scores Of Students:", studentScores);
