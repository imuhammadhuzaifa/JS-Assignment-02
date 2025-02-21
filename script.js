// Chapter 05
// Math Expressions:

// Qno 01:

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("Sum of 3 and 5 is " + sum);

document.write("<br><br>");

// Qno 02:

var num1 = 3;
var num2 = 5;
var sum = num1 - num2;

document.write("<br>Subtraction of 3 and 5 is " + sum);

document.write("<br>");

var num1 = 3;
var num2 = 5;
var sum = num1 * num2;

document.write("<br>Multiplication of 3 and 5 is " + sum);

document.write("<br>");

var num1 = 3;
var num2 = 5;
var sum = num1 / num2;

document.write("<br>Division of 3 and 5 is " + sum);

document.write("<br>");

var num1 = 3;
var num2 = 5;
var sum = num1 % num2;

document.write("<br>Modulus of 3 and 5 is " + sum);

document.write("<br>");

// Qno 03:

var num;
document.write("<br>Value after variable declaration is " + num);

document.write("<br>");

num = 5;
document.write("<br>Initial value: " + num);

document.write("<br>");

var num = ++num;
document.write("<br>Value after increment is: " + num);

document.write("<br>");

var num = num + 7;
document.write("<br>Value after addition is: " + num);

document.write("<br>");

var num = --num; 
document.write("<br>Value after decrement is: " + num);

document.write("<br>");

var num = num % 3;
document.write("<br>The remainder is: " + num);

document.write("<br><br>");

// Qno 04:

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("<br>Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");

document.write("<br><br>");

// Qno 05:

var num = 4;
for (var i = 1; i <= 10; i++) {
    document.write("<br>" + num + " x " + i + " = " + num * i);
}

document.write("<br><br>");

// Qno 06:

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write("<br>" + celsius + "°C is " + fahrenheit + "°F");

document.write("<br>");

var fahrenheit = 70;
var celsius = (fahrenheit - 32) * 5 / 9;
document.write("<br>" + fahrenheit + "°F is " + celsius + "°C");

document.write("<br><br>");

// Qno 07:

var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

document.write("<br>Price of item 1 is " + item1Price);
document.write("<br>Quantity of item 1 is " + item1Quantity);
document.write("<br>Price of item 2 is " + item2Price);
document.write("<br>Quantity of item 2 is " + item2Quantity);
document.write("<br>Shipping Charges " + shippingCharges);
document.write("<br>Total cost of your order is " + totalCost);

document.write("<br><br>");


// Qno 08:

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marksheet</h1>");
document.write("<br>Total marks: " + totalMarks);
document.write("<br>Marks obtained: " + marksObtained);
document.write("<br>Percentage: " + percentage + "%");

document.write("<br><br>");

// Qno 09:

var usDollar = 10;
var saudiRiyal = 25;
var totalCurrency = (usDollar * 104.80) + (saudiRiyal * 28);

document.write("<h1>Currency in PKR</h1>");
document.write("<br>Total Currency in PKR: " + totalCurrency);

document.write("<br><br>");

// Qno 10:

var num = 5;
var arithmetic = ((num + 5) * 10) / 2;

document.write("<br>The result is: " + arithmetic);

document.write("<br><br>");

// Qno 11:

var currentYear = 2020;
var birthYear = 1992;
var age = currentYear - birthYear;

document.write("<h1>Age Calculator</h1>");
document.write("<br>Current Year: " + currentYear);
document.write("<br>Birth Year: " + birthYear);
document.write("<br>Age: " + age);

document.write("<br><br>");

// Qno 12:

var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("<h1>The Geometrizer</h1>");
document.write("<br>Radius of a circle: " + radius);
document.write("<br>The circumference is: " + circumference);
document.write("<br>The area is: " + area);

document.write("<br><br>");

// Qno 13:

var snack = "Chocolate Chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var totalAmount = (maxAge - currentAge) * 3;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br>Favourite Snack: " + snack);
document.write("<br>Current age: " + currentAge);
document.write("<br>Estimated Maximum Age: " + maxAge);
document.write("<br>Amount of snacks per day: " + amountPerDay);
document.write("<br>You will need " + totalAmount + " to last you until the ripe old age of " + maxAge);

document.write("<br><br>");
document.write("<br><br>");

// Chapter 06
// Math Expressions:

// Qno 01:

var num = 10;
document.write("<h2>Result:</h2>")
document.write("<br>The value of a is: " + num);
document.write("<br>............................");
document.write("<br><br>");
document.write("<br>The value of ++a is: " + ++num);
document.write("<br>Now the value of a is: " + num);
document.write("<br><br>The value of a++ is: " + num++);
document.write("<br>Now the value of a is: " + num);
document.write("<br><br>The value of --a is: " + --num);
document.write("<br>Now the value of a is: " + num);
document.write("<br>");
document.write("<br>The value of a-- is: " + num--);
document.write("<br>Now the value of a is: " + num);

document.write("<br><br>");

// Qno 02:

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write("<br>a is " + a);
document.write("<br>b is " + b);
document.write("<br>result is " + result);

document.write("<br><br>");

// Qno 03:

var name = prompt("Enter your name");
alert("Hello " + name);

document.write("<br><br>");

// Qno 04:

var num = +prompt("Enter a number");
if (num === 0) {
    num = 5;
}

document.write("<br><br>");

// Qno 05:

var table = +prompt("Enter a number", "5");
if (table === 0) {
    table = 5;
}
document.write("<h2>Table of " + table + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write("<br>" + table + " x " + i + " = " + table * i);
}

document.write("<br><br>");

// Qno 06:

var subject1 = prompt("Enter subject 1 name");
var subject2 = prompt("Enter subject 2 name");
var subject3 = prompt("Enter subject 3 name");
var totalMarks = 100;
var obtainedMarks1 = +prompt("Enter obtained marks of " + subject1);
var obtainedMarks2 = +prompt("Enter obtained marks of " + subject2);
var obtainedMarks3 = +prompt("Enter obtained marks of " + subject3);
var percentage1 = (obtainedMarks1 / totalMarks) * 100;
var percentage2 = (obtainedMarks2 / totalMarks) * 100;
var percentage3 = (obtainedMarks3 / totalMarks) * 100;
var totalPercentage = (percentage1 + percentage2 + percentage3) / 3;
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3 + "%</td></tr>");
document.write("<tr><td></td><td>" + (totalMarks * 3) + "</td><td>" + (obtainedMarks1 + obtainedMarks2 + obtainedMarks3) + "</td><td>" + totalPercentage + "%</td></tr>");
document.write("</table>");

document.write("<br><br>");

