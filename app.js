var val1 = prompt("Enter Your First Value");
var sign = prompt("Enter Your Operator");
var val2 = prompt("Enter Your Second Value");
if (sign === "+") {
    alert((+val1) + (+val2));
}
else if (sign === "-") {
    alert(val1 - val2);
}
else if (sign === "*") {
    alert(val1 * val2);
}
else if (sign === "/") {
    alert(val1 / val2);
}
else if (sign === "%") {
    alert(val1 % val2);
}
else {
   alert("Invalid operator entered!");
}