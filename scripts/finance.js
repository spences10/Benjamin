//Simple interest calculation
document.getElementById('simpleInterestButton').addEventListener('click', function() {
		var sCalc = document.getElementById('princ').value * document.getElementById('percent').value * document.getElementById('time'); 
		document.getElementById('answer'),innerHTML = parseInt(sCalc)
});
