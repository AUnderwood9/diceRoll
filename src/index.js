function rollDie(maxNumber){
	var rollResult = Math.floor(Math.random() * Math.ceil((maxNumber - 1) + 1));
	console.log(rollResult);
	return rollResult;
}

// function checkRoll(){
// 	var die1 = rollDie(6);
// 	var die2 = rollDie(6);

// 	if(die1 == die2){
// 		alert("You got a match!");
// 	} else {
// 		console.log("No match :(");
// 	}
// }

// var rollDiceButton = document.getElementById("roll-dice-button");
var rollDiceButton = $("#roll-dice-button");
var dieOne = document.getElementById("die-1");
var dieTwo = document.getElementById("die-2");
var rollMessage = document.getElementById("roll-message");

// rollDiceButton.onclick = function(){
// 	dieOne.textContent = rollDie(6);
// 	dieTwo.textContent = rollDie(6);

// 	if(dieOne.textContent == dieTwo.textContent){
// 		rollMessage.textContent = "You've got a match!";
// 	} else {
// 		rollMessage.textContent = "Sorry, you lost all of your money :(";
// 	}
// }

// console.log($("#roll-dice-button"));

rollDiceButton.click(function(){
	dieOne.textContent = rollDie(6);
	dieTwo.textContent = rollDie(6);

	if(dieOne.textContent == dieTwo.textContent){
		rollMessage.textContent = "You've got a match!";
	} else {
		rollMessage.textContent = "Sorry, you lost all of your money :(";
	}
});