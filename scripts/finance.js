//Simple interest calculator
function simpleCalc() {
	var sCalc = document.getElementById('princ').value * document.getElementById('percent').value * document.getElementById('time').value; 
	document.getElementById('answer').innerHTML = '$' + ' ' + sCalc;
}	
