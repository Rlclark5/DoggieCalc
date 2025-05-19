let input = document.querySelector(".input");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");


const calculateDoggieAge = (humanAge) => {
  console.log("fun work");
  console.log(humanAge);
let doggieAge =humanAge * 7;


  result.innerHTML = "Your doggie is " + doggieAge + " years old in human years!";
console.log("Your doggie is" + doggieAge + "years old in human years!");
 

  
  
}



equalsButton.addEventListener("click", () => {
console.log("button work")
  let userInput = input.value;
  console.log(userInput)
 
  
calculateDoggieAge(Number(userInput));
 


})



// DO NOT TOUCH THIS CODE
clearButton.onclick = function() {
 input.value = "";
 result.innerHTML = "";

}