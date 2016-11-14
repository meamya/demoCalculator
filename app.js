//this is my main js file

function addNums(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = num1 = num2;
    var totalAmountDisplay = document.getElementById("totalAmountDisplay");
   var total = document.createTextNode(sum).value;
   totalAmountDisplay.appendChild(total);
}
