//Simple interest calculator
function simpleCalc() {
	var sCalc = document.getElementById('princ').value * document.getElementById('percent').value * document.getElementById('time').value; 
	document.getElementById('answer').innerHTML = '$' + ' ' + sCalc;
}
function profitCalc() {
	var pCalc = document.getElementById('moneymade').value - document.getElementById('moneyspent').value;
	document.getElementById('profitAnswer').innerHTML = '$' + ' ' + pCalc;
}	
