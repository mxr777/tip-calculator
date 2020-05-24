var costOfMeal = prompt("Input the total cost of your meal without a dollar sign. Example = 30.38");

var preTipAmount = costOfMeal*0.15;

var tipAmount = Math.round(preTipAmount*100)/100;

alert("The tip amount is $" + tipAmount);

var totalQuestion = prompt("Do you want to know the total price of the meal with the tip included? Type yes or no with no caps.");

var preGrandTotal = parseFloat(costOfMeal) + parseFloat(preTipAmount);

var grandTotal = Math.round(preGrandTotal*100)/100;

if (totalQuestion === "yes") {
  alert("Your grand total is $" + grandTotal);
}
