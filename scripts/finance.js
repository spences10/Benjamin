//Simple interest calculation
function simpleCalc() {
		var sCalc = document.getElementById('princ').value * document.getElementById('percent').value * document.getElementById('time'); 
		document.getElementById('answer'),innerHTML = parseInt(sCalc)
});
