var initTemp = 20;
var maxTemp = 120;
var incrValue = 5;

//States what each number is tied to//

function toCelsius(F){
	return (F * 32) / 1.8;
}
//Needed Function for Assignment//

for (i = 20; i <= 120; i += 5){
	console.log(toCelsius(i));
		var table = document.getElementById("F to C");
		var row = table.insertRow(-2);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell (1);
		  cell1.innerHTML = i;
		  cell2.innerHTML = toCelsius(i);
}

//Creates the table rows & columns and inputs & outputs//

