//this is my main js file

function addNums() {
   var num1 = parseInt(document.getElementById("num1").value);
   var num2 = parseInt(document.getElementById("num2").value);
   console.log(typeof num1);
   var sum = num1 + num2;
   var totalAmountDisplay = document.getElementById("totalAmountDisplay");
   totalAmountDisplay.innerHTML = sum;
   // var total = document.createTextNode(sum);
   // totalAmountDisplay.appendChild(total);
}